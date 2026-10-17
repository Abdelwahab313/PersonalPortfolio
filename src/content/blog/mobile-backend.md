---
title: One backend, drivers on the road
kind: case-study
status: published
date: 2026-10-12
order: 0
lede: React Native apps fed by one Node.js backend. Live orders reach drivers on phones and the same state reaches the web, over Socket.IO.
tags: [react-native, node, realtime]
cover: /img/blog/mobile-apps.svg
coverAlt: Line drawing of a phone and a laptop both served by one backend.
---

## Situation

A delivery product served 100K daily users. Drivers were on the road and needed live orders on their phones, while the kitchen and customers watched the same state on web. Two audiences, one truth: whatever a driver saw had to match what everyone else saw.

## Decision

I built the real-time order service over Node.js and Socket.IO, pushing kitchen, driver and delivery status to mobile and web clients. The driver app was React Native, served by the same backend as web. I led a team of five building the driver location check-in system: planning, reviews and pairing across the driver app.

## Trade-off

React Native over two native apps meant one codebase and one hiring pool, at the cost of living inside the layer's constraints when a platform feature lands late. One backend for mobile and web meant they moved together, and a payload mistake hit both audiences at once. That pressure is why the service moved to TypeScript: mismatched event payloads fail at compile time, not in front of customers.

## Outcome

The driver app shipped with live orders, reading the same service as the web clients. The team of five delivered the check-in system. Status fan-out reached every client from one place.
