---
title: Pulling fulfillment out of the monolith
kind: case-study
status: published
date: 2026-10-14
order: 0
lede: Fulfillment came out of a PHP monolith one piece at a time, over SQS behind a REST contract, because a team of six could not freeze features.
tags: [architecture, sqs, redis]
cover: /img/blog/event-driven.svg
coverAlt: Line drawing of a monolith block next to small services connected by event arrows.
---

## Situation

A delivery product lived in a PHP monolith. Fulfillment was one more component inside it, so every order state change shared a deploy with everything else. The team working on it was six people, and they could not stop shipping features while the architecture changed underneath them.

## Decision

I decomposed the fulfillment component out of the monolith into a standalone service, in a distributed event-driven architecture. State changes pass over AWS SQS behind a REST API contract. Hot order state is served from Redis in a write-behind cache pattern, with MySQL behind it, so status fan-out stays off the transactional path.

## Trade-off

A full event-driven rewrite was cleaner on paper. It also meant months of running two partially consistent systems with features frozen, which a team of six could not absorb. Incremental extraction cost a living seam instead: the monolith and the service have to keep agreeing on the contract, on both sides, every week.

## Outcome

Fulfillment ran as a standalone service while the rest kept shipping. The real-time order service was migrated from JavaScript to TypeScript, so event and message payload mismatches fail at compile time, not at runtime in front of customers.
