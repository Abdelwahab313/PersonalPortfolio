---
title: Draining, not stopping
kind: case-study
status: published
date: 2026-10-05
order: 1
lede: >-
  ECS scale-in kills tasks mid-job, and these jobs run up to two hours. So the
  autoscaler drains workers before it stops them.
tags: [aws, ecs, terraform]
product: Private Translation Cloud
link: https://ptc.wpml.org/
diagram: fargate
diagramCaption: >-
  Queue depth drives the autoscaler. Workers drain, then stop.
situation: >-
  The product ran on a single EC2 host. Translation jobs run from 30 seconds to
  2 hours, and ECS scale-in kills tasks abruptly, so a naive autoscaler can
  throw away up to two hours of work per worker.
decision: >-
  Move onto ECS Fargate, and replace ECS autoscaling with a queue-depth
  autoscaler on Lambda that tells workers to drain before they stop.
tradeoff: >-
  Draining costs a few idle minutes per shutdown. Stopping costs the whole job,
  because a killed job re-runs from the start. For jobs this long, draining
  wins.
outcome: >-
  I owned that platform and its Terraform for 16 months, and ran the worker
  fleet 90% on Spot.
---
