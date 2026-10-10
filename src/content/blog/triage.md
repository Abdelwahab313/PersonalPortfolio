---
title: The verdict lives in code, not the prompt
kind: note
status: published
date: 2026-10-05
order: 4
lede: Almost trusted a plausible explanation. So pass/fail had to live in tested code.
tags: [agents, llm, rails]
sections:
  - heading: An answer that felt right
    paragraphs:
      - "I was looking at production incidents and wanted to triage them before pulling a human in. An LLM could read the logs, summarize what happened, and sound convincing."
      - "That was the whole problem. A convincing summary is not a correct one, and the platform was about to treat 'convincing' as 'correct'."
  - heading: The false pass was the real risk
    paragraphs:
      - "The failure mode I cared about was not a bad summary. It was a confident pass. If the system said an incident was fine when it was not, we shipped a false green light and moved on."
      - "Mean Time To Resolve was the number I wanted to move, but not by making the wrong call faster."
  - heading: You cannot make 'be careful' deterministic
    paragraphs:
      - "My first attempt was prompt-only. I asked the agent to be cautious and explain its reasoning. The reasoning got better. The boundary between a real pass and a hopeful one stayed fuzzy."
      - "I could tune the words, but I could not point at the exact check that decided pass or fail, and I could not test it. That is a bad place to stand when the cost of being wrong is high."
  - heading: Move the verdict into tested code
    paragraphs:
      - "I kept the agent for what it is good at: reading, reasoning, and collecting evidence. I moved the pass/fail decision itself into code, into checks I could test and replay."
      - "The agent investigates inside guardrails. Its access was read-only, it ran behind a rollback wrapper, and every action was written to an audit log. Any write stayed behind a human gate."
  - heading: What changed
    paragraphs:
      - "Replaying old incidents through the checks caught three false passes that a prompt had let through. The platform now adjudicates support claims as well as incidents."
      - "It handles the first pass, so a human starts from a drafted answer and evidence instead of an empty screen. That is where the time savings come from, not from removing the human."
  - heading: Lesson
    paragraphs:
      - "If the cost of a wrong answer is high, make the go/no-go a unit-testable function, not a sentence. Let the model gather and explain. Let tested code decide."
---
