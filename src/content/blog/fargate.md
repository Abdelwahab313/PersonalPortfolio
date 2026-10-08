---
title: Draining, not stopping
kind: note
status: published
date: 2026-10-05
order: 1
lede: >-
  ECS scale-in was killing 2-hour translation jobs. So workers drain before they stop.
tags: [aws, ecs, terraform]
diagram: fargate
diagramCaption: >-
  Queue depth drives autoscaling. Drain, then stop.
---
TL;DR: For long-running work, scale-in must drain first.

The product ran on one EC2 host. Translation jobs ran 30 seconds to 2 hours. ECS scale-in would just stop tasks mid-job. Kill one, lose up to 2 hours of work.

We moved to ECS Fargate and swapped the default ECS autoscaler for a queue-depth autoscaler on Lambda. The key change: tell workers to drain before they stop. A few idle minutes on shutdown beat restarting a multi-hour job.

I owned that platform and its Terraform for 16 months and ran the worker fleet 90% on Spot.

Rule: if shutdown can throw away non-trivial work, add a drain-before-stop path to your scaler.
