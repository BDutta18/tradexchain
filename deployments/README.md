# Xenox Trade — Midnight Deployment Registry

This directory contains versioned deployment records for Xenox Trade's Compact ZK circuits on Midnight testnets.

> [!IMPORTANT]
> **Active Preprod Deployment**: The sole active verifiable deployment is on Midnight Preprod Testnet at [`0x6f2821acd41d2da77e39ab995a00e2718d76040cb07da0f5fbf62229f0c67b43`](https://preprod.midnightexplorer.com/transactions/0x6f2821acd41d2da77e39ab995a00e2718d76040cb07da0f5fbf62229f0c67b43).

---

## Deployer / Active Contract

| Field | Value |
|:------|:------|
| **Product & Brand** | Xenox Trade |
| **Network** | Midnight Preprod Testnet |
| **Active Preprod Contract Address** | [`0x6f2821acd41d2da77e39ab995a00e2718d76040cb07da0f5fbf62229f0c67b43`](https://preprod.midnightexplorer.com/transactions/0x6f2821acd41d2da77e39ab995a00e2718d76040cb07da0f5fbf62229f0c67b43) |
| **Version** | `v1.3.0` (Supermoon Edition) |
| **Status** | 🟢 **ACTIVE PREPROD MVP** |

---

## Deployment Records

### Midnight Preprod Testnet

| Version | Contract Address | Explorer Link | Circuits | Status |
| :--- | :--- | :--- | :--- | :--- |
| `1.3.0` | `0x6f2821acd41d2da77e39ab995a00e2718d76040cb07da0f5fbf62229f0c67b43` | [View on Midnight Explorer ↗](https://preprod.midnightexplorer.com/transactions/0x6f2821acd41d2da77e39ab995a00e2718d76040cb07da0f5fbf62229f0c67b43) | `commitStrategy`, `executeTrade`, `executeBatchRebalance`, `tripCircuitBreaker`, `resetCircuitBreaker`, `revokeStrategy`, `mintVaultBalance`, `burnVaultBalance`, `unshieldWithdraw` | **Active (Verified)** |

---

## Deployment Commands

### Deploy to Preprod
```bash
npx @midnight-ntwrk/compact-cli deploy --network preprod --contract contracts/xenox.compact
```
