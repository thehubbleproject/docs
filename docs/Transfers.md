---
id: Transfers
title: Transfers
sidebar_label: Transfers
---

## Submit a Batch

### Step-1: Collecting transactions from users

The coordinator collects signed transactions from users via REST API's and adds them to the mempool

```jsx
type (
	// TxReceiver represents the tx received from user
	TxReceiver struct {
		To        uint64 `json:"to"`
		From      uint64 `json:"from"`
		Amount    uint64 `json:"amount"`
		Nonce     uint64 `json:"nonce"`
		TokenID   uint64 `json:"token"`
		Signature string `json:"sig"`
	}
)
```

## Step-2: Validate transactions

Validate the transaction by `calling` the `stateless` `transactionEvaluation` function present on-chain.

```jsx
		/**
	   * @notice processTx processes a transactions and returns the
		 * updated balance and the updated leaves
     * @return Total number of batches submitted onchain
     */
    function processTx(
        bytes32 _balanceRoot,
        bytes32 _accountsRoot,
        Types.Transaction memory _tx,
        Types.PDAMerkleProof memory _pda_proof,
        Types.AccountMerkleProof memory _from_merkle_proof,
        Types.AccountMerkleProof memory _to_merkle_proof
    ) public returns (bytes32, uint256, uint256, bool) {
    }
```

All the application logic on how the transaction should be evaluated in present in the `processTx` function. The transactions are evaluated against the balance root provided.

`processTx` after running the transaction returns the the following tuple `(bytes32, uint256, uint256, bool)` which consists of `updatedBalanceRoot`, `fromAccountBalancePostTransaction`, `toAccountBalancePostTransaction` and if the transaction was `valid` or not.

## Step-3: Finally submit a new Batch!

Post running all transactions via the on-chain function we now have the latest `balanceTreeRoot` and all the transactions that were used to create this `root` which we will now use to update the contract with the new batch!

```jsx
	 /**
     * @notice Submits a new batch to batches
     * @param _txs Compressed transactions .
     * @param _updatedRoot New balance tree root after processing all the transactions
     */
    function submitBatch(bytes[] calldata _txs, bytes32 _updatedRoot)
        external
        payable
        onlyCoordinator
        isNotRollingBack
    {}
```

The transactions are encoded via `abi.encode` method for now, but will be switched to a better compressed encoding in the next version.

**The data stored per batch is as follows**

```jsx
struct Batch {
		// updated state root post transaction
        bytes32 stateRoot;

		// current account tree root (consists on all pubkeys)
        bytes32 accountRoot;

		// contains the address of the committer
        address committer;

		// merkle root for all transactions submitted(computed on-chain)
        bytes32 txRoot;

		// stores the stake committed with this batch
        uint256 stakeCommitted;

        /*
        Every batch sent by a coordinator has a finalisation period
        */
        uint256 finalisesOn;

        // timestamp for the commitment
        uint256 timestamp;
    }
```
