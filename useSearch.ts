import { useState, useMemo } from 'react'
import { demoOpportunities } from '../data/demo'
import { Opportunity } from '../types'

export function useSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return [] as Opportunity[]
    const q = query.toLowerCase()
    return demoOpportunities.filter(o =>
      o.market.toLowerCase().includes(q) ||
      o.ticker.toLowerCase().includes(q) ||
      o.catalyst.event.toLowerCase().includes(q) ||
      o.sources.some(s => s.name.toLowerCase().includes(q))
    )
  }, [query])

  return { query, setQuery, results, hasQuery: query.trim().length > 0 }
}
