export function formatProbability(p: number) {
  return `${p}%`
}

export function formatReliability(r: number) {
  return `${r}/100`
}

export function formatAge(age: string) {
  return age
}

export function formatCountdown(countdown: string) {
  return countdown
}

export function getDirectionColor(dir: 'LONG' | 'SHORT') {
  return dir === 'LONG' ? '#22C55E' : '#EF4444'
}

export function getDirectionBg(dir: 'LONG' | 'SHORT') {
  return dir === 'LONG' ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)'
}
