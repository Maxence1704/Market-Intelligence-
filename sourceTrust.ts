import { Opportunity, Source, TrustGateStatus } from '../types'

export interface GateCheck {
  id: string
  label: string
  desc: string
  passed: boolean
  critical: boolean
}

export function evaluateTrustGate(opp: Opportunity): { status: TrustGateStatus; checks: GateCheck[]; score: number } {
  const checks: GateCheck[] = [
    {
      id: 'verified',
      label: 'Aucune source critique non vérifiée',
      desc: `${opp.sources.filter(s => s.verified).length}/${opp.sources.length} vérifiées`,
      passed: opp.sources.filter(s => s.tier === 'S').every(s => s.verified),
      critical: true
    },
    {
      id: 'anonymous',
      label: 'Aucune donnée critique uniquement douteuse',
      desc: '0 source anonyme (X, Reddit, Telegram)',
      passed: !opp.sources.some(s => s.tier === 'B' && s.reliability < 70),
      critical: true
    },
    {
      id: 'conflict',
      label: 'Pas de contradiction majeure non résolue',
      desc: opp.sources.length > 0 ? 'Conflits expliqués ou absents' : 'No conflict',
      passed: opp.trustGate !== 'FAIL',
      critical: true
    },
    {
      id: 'datetime',
      label: 'Date/heure/timezone confirmées',
      desc: `${opp.catalyst.date} ${opp.catalyst.time}`,
      passed: true,
      critical: true
    },
    {
      id: 'important',
      label: 'Données importantes vérifiées',
      desc: 'Double vérif + cross-check indépendant',
      passed: opp.reliability >= 75,
      critical: false
    },
    {
      id: 'origin',
      label: 'Origine identifiable',
      desc: `URLs traçables — ex: ${opp.sources[0]?.url || 'N/A'}`,
      passed: opp.sources.every(s => s.url.length > 3),
      critical: false
    }
  ]

  const criticalFailed = checks.filter(c => c.critical && !c.passed).length
  const totalPassed = checks.filter(c => c.passed).length
  const score = Math.round((totalPassed / checks.length) * 100)

  let status: TrustGateStatus = 'PASS'
  if (criticalFailed > 0) status = 'FAIL'
  else if (totalPassed < checks.length) status = 'PARTIAL'
  else status = 'PASS'

  // Override with explicit status if set
  if (opp.trustGate === 'FAIL') status = 'FAIL'
  if (opp.trustGate === 'PARTIAL' && status === 'PASS') status = 'PARTIAL'

  return { status, checks, score }
}

export function getTierColor(tier: Source['tier']) {
  switch (tier) {
    case 'S': return { bg: 'rgba(96,165,250,0.12)', color: '#93C5FD', border: 'rgba(96,165,250,0.25)', label: 'OFFICIAL SOURCE' }
    case 'A+': return { bg: 'rgba(234,179,8,0.12)', color: '#FDE68A', border: 'rgba(234,179,8,0.25)', label: 'TRADER SOURCE' }
    case 'A': return { bg: 'rgba(168,168,174,0.12)', color: '#A8A8AE', border: '#2A2A2E', label: 'MARKET DATA' }
    case 'B': return { bg: 'rgba(168,168,174,0.08)', color: '#6B6B72', border: '#232326', label: 'SECONDARY' }
  }
}

export function getTrustGateColor(status: TrustGateStatus) {
  switch (status) {
    case 'PASS': return { bg: 'rgba(34,197,94,0.12)', color: '#22C55E', border: 'rgba(34,197,94,0.25)' }
    case 'PARTIAL': return { bg: 'rgba(234,179,8,0.12)', color: '#EAB308', border: 'rgba(234,179,8,0.25)' }
    case 'FAIL': return { bg: 'rgba(239,68,68,0.12)', color: '#EF4444', border: 'rgba(239,68,68,0.25)' }
  }
}
