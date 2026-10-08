---
title: 7.33M rows per call
kind: case-study
status: published
date: 2026-10-05
order: 3
lede: >-
  Aurora at 100% CPU, traced to a status broadcast whose query plan examined
  7.33M rows per call.
tags: [aurora, mysql, performance]
diagram: aurora
diagramCaption: >-
  One broadcast, many clients, one query plan doing the damage.
situation: >-
  Aurora hit 100% CPU. The suspect was a status broadcast that pushes state to
  clients, called 1,013 times.
decision: >-
  Read the plan before touching the query. It examined 7.33M rows per call,
  which is a scan, not a lookup. Drop the join rather than tune it, and
  throttle the caller.
tradeoff: >-
  The throttle means some clients see state less often than they did. The
  instance staying up is worth more than broadcast freshness.
outcome: >-
  CPU back to baseline, the caller down from 1,013 calls to about 100.
---
