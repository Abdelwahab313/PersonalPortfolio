---
title: One engine, three providers
kind: note
status: published
date: 2026-10-05
order: 2
lede: >-
  Rate limits were 65% of review failures. Treating them as "retry later" stopped
  provider outages from becoming ours.
tags: [llm, rails, aws]
diagram: engine
diagramCaption: >-
  One request path. Ordered providers with fallback. Credits metered.
---
TL;DR: Treat 429s as reschedules, not failures. Route by provider behavior, not try/catch.

Rate limit errors were making up 65% of review failures for a metered LLM flow. Every time the primary provider throttled, work failed.

I didn't want to just retry harder. Credits, ordering, and cost all mattered. I also didn't want to duplicate "if 429 then..." logic everywhere.

So I put one engine in front of Claude on Bedrock, OpenAI, and Gemini. Ordered fallback, consistent JSON repair, and Langfuse tracing. Rate limits became "reschedule" signals. No provider's special features leaked across the boundary.

Keeping a single abstraction meant giving up some nice vendor quirks. Worth it: a provider outage stopped being our outage.

I owned credits and billing on top of that engine. Found a 7ms check-then-act race that had been silently pausing work. Replaced scattered credit checks with one authorization path across four ADRs.

Rule: model provider limits in your control flow (retry with backoff/reschedule), not as generic exceptions.
