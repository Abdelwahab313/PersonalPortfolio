---
title: From empty repo to beta launch
kind: case-study
status: published
date: 2026-10-13
order: 0
lede: 'A marketplace from nothing to beta: React and Rails, calendar integrations, and CI pipelines from the first week, not as a cleanup later.'
tags: [rails, react, ci]
cover: /img/blog/zero-to-launch.svg
coverAlt: Line drawing of an ascending line from a first commit to a launched product.
---

## Situation

A knowledge marketplace connects business advisors with companies that need their expertise. When I joined, there was no product: no MVP, no deploy pipeline, no cloud infrastructure. The first version had to reach a beta launch with a small team and no safety net.

## Decision

I built it full-stack in React and Ruby on Rails, leading features from requirements to deployment. The core flow was advisor booking, so mentor calendar booking came with Zoom, ClickUp and calendar integrations. I wrote BDD tests and managed the CI/CD pipelines from the start, and later moved the web apps to a SaaS model.

## Trade-off

BDD and pipelines cost time before the first visible feature. The alternative was to move fast and backfill the safety net, but in a marketplace the booking flow is the product: a broken calendar integration is a broken site. Paying for the net first meant launches stayed routine instead of tense.

## Outcome

The marketplace went from the first MVP to a beta launch, with the cloud infrastructure and deploy pipelines behind it. The web apps moved to a SaaS model on top of the same foundation.
