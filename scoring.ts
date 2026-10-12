import { Opportunity } from '../types'

// Scoring system — distinct scores as per spec
// Probability: estimated scenario prob
// Reliability: data quality
// Confidence: convergence
// Impact: LOW/MEDIUM/HIGH/VERY HIGH
// Opportunity Score: global ranking

export function calculateOpportunityScore(opp: Opportunity): number {
  // Weighted formula as per spec:
  // proba 40% + reliability 20% + confidence 15% + impact 10% + cross-asset 10% + asymétrie 5%
  const proba = opp.probability * 0.4
  const reliability = opp.reliability * 0.2
  const confidence = opp.confidence * 0.15
  const impactMap: Record<string, number> = { LOW: 40, MEDIUM: 60, 'MEDIUM-HIGH': 75, HIGH: 85, 'VERY HIGH': 95 }
  const impact = (impactMap[opp.impact] || 60) * 0.1
  const crossAsset = 84 * 0.1 // mock cross-asset coherence 84/100
  const asymmetry = 75 * 0.05 // mock asymmetry

  return Math.round(proba + reliability + confidence + impact + crossAsset + asymmetry)
}

export function getImpactColor(impact: string) {
  switch (impact) {
    case 'LOW': return '#6B6B72'
    case 'MEDIUM': return '#A8A8AE'
    case 'MEDIUM-HIGH': return '#EAB308'
    case 'HIGH': return '#F59E0B'
    case 'VERY HIGH': return '#EF4444'
    default: return '#A8A8AE'
  }
}

export function shouldDisplay(opp: Opportunity, extendedMode: boolean): boolean {
  if (opp.probability >= 70) return true
  if (extendedMode && opp.probability >= 65) return true
  return false
}

export function getDisplayThreshold() {
  return { high: 70, extended: 65, minReliability: 75 }
}
