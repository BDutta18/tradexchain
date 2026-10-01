/**
 * Xenox Trade — Centralized Content Source
 * Populated 1:1 exclusively from README.md (Supermoon Level 6 Submission).
 * No content from Modu-X402 remains, and no technical claims or numbers are invented.
 */

export const XENOX_CONTENT = {
  brand: {
    name: "Xenox Trade",
    tagline: "Confidential AI-Orchestrated Trading Protocol",
    logo: "/xenox-logo.png",
    icon: "/xenox-icon-mark.png",
    ecosystem: "Midnight Network",
    bountyMilestone: "Level 6 - Supermoon Submission",
    bountyDocUrl: "https://docs.google.com/document/d/17DWYHc7q_e_qFfe0JeszqIMpSAf2S0cMwbPVOpPs4BU/edit?usp=sharing",
  },

  urls: {
    liveDemo: "https://tradexchain.vercel.app/",
    githubRepo: "https://github.com/BDutta18/tradexchain",
    githubCommits: "https://github.com/BDutta18/tradexchain/commits/main",
    ciWorkflow: "https://github.com/BDutta18/tradexchain/actions/workflows/ci.yml",
    xProfile: "https://x.com/Xenoxtradex",
    xProfileHandle: "@Xenoxtradex",
    demoVideo: "https://drive.google.com/file/d/1zXDqzQajnqM6Sen3vBdNR5ON6FhffvZ4/view?usp=sharing",
    feedbackForm: "https://docs.google.com/forms/d/e/1FAIpQLSd49Nh4u3E2aRTkvyFOwtEFJ16D7d6QRRa_5E3Dp35Jbc6FzA/viewform",
    feedbackSheet: "https://docs.google.com/spreadsheets/d/1qujhTE17XXua0rHCzS-PKuzAO7tRrAL6R3AaZmV28PU/edit?usp=sharing",
    xPosts: [
      { id: "1", label: "Post 1", url: "https://x.com/Xenoxtradex/status/2104932713061130243" },
      { id: "2", label: "Post 2", url: "https://x.com/Xenoxtradex/status/2104934932707705219" },
      { id: "3", label: "Post 3", url: "https://x.com/Xenoxtradex/status/2104936036568883641" },
    ],
    preprodExplorer: "https://preprod.midnightexplorer.com/transactions/0x6f2821acd41d2da77e39ab995a00e2718d76040cb07da0f5fbf62229f0c67b43",
    oneAmWallet: "https://1am.xyz",
    faucetUrl: "https://faucet.preprod.midnight.network",
  },

  hero: {
    eyebrow: "Midnight Preprod Zero-Knowledge Trading Protocol",
    headlinePrefix: "The confidential layer to",
    rotatingWords: ["automate", "synthesize", "execute", "shield"],
    blockquote:
      "An institutional-grade, privacy-preserving automated trading protocol on the Midnight blockchain where traders state risk boundaries in natural language and prove trade execution in Zero-Knowledge — with zero strategy rules, portfolio balances, or order sizes exposed to mempools.",
    badges: [
      { label: "CI/CD Pipeline", status: "Passing", color: "emerald", href: "https://github.com/BDutta18/tradexchain/actions/workflows/ci.yml" },
      { label: "Vitest Tests", status: "42/42 Passing", color: "emerald", href: "https://github.com/BDutta18/tradexchain" },
      { label: "Compact Contract", status: "v1.3.0 (Supermoon)", color: "purple", href: "https://github.com/BDutta18/tradexchain/tree/main/contracts" },
      { label: "Live Demo", status: "tradexchain.vercel.app", color: "blue", href: "https://tradexchain.vercel.app/" },
      { label: "Blockchain", status: "Midnight Preprod", color: "purple", href: "https://midnight.network" },
      { label: "X Profile", status: "@Xenoxtradex", color: "black", href: "https://x.com/Xenoxtradex" },
    ],
    marqueeStats: [
      { value: "v1.3.0", label: "Compact ZKIR Contract" },
      { value: "42/42", label: "Vitest Suites Passing" },
      { value: "77 Users", label: "Active Preprod Addresses" },
      { value: "100%", label: "Private Strategy Witnesses" },
      { value: "$0.00", label: "MEV Extracted / Front-Running" },
      { value: "Gemini 2.5", label: "AI Pre-Commitment Engine" },
      { value: "1AM v4", label: "DApp Connector Integrated" },
      { value: "Zero-DUST", label: "ProofStation Fee Sponsored" },
    ],
  },

  contract: {
    network: "Midnight Preprod Testnet",
    version: "v1.3.0 (Supermoon Edition)",
    address: "0x6f2821acd41d2da77e39ab995a00e2718d76040cb07da0f5fbf62229f0c67b43",
    status: "🟢 ACTIVE PREPROD MVP (v1.3.0 Supermoon)",
    source: "./contracts/xenox.compact (v1.3.0 Supermoon Edition)",
    bindings: "./managed/xenox.ts",
    circuits: [
      "commitStrategy",
      "tripCircuitBreaker",
      "resetCircuitBreaker",
      "executeTrade",
      "executeBatchRebalance",
      "revokeStrategy",
      "mintVaultBalance",
      "burnVaultBalance",
      "unshieldWithdraw",
    ],
    ledgerState: [
      "agentCommitment",
      "strategyActive",
      "circuitBreakerTripped",
      "tradeStatus",
      "tradeCount",
      "mevShieldProtectedVolumeUsd",
    ],
    gasProving: "1AM ProofStation Fee-Sponsored (Zero-DUST Ready)",
    operationalStatus: "DEPLOYED & LIVE (Verifiable On-Chain State Machine)",
  },

  whatItDoes: {
    summary:
      "Xenox Trade solves the fundamental vulnerabilities of automated on-chain trading: strategy leakage, MEV front-running, copy-trading bots, and portfolio surveillance.",
    steps: [
      {
        number: "I",
        title: "State Trading Intent in Natural Language",
        description:
          'Traders state natural-language risk parameters: "Only buy ADA, max 20% position size, 8% stop-loss, run for 30 days." Zero manual Solidity/Compact code required.',
        formula: null,
        codeSnippet: `// 1. Natural Language Intent Input\nconst prompt = "Only buy ADA, max 20% position size, 8% stop-loss, run for 30 days";\n\n// 2. Client-side NLP parsing via Gemini 2.5 Flash\nconst intent = await parseStrategyIntent(prompt);`,
      },
      {
        number: "II",
        title: "AI Pre-Commitment Risk Synthesis",
        description:
          "Gemini 2.5 Flash compiles the prompt into structured risk rules and computes a 32-byte cryptographic commitment hash matching persistentHash([maxPos, stopLoss, expiry]).",
        formula: "\\text{commitment} = \\mathcal{H}(\\text{maxPositionPct}, \\text{stopLossPct}, \\text{timelineExpiry})",
        codeSnippet: `// Cryptographic Commitment Hash Formulation\nconst commitment = hash(\n  intent.maxPositionPct, // e.g. 20\n  intent.stopLossPct,    // e.g. 8\n  intent.timelineExpiry  // e.g. 1774880000\n);\n// -> 0x8a92f0c7... (32-byte public anchor)`,
      },
      {
        number: "III",
        title: "Lock Strategy via 1AM Wallet Popup",
        description:
          "The trader commits this 32-byte hash to Midnight via 1AM wallet popup. The underlying parameters, alpha, and duration stay strictly confidential in client memory.",
        formula: null,
        codeSnippet: `// 1AM Extension Popup Signing\nconst txHash = await midnightContract.commitStrategy(\n  commitment,\n  { feeSponsorship: 'ProofStation' }\n);\n// State: strategyActive = true, tradeCount = 0`,
      },
      {
        number: "IV",
        title: "Shielded Trading Vault (vUSD)",
        description:
          "Traders deposit collateral into private vUSD notes. Deposits, position changes, and withdrawals occur without linking public wallet addresses to trade logs.",
        formula: null,
        codeSnippet: `// Private vUSD Shielded Note Management\nawait vault.mintVaultBalance(amountUsd, privateSecretKey);\n// Zero balance leakage: observer sees state root change only`,
      },
      {
        number: "V",
        title: "Asset-Agnostic Zero-Knowledge Execution",
        description:
          "Xenox Trade executes trades across multiple assets (ADA, BTC, ETH, SOL, tNIGHT). Every trade proves mathematical compliance locally before submission.",
        formula: "\\text{tradeSize} \\times 100 \\le \\text{portfolioValue} \\times \\text{maxPositionPct} \\quad \\wedge \\quad \\text{currentTime} \\le \\text{timelineExpiry}",
        codeSnippet: `// Zero-Knowledge Circuit Boundary Check\ncircuit.executeTrade({\n  witnesses: [tradeSizeUsd, portfolioValueUsd, maxPos, stopLoss, expiry, secretKey],\n  enforce: "tradeSize * 100 <= portfolioVal * maxPos && !circuitBreakerTripped"\n});\n// -> Result: Executed on-chain, 0 witness revealed`,
      },
    ],
  },

  privacyModel: {
    canLearn: [
      { item: "Agent Commitment", type: "Bytes<32> hash", reveals: "That an agent locked a risk strategy (not the parameters)" },
      { item: "Strategy Active", type: "Boolean flag", reveals: "Whether the agent's strategy is actively executable or revoked" },
      { item: "Circuit Breaker Status", type: "Boolean flag", reveals: "Whether emergency halt was triggered by drawdown violation" },
      { item: "Trade Status", type: "Enum (1-4)", reveals: "Verification outcome of the Zero-Knowledge proof (Executed/Rejected/Withdrawn/Rebalanced)" },
      { item: "Trade Count", type: "Counter integer", reveals: "Total number of valid trades executed under this strategy" },
      { item: "MEV Shield Volume", type: "Counter USD", reveals: "Cumulative trading volume shielded from front-running/sandwiching" },
      { item: "Commitment Hash", type: "Bytes<32> hash", reveals: "Public cryptographic anchor for zero-knowledge witness proofs" },
      { item: "Block Timestamp", type: "Unix timestamp", reveals: "Consensus block time when the zero-knowledge transition was anchored" },
      { item: "Proof Verification Flag", type: "Boolean flag", reveals: "Consensus verification result of the Midnight ZKIR constraint system" },
    ],
    cannotLearn: [
      { item: "Strategy Risk Parameters", protection: "Private witness — never leaves browser", why: "Competitors and bots cannot front-run stop-loss triggers" },
      { item: "Max Position Percentage", protection: "Private witness inside ZK circuit", why: "Prevents liquidation hunting and predatory order stacking" },
      { item: "Shielded Vault Balance", protection: "Decrypted client-side over state notes", why: "Total trading capital remains 100% confidential" },
      { item: "Per-Trade Dollar Amount", protection: "Computed inside ZK circuit only", why: "Prevents whale tracking and slippage manipulation" },
      { item: "Strategy Duration & Expiry", protection: "Private witness inside ZK circuit", why: "Keeps time-horizon and algorithmic rebalancing private" },
      { item: "Slippage Tolerance (BPS)", protection: "Private witness verified in ZK", why: "Prevents MEV searchers from extracting sandwich value" },
      { item: "Wallet Secret Key", protection: "Local witness only via localSecretKey()", why: "Stays strictly in the browser extension" },
      { item: "Target Asset Allocation", protection: "Private witness evaluated in ZKIR", why: "Hides portfolio asset distribution and algorithmic rebalancing weights" },
      { item: "Stop-Loss & Take-Profit Triggers", protection: "Private witness inside ZK circuit", why: "Prevents predatory bots from detecting trigger levels and hunting stops" },
    ],
    userProves: [
      { circuit: "commitStrategy", statement: "commitment == hash(maxPos, stopLoss, expiry)", witnesses: "maxPositionPct, stopLossPct, timelineExpiry" },
      { circuit: "tripCircuitBreaker", statement: "Caller owns localSecretKey() for agent", witnesses: "localSecretKey" },
      { circuit: "resetCircuitBreaker", statement: "Caller owns localSecretKey() && strategyActive == true", witnesses: "localSecretKey" },
      { circuit: "revokeStrategy", statement: "Caller owns localSecretKey(); sets strategyActive = false", witnesses: "localSecretKey" },
      { circuit: "executeTrade", statement: "tradeSize * 100 <= portfolioVal * maxPos && currentTime <= timelineExpiry && execSlippage <= maxSlippageBps && !circuitBreakerTripped", witnesses: "tradeSizeUsd, portfolioValueUsd, maxPos, stopLoss, expiry, secretKey, maxSlippageBps, executionSlippageBps" },
      { circuit: "executeBatchRebalance", statement: "totalBatchSize * 100 <= portfolioVal * maxPos && currentTime <= timelineExpiry && !circuitBreakerTripped", witnesses: "totalRebalanceUsd, portfolioValueUsd, maxPos, stopLoss, expiry" },
      { circuit: "mintVaultBalance", statement: "newVaultBalance == oldVaultBalance + amount", witnesses: "Shielded vUSD note secret" },
      { circuit: "burnVaultBalance", statement: "vaultBalance >= amount && amount > 0", witnesses: "Shielded vUSD note secret" },
      { circuit: "unshieldWithdraw", statement: "Caller owns note of value amount", witnesses: "Private note witness & secret key" },
    ],
  },

  privacyClaim: {
    statement:
      "An on-chain observer or block explorer watching Midnight Preprod can see only that an agent 0x... registered a 32-byte commitment hash and transitioned trade 0x... to Executed. An observer cannot determine whether the stop-loss is 5% or 20%, whether the trade was for $100 or $100,000, what asset was traded, or the total balance in the shielded vault. All database records in Supabase store only public transaction hashes and IST timestamps — zero private witnesses touch the network.",
    advantages: [
      { metric: "$0.00", label: "MEV Extracted", note: "Mempool sandwich immunity" },
      { metric: "100%", label: "Private Alpha", note: "Zero strategy threshold disclosure" },
      { metric: "0 Leaks", label: "Telemetry Sanitized", note: "Strict schema whitelisting on-chain" },
    ],
  },

  architecture: {
    stages: [
      {
        stage: "Stage 01",
        title: "Client Browser Environment",
        subtitle: "Local Strategy Compilation",
        description: "Traders state plain-English intent. Gemini 2.5 Flash compiles rules into structured parameters and computes local commitment hash H in memory.",
        features: ["Gemini 2.5 Flash NLP parser", "Deterministic SHA-256 hash", "Local parameter state (never transmitted)"],
      },
      {
        stage: "Stage 02",
        title: "1AM Wallet & ProofStation",
        subtitle: "Zero-Knowledge Proof Generation",
        description: "Generates client-side zero-knowledge proofs via Compact v0.24 ZKIR and provides fee-sponsored transaction signing without requiring upfront DUST.",
        features: ["Compact v0.24 ZKIR engine", "ProofStation dust-sponsored gas", "DApp Connector v4 authorization"],
      },
      {
        stage: "Stage 03",
        title: "Midnight Blockchain (Preprod)",
        subtitle: "Verifiable Confidential Ledger",
        description: "Verifies the ZK proof and updates public state maps (agentCommitment, tradeStatus, tradeCount) while keeping strategy rules, portfolio balances, and trade sizes 100% confidential.",
        features: ["Decentralized ZK state machine", "On-chain circuit breakers", "MEV shield volume tracking"],
      },
    ],
  },

  techStack: [
    { layer: "Blockchain", tech: "Midnight Network", desc: "Preprod Zero-Knowledge Testnet" },
    { layer: "Smart Contract", tech: "Compact v0.24 (ZKIR) v1.3.0", desc: "Midnight's native ZK language with circuit breakers & MEV shield" },
    { layer: "SDK & Connector", tech: "@midnight-ntwrk/dapp-connector-api", desc: "Midnight DApp Connector v4 for 1AM & Lace" },
    { layer: "AI Decision Engine", tech: "Gemini 2.5 Flash + LangChain", desc: "Natural language strategy compilation & multi-regime risk analysis" },
    { layer: "ZK-ML Model", tech: "EZKL (Halo2)", desc: "Verifiable client-side risk boundary validator" },
    { layer: "Frontend UI", tech: "React 19, TypeScript, Vite", desc: "Modern responsive Web3 trading terminal" },
    { layer: "Styling", tech: "Tailwind CSS & Lucide Icons", desc: "Accessible, high-contrast dark/light UI" },
    { layer: "Off-Chain Ledger", tech: "Supabase PostgreSQL", desc: "Real-time IST Protocol Telemetry & transaction sync" },
    { layer: "Testing", tech: "Vitest (42 Tests)", desc: "42 Unit, Privacy, Analytics, AI Agent, Bot Simulator, and Contract Tests" },
    { layer: "CI/CD", tech: "GitHub Actions", desc: "5-Job Verification Matrix (Lint, Compact ZKIR, Multi-Node, Build, Privacy Audit)" },
  ],

  resources: [
    { title: "Live Application (Vercel)", link: "https://tradexchain.vercel.app/", desc: "Production MVP deployed on Vercel (HTTP 200)", cta: "Launch DApp" },
    { title: "Demo Video (Walkthrough)", link: "https://drive.google.com/file/d/1zXDqzQajnqM6Sen3vBdNR5ON6FhffvZ4/view?usp=sharing", desc: "Full end-to-end MVP demonstration video on Google Drive", cta: "Watch Video" },
    { title: "User Feedback Form", link: "https://docs.google.com/forms/d/e/1FAIpQLSd49Nh4u3E2aRTkvyFOwtEFJ16D7d6QRRa_5E3Dp35Jbc6FzA/viewform", desc: "Public community feedback submission form", cta: "Submit Feedback" },
    { title: "Feedback Responses Sheet", link: "https://docs.google.com/spreadsheets/d/1qujhTE17XXua0rHCzS-PKuzAO7tRrAL6R3AaZmV28PU/edit?usp=sharing", desc: "Real-time aggregate feedback response spreadsheet", cta: "View Sheet" },
    { title: "Building in Public: X Post 1", link: "https://x.com/Xenoxtradex/status/2104932713061130243", desc: "Public development update 1 on X", cta: "View Post" },
    { title: "Building in Public: X Post 2", link: "https://x.com/Xenoxtradex/status/2104934932707705219", desc: "Public development update 2 on X", cta: "View Post" },
    { title: "Building in Public: X Post 3", link: "https://x.com/Xenoxtradex/status/2104936036568883641", desc: "Public development update 3 on X", cta: "View Post" },
    { title: "Product X Profile", link: "https://x.com/Xenoxtradex", desc: "@Xenoxtradex — Official protocol announcements and updates", cta: "Follow @Xenoxtradex" },
    { title: "GitHub Repository", link: "https://github.com/BDutta18/tradexchain", desc: "Source code, contracts, tests, and documentation", cta: "View Repo" },
    { title: "Verified Commit History", link: "https://github.com/BDutta18/tradexchain/commits/main", desc: "33+ Commits verifiable on main branch", cta: "Check Commits" },
    { title: "CI/CD Pipeline v2.0", link: "https://github.com/BDutta18/tradexchain/actions/workflows/ci.yml", desc: "5-job automated GitHub Actions matrix", cta: "Inspect CI Run" },
  ],

  walletSetup: {
    steps: [
      { step: "01", title: "Install 1AM Midnight Wallet Extension", desc: "Download from https://1am.xyz (or Lace Midnight) and unlock extension.", url: "https://1am.xyz" },
      { step: "02", title: "Select Midnight Preprod Network", desc: "Open 1AM and switch to Midnight Preprod network for active contract access." },
      { step: "03", title: "Fund Wallet from Preprod Faucet", desc: "Obtain testnet tokens from the official faucet: https://faucet.preprod.midnight.network", url: "https://faucet.preprod.midnight.network" },
    ],
    codeSnippets: [
      {
        label: "Clone & Install",
        code: `# 1. Clone repository\ngit clone https://github.com/BDutta18/tradexchain.git\ncd tradexchain\n\n# 2. Install dependencies\nnpm install`,
      },
      {
        label: "Configure & Test",
        code: `# 3. Configure environment variables\ncp .env.example .env\n\n# 4. Run the full test suite (42/42 passing)\nnpm test`,
      },
      {
        label: "Start Dev Server",
        code: `# 5. Start local development server\nnpm run dev\n\n# Open http://localhost:5173 in browser`,
      },
    ],
  },

  testCoverage: {
    total: 42,
    passing: 42,
    runtime: "1.28s",
    suitesCount: 7,
    vitestOutput: `> xenox-trade@1.0.0 test\n> vitest run\n\n ✓ tests/riskModel.test.ts (3 tests) 5ms\n ✓ tests/axiom.test.ts (14 tests) 8ms\n ✓ tests/riskFlowVerification.test.ts (2 tests) 5ms\n ✓ tests/analytics.test.ts (8 tests) 6ms\n ✓ tests/agent.test.ts (5 tests) 10ms\n ✓ tests/level6Agent.test.ts (5 tests) 7ms\n ✓ tests/zkBotEngine.test.ts (5 tests) 8ms\n\n Test Files  7 passed (7)\n      Tests  42 passed (42)\n   Duration  1.28s`,
    testsList: [
      { id: 1, suite: "axiom.test.ts", name: "Initial state empty", verifies: "Validates ledger maps are clean before strategy commitment" },
      { id: 2, suite: "axiom.test.ts", name: "Commit strategy stores hash", verifies: "Verifies 32-byte commitment hash is recorded on ledger" },
      { id: 3, suite: "axiom.test.ts", name: "Execute trade valid bounds", verifies: "Validates trade within max position % and expiry passes ZK check" },
      { id: 4, suite: "axiom.test.ts", name: "Execute trade exceeds position size", verifies: "Rejects trade exceeding strategy max position limit" },
      { id: 5, suite: "axiom.test.ts", name: "Execute trade after expiry", verifies: "Rejects trade submitted after strategy timeline duration" },
      { id: 6, suite: "axiom.test.ts", name: "Uncommitted agent trade", verifies: "Prevents uncommitted callers from executing trades" },
      { id: 7, suite: "axiom.test.ts", name: "Mint shielded vault balance", verifies: "Validates client-side private vUSD note creation" },
      { id: 8, suite: "axiom.test.ts", name: "Burn shielded vault balance", verifies: "Validates client-side private vUSD note burning" },
      { id: 9, suite: "axiom.test.ts", name: "Unshield and withdraw", verifies: "Proves private note ownership and burns note for withdrawal" },
      { id: 10, suite: "riskModel.test.ts", name: "Normal volatility (Risk Score < 35)", verifies: "Computes EZKL halo2 risk score for balanced markets" },
      { id: 11, suite: "riskModel.test.ts", name: "Extreme volatility (Risk Score > 75)", verifies: "Triggers risk circuit on high drawdown / rapid volume spikes" },
      { id: 12, suite: "riskModel.test.ts", name: "ZK-ML halo2 proof generation", verifies: "Validates client-side proof generation without witness leakage" },
      { id: 13, suite: "riskFlowVerification.test.ts", name: "Multi-asset execution (ADA, ETH, BTC)", verifies: "Verifies asset-agnostic risk bounds across different asset pairs" },
      { id: 14, suite: "riskFlowVerification.test.ts", name: "Stop-loss breach protection", verifies: "Enforces automatic trade abort when market drawdown breaches stop-loss" },
      { id: 15, suite: "analytics.test.ts", name: "Privacy strip validation", verifies: "Strips private strategy parameters (maxPositionPct, stopLossPct, portfolioValue)" },
      { id: 16, suite: "analytics.test.ts", name: "Whitelisted operation types", verifies: "Validates all 6 allowed non-sensitive on-chain operation types" },
      { id: 17, suite: "analytics.test.ts", name: "Reject unknown operation types", verifies: "Blocks unauthorized or unknown event types from persistence" },
      { id: 18, suite: "analytics.test.ts", name: "Reject missing required fields", verifies: "Rejects event payloads lacking wallet address or operation" },
      { id: 19, suite: "analytics.test.ts", name: "Strict schema whitelisting", verifies: "Guarantees only the 7 non-private metadata fields survive" },
      { id: 20, suite: "analytics.test.ts", name: "Optional hash & duration handling", verifies: "Handles events without optional latency and tx hash fields" },
      { id: 21, suite: "analytics.test.ts", name: "Transaction hash pass-through", verifies: "Retains valid 64-hex transaction hashes for telemetry verification" },
      { id: 22, suite: "agent.test.ts", name: "Parse natural language prompt", verifies: "Gemini extracts structured bounds matching Zod JSON schema" },
      { id: 23, suite: "agent.test.ts", name: "Monitor price node feed", verifies: "Simulates price tick checks against strategy conditions" },
      { id: 24, suite: "agent.test.ts", name: "Decide trade node logic", verifies: "Evaluates execution vs monitor triggers" },
      { id: 25, suite: "agent.test.ts", name: "Run strategy risk assessment", verifies: "Produces plain-language risk level & assessment summary" },
      { id: 26, suite: "agent.test.ts", name: "Run manual analysis", verifies: "Evaluates custom assets and enforces max position bounds" },
      { id: 27, suite: "level6Agent.test.ts", name: "Comprehensive risk analysis schema", verifies: "Validates multi-regime risk score, trailing stop, and ZK compliance flags" },
      { id: 28, suite: "level6Agent.test.ts", name: "Capital preservation regime", verifies: "Verifies defensive regime triggers for high drawdown markets" },
      { id: 29, suite: "level6Agent.test.ts", name: "Speculative expansion regime", verifies: "Verifies high-volatility positive-drift bullish regime classification" },
      { id: 30, suite: "level6Agent.test.ts", name: "Model fallback resolution", verifies: "Gracefully falls back across Gemini 2.5 Flash -> 2.0 -> 1.5 without crashing" },
      { id: 31, suite: "level6Agent.test.ts", name: "Offline fallback resilience", verifies: "Returns resilient deterministic risk schema when no API keys are configured" },
      { id: 32, suite: "zkBotEngine.test.ts", name: "Flash crash stop-loss circuit", verifies: "Halts execution when portfolio drawdown breaches committed stop-loss %" },
      { id: 33, suite: "zkBotEngine.test.ts", name: "Bull surge position ceiling", verifies: "Enforces max position size ceiling on trades during momentum expansions" },
      { id: 34, suite: "zkBotEngine.test.ts", name: "MEV sandwich attack immunity", verifies: "Proves $0.00 MEV extracted and 100% privacy preservation against mempool front-runners" },
      { id: 35, suite: "zkBotEngine.test.ts", name: "Choppy consolidation ZK proofs", verifies: "Generates valid 32-byte Halo2 ZK proof hashes without errors or witness leakage" },
      { id: 36, suite: "zkBotEngine.test.ts", name: "Institutional ZK audit certificate", verifies: "Produces cryptographically signed certificate matching Midnight Compact contract" },
      { id: 37, suite: "axiom.test.ts", name: "Emergency circuit breaker trip & reset", verifies: "Halts execution on catastrophic drawdown and resets after risk recalibration" },
      { id: 38, suite: "axiom.test.ts", name: "Permanent strategy revocation", verifies: "Permanently deactivates strategy commitment on-chain to allow key rotation" },
      { id: 39, suite: "axiom.test.ts", name: "Private execution slippage bounds", verifies: "Enforces execution slippage <= max private tolerance in zero-knowledge" },
      { id: 40, suite: "axiom.test.ts", name: "Autonomous batch rebalance", verifies: "Proves multi-position rebalance compliance in a single zero-knowledge proof" },
      { id: 41, suite: "axiom.test.ts", name: "MEV shielded volume counter", verifies: "Verifies cumulative volume tracking protected from mempool sandwiching" },
      { id: 42, suite: "analytics.test.ts", name: "stripPrivateFields zero leakage", verifies: "Enforces client-side telemetry sanitizer strips private witnesses before broadcast" },
    ],
  },

  cicd: {
    jobs: [
      { id: "1", name: "typecheck-and-lint", env: "Ubuntu / Node 22", verifies: "TypeScript strict typechecking (tsc -b --noEmit) and code quality" },
      { id: "2", name: "compact-contract-verification", env: "Ubuntu / Node 22", verifies: "Compact v1.3.0 AST parsing, state maps, circuits, and ZKIR artifact verification" },
      { id: "3", name: "test-matrix", env: "Ubuntu / Node 20 & 22", verifies: "Multi-Node matrix testing across all 42 Vitest tests and privacy suites" },
      { id: "4", name: "production-build", env: "Ubuntu / Node 22", verifies: "Production Vite bundle optimization and asset integrity verification" },
      { id: "5", name: "privacy-audit", env: "Ubuntu / Node 22", verifies: "Client-side privacy leak audit ensuring 0 private witnesses/keys touch network or logs" },
    ],
  },

  checklist: [
    { num: 1, req: "Public GitHub repository with updated documentation", status: "Complete", linkText: "github.com/BDutta18/tradexchain", url: "https://github.com/BDutta18/tradexchain" },
    { num: 2, req: "Live demo link", status: "Complete", linkText: "tradexchain.vercel.app", url: "https://tradexchain.vercel.app/" },
    { num: 3, req: "List of 70 Preprod user wallet addresses (verifiable on-chain)", status: "Complete", linkText: "LAUNCH_USERS.md (77 Active Addresses)", url: "https://github.com/BDutta18/tradexchain/blob/main/LAUNCH_USERS.md" },
    { num: 4, req: "Feedback documentation or link to feedback document", status: "Complete", linkText: "FEEDBACK.md & Google Form/Sheet", url: "https://github.com/BDutta18/tradexchain/blob/main/FEEDBACK.md" },
    { num: 5, req: "Demo video showing full MVP functionality", status: "Complete", linkText: "Watch on Google Drive ↗", url: "https://drive.google.com/file/d/1zXDqzQajnqM6Sen3vBdNR5ON6FhffvZ4/view?usp=sharing" },
    { num: 6, req: "Minimum 30 meaningful commits", status: "Complete", linkText: "33+ Commits on main ↗", url: "https://github.com/BDutta18/tradexchain/commits/main" },
  ],

  userValidation: {
    target: "70+ verified Preprod wallet addresses",
    status: "🟢 77 / 70 TARGET MET (77 Active Addresses)",
    network: "Midnight Preprod Testnet",
    cohorts: [
      { name: "Cohort 1 (Level 5 Alpha)", range: "#1 – #50", count: 50, phase: "Closed Developer & Alpha Tester Group", status: "Active" },
      { name: "Cohort 2 (Level 6 Launch)", range: "#51 – #77", count: 27, phase: "Public Launch, Google Forms, X Outreach & Midnight Devs", status: "Active" },
    ],
  },

  footer: {
    copyright: "MIT © 2026 Xenox Trade Protocol Contributors. Developed for the Midnight Blockchain Ecosystem.",
    columns: {
      Protocol: [
        { name: "Live DApp Terminal", href: "https://tradexchain.vercel.app/", external: true },
        { name: "Preprod Explorer", href: "https://preprod.midnightexplorer.com/transactions/0x6f2821acd41d2da77e39ab995a00e2718d76040cb07da0f5fbf62229f0c67b43", external: true },
        { name: "Walkthrough Demo", href: "https://drive.google.com/file/d/1zXDqzQajnqM6Sen3vBdNR5ON6FhffvZ4/view?usp=sharing", external: true },
        { name: "GitHub Repository", href: "https://github.com/BDutta18/tradexchain", external: true },
      ],
      Ecosystem: [
        { name: "Midnight Network", href: "https://midnight.network", external: true },
        { name: "1AM Wallet Extension", href: "https://1am.xyz", external: true },
        { name: "Preprod Faucet", href: "https://faucet.preprod.midnight.network", external: true },
        { name: "Compact Language", href: "https://docs.midnight.network", external: true },
      ],
      Community: [
        { name: "X (@Xenoxtradex)", href: "https://x.com/Xenoxtradex", external: true },
        { name: "Feedback Survey", href: "https://docs.google.com/forms/d/e/1FAIpQLSd49Nh4u3E2aRTkvyFOwtEFJ16D7d6QRRa_5E3Dp35Jbc6FzA/viewform", external: true },
        { name: "Live Feedback Responses", href: "https://docs.google.com/spreadsheets/d/1qujhTE17XXua0rHCzS-PKuzAO7tRrAL6R3AaZmV28PU/edit?usp=sharing", external: true },
        { name: "Level 6 Launch Users", href: "https://github.com/BDutta18/tradexchain/blob/main/LAUNCH_USERS.md", external: true },
      ],
    },
  },
};
