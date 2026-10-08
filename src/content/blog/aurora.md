---
title: 7.33M rows per call
kind: note
status: published
date: 2026-10-05
order: 3
lede: >-
  Aurora hit 100% CPU. The fix wasn't an index. It was reading the query plan.
tags: [aurora, mysql, performance]
diagram: aurora
diagramCaption: >-
  One broadcast doing too much work.
---
TL;DR: Read EXPLAIN before adding indexes.

Aurora hit 100% CPU. A status broadcast was calling the DB 1,013 times.

My first instinct was to tune it. Instead I looked at the plan. It examined 7.33M rows per call. That was a scan, not a lookup.

I dropped the join and throttled the caller. The broadcast got less fresh for some clients. The DB stayed up for everyone.

That brought calls down from 1,013 to about 100 and CPU back to baseline.

Rule: if a query looks suspicious, EXPLAIN first. Don't assume an index is the answer.
