---
title: 7.33M rows per call
kind: note
status: published
date: 2026-10-05
order: 3
lede: One status broadcast ran 1,013 queries and pinned Aurora at 100% CPU. The fix was not an index. EXPLAIN showed each call scanning 7.33M rows.
tags: [aurora, mysql, performance]
sections:
  - heading: A database pinned at 100%
    paragraphs:
      - "Aurora MySQL sat at 100% CPU and stayed there. Requests that were fine before started queuing, and the whole product felt it, not just the feature behind the load."
      - "One endpoint was behind it: a status broadcast that pushed state out to a lot of clients. Each time it ran, it called the database 1,013 times."
  - heading: A broadcast doing too much work
    paragraphs:
      - "The broadcast looked harmless. It read the current state and fanned it out. But each call read more than it should have, and there were over a thousand of them."
      - "All I had was a database pinned at full CPU and one caller running a thousand queries a broadcast. I did not yet know why it mattered."
  - heading: The obvious fixes were all wrong
    paragraphs:
      - "The instinct was to tune the query: add an index, raise the instance size, cache harder. All three were guesses."
      - "An index does nothing if the query is not using one, and a bigger instance buys time by hiding the real cause. I also could not take the broadcast down. Clients needed fresh status. The goal was to keep the system up for everyone, not to protect the database by breaking a feature."
  - heading: Read the plan first
    paragraphs:
      - "I ran EXPLAIN on the broadcast query instead of guessing. The plan examined 7.33 million rows per call."
      - "That number changed the problem. This was not a missing index. The query scanned and joined a large set every time it ran, more than a thousand times per broadcast."
  - heading: Drop the join, throttle the caller
    paragraphs:
      - "Two changes, in order of impact. I dropped the join that forced the scan and let the broadcast read only the rows it needed. Then I throttled the caller so it could not fan out 1,013 times in a burst."
      - "Throttling had a visible cost: some clients got a slightly staler broadcast. That was the trade. Freshness for a subset, in exchange for a database that stayed reachable for everyone."
  - heading: What changed
    paragraphs:
      - "Calls dropped from 1,013 to about 100 per broadcast, and CPU came back to baseline. The feature stayed up. No instance resize, no new cache layer, no guessing."
      - "The data behind the dropped join was not worth a full scan a thousand times over."
  - heading: Lesson
    paragraphs:
      - "When a query looks suspicious, run EXPLAIN first. An index is one possible answer. A plan that scans 7.33 million rows per call is a different problem, and you only see it by reading the plan."
---
