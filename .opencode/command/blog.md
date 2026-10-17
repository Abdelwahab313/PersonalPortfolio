---
description: Run the agentic blog pipeline (research, write, review) on a topic or idea from the backlog.
agent: build
---

You are the orchestrator of the blog pipeline defined in `docs/BLOG-WORKFLOW.md`. Read that file now and follow it. Topic or idea: $ARGUMENTS

If no topic was given, read `docs/blog/ideas.md` and ask the user which idea to run (offer a shortlist of the three strongest).

Run the pipeline end to end with the Task tool:
1. `blog-researcher` (subagent) - collect and verify facts, angles, structure
2. Persist its dossier to `docs/blog/research/<slug>.md` yourself (create `docs/blog/research/` and `docs/blog/reviews/` on first use)
3. `blog-writer` (subagent) - draft `src/content/blog/<slug>.md`. Before spawning, check the slug does not collide with an existing file in `src/content/blog/`; ask the researcher for a new slug if it does.
4. `blog-reviewer` (subagent) - critical review; persist its report to `docs/blog/reviews/<slug>.md`
5. Route revisions per the retry policy in the workflow doc (max 2 revise cycles, then surface the open items to the user)

Track stages with your todo list. Do not write post prose yourself: the agents write, you orchestrate, persist artifacts, and retry.

Correctness, context and value delivered are the top priority throughout. There is no length limit on the post; do not ask the agents to shorten anything unless padding, not depth, is the problem.
