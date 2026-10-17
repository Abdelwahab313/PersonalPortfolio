---
title: One engine, three providers
kind: note
status: published
date: 2026-10-05
order: 2
lede: 'Rate limits caused 65% of review failures. Treating them as "retry later" stopped provider outages from becoming ours.'
tags: [llm, rails, aws]
cover: /img/blog/engine.svg
coverAlt: Line drawing of three provider nodes converging into one engine.
---

## Most failures were not failures

The translation flow ran on LLM calls, and it was metered: credits, ordering and cost all mattered. When I looked at why reviews failed, rate limit errors were behind 65% of them.

Every time a provider throttled, work just failed. The user saw an error. From where they sat, our product was broken.

## Retrying harder was the wrong fix

The obvious answer was to retry. It was also the wrong one. Retrying a throttled call does not make the provider less busy. It makes you noisier.

I also had three providers in play, Claude on Bedrock, OpenAI and Gemini, with different limits and different failure shapes. Scattering 'if 429 then' checks across the codebase meant every provider quirk leaked into every caller.

The hard constraint was that the product had to stay up while a provider degraded. A provider outage could not become our outage.

## One place to handle provider behavior

I put a single engine in front of all three providers. Ordered fallback chains meant a throttled primary did not stop the request. Rate limits stopped being exceptions and became reschedule signals, with retry-after honored and jitter to avoid synchronized retries.

A circuit breaker cut off a provider that kept failing instead of hammering it. JSON repair handled malformed responses so a mangled object did not become a lost translation. Langfuse tracing made the provider path visible instead of guessed at.

The cost was real: a single abstraction meant giving up some vendor-specific behavior. I took that trade. Being able to reason about one request path was worth more than any one provider's niceties.

## Credits were part of the same problem

The engine was metered, so credits and billing correctness sat on top of it. I owned that too.

I found a check-then-act race with a 7 millisecond window that had been silently pausing work. Later I replaced the scattered credit checks with one authorization path, captured across four ADRs.

## What changed

A provider outage stopped being our outage. Customer-visible failures dropped and alerts got quieter, without over-provisioning to sit under every provider's ceiling.

## Lesson

Model provider limits in your own control flow: retry with backoff and reschedule, not as a generic exception. If a dependency will be unreliable, decide how your system behaves before it is.
