export type Direction = 'LONG' | 'SHORT'
export type Impact = 'LOW' | 'MEDIUM' | 'MEDIUM-HIGH' | 'HIGH' | 'VERY HIGH'
export type SourceTier = 'S' | 'A+' | 'A' | 'B'
export type SourceType = 'OFFICIAL SOURCE' | 'TRADER SOURCE' | 'MARKET DATA'
export type TrustGateStatus = 'PASS' | 'PARTIAL' | 'FAIL'

export interface Source {
  id: string
  name: string
  tier: SourceTier
  type: SourceType
  reliability: number // 0-100
  url: string
  date: string
  age: string
  verified: boolean
  crossChecked: string
  role: string
}

export interface Evidence {
  id: string
  point: string
  sourceId: string
  sourceName: string
  tier: SourceTier
  reliability: number
  badge: SourceType
  verified: string
  age: string
  transformation: string
  // traçabilité
  who: string
  when: string
  where: string
  isPrimary: boolean
  isConfirmed: boolean
}

export interface Scenario {
  prob: number
  label: string
  desc: string
  expectedMove?: string
}

export interface ChainStep {
  id: string
  title: string
  desc: string
  icon: string
  sourceBadge?: SourceType
}

export interface Catalyst {
  event: string
  date: string
  time: string
  importance: 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY HIGH'
  countdown: string
}

export interface Consensus {
  previous: string
  consensus: string
  pricing: string
  model: string
  surprise: string
}

export interface Opportunity {
  id: string
  market: string
  ticker: string
  direction: Direction
  arrow: string
  probability: number
  reliability: number
  confidence: number
  impact: Impact
  impactScore: number
  timeHorizon: string
  catalyst: Catalyst
  summary: string
  thesisOneLiner: string
  why: string[]
  whyDetailed: { title: string; desc: string }[]
  invalidation: string[]
  scenarios: Scenario[]
  chain: ChainStep[]
  bull: string[]
  bear: string[]
  whatChanges: string[]
  consensus: Consensus
  crossAsset: string
  score: number
  trustGate: TrustGateStatus
  sources: Source[]
  evidence: Evidence[]
  expectedMove: string
  isDemo: boolean
  isExtended?: boolean
}

export interface CalendarEvent {
  id: string
  date: string
  time: string
  title: string
  importance: 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY HIGH'
  desc: string
  assets: string[]
  consensus?: string
  model?: string
  surprise?: string
  sources: string[]
}

export interface HistoryEntry {
  date: string
  asset: string
  dir: Direction
  prob: string
  result: string
  calib: string
  sources: string
  gate: TrustGateStatus
}

export type Page = 'overview' | 'markets' | 'calendar' | 'watchlist' | 'history' | 'sources'
export type MarketTab = 'forex' | 'indices' | 'stocks' | 'crypto' | 'commodities' | 'bonds' | 'macro'
