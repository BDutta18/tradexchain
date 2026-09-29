/**
 * Xenox Trade — Versioned Contract Registry Utilities
 * Reads deployment addresses from deployments/registry.json with network fallbacks.
 */

import registryData from '../../deployments/registry.json';

export interface DeploymentEntry {
  version: string;
  contractAddress: string;
  deployedAt: string;
  commitHash: string;
  circuits: string[];
}

export function getActiveContractAddress(network: 'preview' | 'preprod' | string = 'preprod'): string {
  const netKey = network === 'preprod' ? 'preprod' : 'preview';
  const entries: DeploymentEntry[] = (
    ((registryData as Record<string, unknown>).xenox || (registryData as Record<string, unknown>).axiom) as Record<string, DeploymentEntry[]>
  )?.[netKey] || [];
  if (entries.length > 0) {
    return entries[entries.length - 1].contractAddress;
  }

  // Fallback to active Preprod contract
  return (
    (typeof import.meta !== 'undefined' && (import.meta.env?.['VITE_PREPROD_CONTRACT_ADDRESS'] as string)) ||
    '0x2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc'
  );
}

export function getContractHistory(network: 'preview' | 'preprod' | string = 'preprod'): DeploymentEntry[] {
  const netKey = network === 'preprod' ? 'preprod' : 'preview';
  return (
    ((registryData as Record<string, unknown>).xenox || (registryData as Record<string, unknown>).axiom) as Record<string, DeploymentEntry[]>
  )?.[netKey] || [];
}
