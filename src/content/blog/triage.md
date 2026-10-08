---
title: The verdict lives in code, not the prompt
kind: note
status: published
date: 2026-10-05
order: 4
lede: >-
  Almost trusted a plausible explanation. So pass/fail had to live in tested code.
tags: [agents, reliability]
diagram: triage
diagramCaption: >-
  Agents investigate inside guardrails. Verdict is deterministic. Writes stay human.
---
TL;DR: If a wrong pass is expensive, don't gate on freeform LLM output. Gate on deterministic checks.

I was looking at production exceptions and wanted to triage them before pulling a human in. An agent could summarize what happened well enough to feel right. That was the problem.

The convincing summary was also the risk. If it confidently said "pass" when it shouldn't, we'd ship a false green light.

Prompting for caution didn't cut it. I could tweak words, but I couldn't make "be careful" deterministic. So I moved the pass/fail to code. Agents could still read, reason, and collect evidence. Only tested checks could return a verdict. Read-only access, a rollback wrapper, an audit log, and a human-only write gate kept it safe.

I tried keeping it prompt-only first. The reasoning got better, but the boundary stayed fuzzy. I'd rather maintain a small test harness than chase that line.

Replaying old incidents caught three false passes. It now also adjudicates support claims.

Rule: if the cost of a wrong answer is high, make the "go/no-go" a unit-testable function, not a sentence.
