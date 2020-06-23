---
id: Withdraws
title: Withdraws
sidebar_label: Withdraws
---

## Withdraws

All assets can be withdrawn from the rollup to ethereum at any point in time by simply transferring assets to the withdraw account. Since this is an optimistic rollup chain withdraws take time to finalise and users need to wait for `finalisationPeriod` before users can get access to their withdrawn assets

This is how normal withdraws work:

1. Users send tokens to `account_id` 0, pretty similiar to how `burning` ether works on ethereum
2. Coordinator aggregates all the transactions into a batch and submits it on-chain.
3. Batch gets submitted on-chain, users wait for the batch to get finalised
4. Post batch finalisation users submit a merkle proof showing that the batch had their withdraw transaction
5. Users get access to assets :)

## Mass migrations

Mass migrations allow thousands of user to move to other hubble chains instantly and at a really small cost. If there are 2 hubble chains, one for token transfers and one for token exchange. Users can instantly move to the exchange rollup chain whenever they want to trade. We imagine a bunch of different app-specific chains all inheriting the security properties of etheruem and the scalability properties of rollups, with the ability to hop between chains instantly.

This is how mass migrations works briefly:
TBD
