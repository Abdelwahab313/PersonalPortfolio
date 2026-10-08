---
title: One engine, three providers
kind: case-study
status: published
date: 2026-10-05
order: 2
lede: >-
  One provider means being at its mercy. An engine over Bedrock, OpenAI and
  Gemini treats rate limits as reschedules, not failures.
tags: [llm, rails, aws]
product: Private Translation Cloud
link: https://ptc.wpml.org/
diagram: engine
diagramCaption: >-
  One request path through the engine, ordered providers with fallback, credits
  metered on the side.
situation: >-
  A metered LLM product behind one provider is at that provider's mercy. Rate
  limit errors were responsible for 65% of review failures.
decision: >-
  A provider-agnostic engine layer over Claude on Bedrock, OpenAI and Gemini,
  with ordered fallback chains. Rate limits are treated as reschedules, not
  failures. Responses get JSON repair before anything downstream sees them, and
  Langfuse traces every hop.
tradeoff: >-
  The abstraction means no provider's unique features come for free, and cost
  varies by which branch of the chain runs. In exchange, a provider outage stops
  being our outage.
outcome: >-
  I owned credits and billing correctness on top of the engine, found a 7
  millisecond check-then-act race that had been silently pausing work, and
  replaced the scattered credit checks with one authorization architecture,
  written up across four ADRs.
---
