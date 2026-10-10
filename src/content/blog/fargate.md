---
title: Draining, not stopping
kind: note
status: published
date: 2026-10-05
order: 1
lede: ECS scale-in was killing 2-hour translation jobs. So workers drain before they stop.
tags: [aws, ecs, terraform]
sections:
  - heading: Work that disappeared
    paragraphs:
      - "A translation could run anywhere from 30 seconds to 2 hours. When the worker fleet scaled in, ECS stopped tasks without asking. If a task was mid-job, that work was gone."
      - "Nothing failed loudly. A task that had done most of a long translation just stopped being there. Getting the result meant starting the whole thing over."
  - heading: Scaling in at the wrong time
    paragraphs:
      - "The product had moved from a single EC2 host onto ECS, and the autoscaler was the default one: it watched CPU and memory. For this workload that was the wrong signal."
      - "A worker blocked on a slow provider call can look idle while it is busy, and a task that is only waiting is not compute the fleet needs to keep. CPU told us little about whether there was work to do."
  - heading: The fixes I could not use
    paragraphs:
      - "I could not simply stop scaling in. That means paying for a fleet sized for the worst case all day, and it gives up the point of autoscaling."
      - "Making every job resumable was out of reach. That is a rewrite of how translation state is tracked, and it is the kind of project that quietly becomes a quarter. The team could not freeze feature work around it."
      - "The cheap options were worse. What I needed was a shutdown that did not throw work away."
  - heading: Scaling on the right signal
    paragraphs:
      - "I moved the product onto ECS Fargate and replaced the default autoscaler with a queue-depth autoscaler on Lambda. Queue depth is the honest signal. It measures work waiting, not the CPU fingerprint of tasks sitting on a provider."
      - "The second half mattered more. On scale-in, the scaler tells workers to drain. A task stops taking new jobs, finishes the one it is on, and exits. Only then is it stopped."
  - heading: What it cost
    paragraphs:
      - "Draining means a few idle minutes on shutdown. That is the trade: a short delay while a task finishes its job, instead of throwing away up to 2 hours of work."
      - "I owned that platform and its Terraform for 16 months, and ran the worker fleet 90% on Spot. Spot makes shutdowns routine rather than exceptional, which is exactly why drain has to be part of the scaler and not a hope."
  - heading: Lesson
    paragraphs:
      - "If a shutdown can throw away non-trivial work, add a drain-before-stop path to your scaler. Autoscaling on the wrong signal combines badly with stopping tasks that are still busy."
---
