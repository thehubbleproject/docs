---
id: GettingStarted
title: Getting Started
sidebar_label: Getting Started
---

## Introduction

Hubble allows people to create optimistic rollup chains with the same interface so that people can enter the rollup space once and then move between chains instantly and at negligible costs and remove the need to ever "exit" the ecosystem.

So many projects will need things like rollups to scale their applications, it's an absolute crime to ask of anyone to build there own coordinators, contracts and all other parts everytime someone wants a scalable solutions.

The goal of hubble is to allow people to create any rollup chain by just writing a solidity function!

### Links

- [Coordinator-Node](https://github.com/thehubbleproject/go-node)
- [Contracts](https://github.com/thehubbleproject/contracts)

## Glossary

- `Coordinator`: The entity running the rollup chain node. Responsibilities include validating transactions, aggregating them and then finally submitting a `batch` on-chain.
- `Batch`: The `committment` of off-chain state on the ethereum contract is called a `batch`, only coordinators selected by the contract are allowed to submit new state updates/commitments. Along with a commitment, coordinator have to stake a bunch of stashable ethers as well.
