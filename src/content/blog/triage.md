---
title: The verdict lives in code, not the prompt
kind: case-study
status: published
date: 2026-10-05
order: 4
lede: >-
  An agent that only explains an incident is easy to fool, so the pass and fail
  call lives in code, not in the prompt.
tags: [agents, reliability]
product: Private Translation Cloud
link: https://ptc.wpml.org/
diagram: triage
diagramCaption: >-
  Agents investigate inside guardrails. The verdict gate is code. Writes stay
  human.
situation: >-
  Production exceptions needed triage before a human looked at them. An agent
  that only explains an incident is easy to trust and easy to fool.
decision: >-
  An agent-driven triage platform where the pass and fail call lives in code,
  not in the prompt. Agents run behind production tooling: read-only data
  access with a rollback wrapper, an audit log, and a human-only write gate.
tradeoff: >-
  Code verdicts mean maintaining a test harness instead of a clever prompt.
  Deterministic checks are worth that maintenance, because a false pass is
  worse than no answer.
outcome: >-
  Replayed on past incidents, it caught three false passes. It now also
  adjudicates support claims.
---
