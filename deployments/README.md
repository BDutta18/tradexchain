# Xenox Trade — Midnight Deployment Registry

This directory contains versioned deployment records for Xenox Trade's Compact ZK circuits on Midnight testnets.

> [!IMPORTANT]
> **Active Preprod Deployment**: The sole active verifiable deployment is on Midnight Preprod Testnet at [`0x2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc`](https://explorer.1am.xyz/contract/2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc).

---

## Deployer / Active Contract

| Field | Value |
|:------|:------|
| **Product & Brand** | Xenox Trade |
| **Network** | Midnight Preprod Testnet |
| **Active Preprod Contract Address** | [`0x2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc`](https://explorer.1am.xyz/contract/2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc) |
| **Version** | `v1.3.0` (Supermoon Edition) |
| **Status** | 🟢 **ACTIVE PREPROD MVP** |

---

## Deployment Records

### Midnight Preprod Testnet

| Version | Contract Address | Explorer Link | Circuits | Status |
| :--- | :--- | :--- | :--- | :--- |
| `1.3.0` | `0x2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc` | [View on 1AM Explorer ↗](https://explorer.1am.xyz/contract/2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc) | `commitStrategy`, `executeTrade`, `executeBatchRebalance`, `tripCircuitBreaker`, `resetCircuitBreaker`, `revokeStrategy`, `mintVaultBalance`, `burnVaultBalance`, `unshieldWithdraw` | **Active (Verified)** |

---

## Deployment Commands

### Deploy to Preprod
```bash
npx @midnight-ntwrk/compact-cli deploy --network preprod --contract contracts/axiom.compact
```
