import { useMemo, useState } from 'react'
import { demoOpportunities } from '../data/demo'
import { shouldDisplay } from '../lib/scoring'
import { Opportunity } from '../types'

export function useOpportunities() {
  const [extendedMode, setExtendedMode] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return demoOpportunities.filter(o => shouldDisplay(o, extendedMode)).sort((a, b) => b.score - a.score)
  }, [extendedMode])

  const highConviction = useMemo(() => filtered.filter(o => o.probability >= 70), [filtered])
  const extended = useMemo(() => filtered.filter(o => o.probability >= 65 && o.probability < 70), [filtered])

  const selected = useMemo(() => {
    if (!selectedId) return null
    return demoOpportunities.find(o => o.id === selectedId) || null
  }, [selectedId])

  const toggleExtended = () => setExtendedMode(v => !v)

  const getById = (id: string): Opportunity | undefined => demoOpportunities.find(o => o.id === id)

  return {
    all: demoOpportunities,
    filtered,
    highConviction,
    extended,
    extendedMode,
    toggleExtended,
    selected,
    selectedId,
    setSelectedId,
    getById
  }
}
