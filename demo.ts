import { Opportunity, CalendarEvent, HistoryEntry } from '../types'

export const demoOpportunities: Opportunity[] = [
  {
    id: '01',
    market: 'NASDAQ 100',
    ticker: 'NDX',
    direction: 'LONG',
    arrow: '↑',
    probability: 74,
    reliability: 92,
    confidence: 81,
    impact: 'HIGH',
    impactScore: 4,
    timeHorizon: '1–3 jours',
    catalyst: { event: 'US CPI', date: '13 OCT', time: '14:30 EDT', importance: 'VERY HIGH', countdown: '28h' },
    summary: 'Inflation US susceptible de surprendre à la baisse.',
    thesisOneLiner: 'Inflation below consensus → yields ↓ → growth bid',
    why: ['Core CPI momentum 2.4% vs 3.1% précédemment', 'PPI & import prices -0.2pp pression baissière', 'Market pricing trop hawkish 2.85% vs modèle 2.51%'],
    whyDetailed: [
      { title: 'Core CPI momentum slowing', desc: '3M annualisé 2.4% vs 3.1% — décélération claire BLS S 99' },
      { title: 'Market pricing too hawkish', desc: 'Breakevens 2Y 2.85% vs modèle 2.51% — asymétrie' },
      { title: 'Cross-asset confirmation', desc: 'USD ↓ + Real Yields ↓ → Gold + NDX + Crypto même driver' }
    ],
    invalidation: ['CPI YoY >2.9%', 'Supercore >0.45% MoM', '10Y real >2.15%'],
    scenarios: [
      { prob: 74, label: 'Principal', desc: 'CPI 2.6% vs 2.8% consensus → NDX +1.8% à +2.6%', expectedMove: '+2.2%' },
      { prob: 18, label: 'Secondaire', desc: 'Conforme 2.8% → réaction ±0.5%', expectedMove: '±0.5%' },
      { prob: 8, label: 'Adverse', desc: 'CPI 3.0%+ → NDX -1.5%', expectedMove: '-1.5%' }
    ],
    chain: [
      { id: '1', title: 'CPI 2.6% vs 2.8%', desc: 'BLS 13 oct 14:30', icon: '◐', sourceBadge: 'OFFICIAL SOURCE' },
      { id: '2', title: 'Inflation ↓', desc: 'Désinflation biens + loyers', icon: '◑' },
      { id: '3', title: 'Fed dovish +15bp', desc: '2.3 → 2.9 cuts', icon: '◒' },
      { id: '4', title: 'Yields ↓ 12bp', desc: '10Y real -10bp', icon: '◓' },
      { id: '5', title: 'NASDAQ ↑', desc: '+1.8% → +2.6%', icon: '●' }
    ],
    bull: ['Zillow rents -0.3% MoM', 'Oil -11% enlève 0.15pp headline', 'Short gamma amplifie up'],
    bear: ['Services sticky 0.38% MoM', 'Base effects pétrole', 'Fed pushback si euphorie'],
    whatChanges: ['Supercore <0.2% → 82%', 'PPI >0.4% → 61%', 'Fedspeak hawkish = invalidation'],
    consensus: { previous: '2.9% YoY', consensus: '2.8% YoY', pricing: '2.85% breakeven', model: '2.6% YoY', surprise: '-0.2pp surprise baissière' },
    crossAsset: 'USD ↓ + Real Yields ↓ = Gold + Nasdaq + Crypto même driver. Corrélation 60j 0.58 vs -0.12 avg = confirmation.',
    score: 87,
    trustGate: 'PASS',
    expectedMove: '+1.8% → +2.6%',
    isDemo: true,
    sources: [
      { id: 'bls-cpi', name: 'BLS CPI Release', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 99, url: 'bls.gov/cpi', date: '13 oct 14:30', age: 'Dans 28h', verified: true, crossChecked: 'FRED + Eurostat', role: 'Primary data' },
      { id: 'bls-ppi', name: 'BLS PPI', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 99, url: 'bls.gov/ppi', date: '10 oct', age: '2j', verified: true, crossChecked: 'BEA', role: 'Leading indicator' },
      { id: 'ff', name: 'Forex Factory', tier: 'A+', type: 'TRADER SOURCE', reliability: 95, url: 'forexfactory.com', date: '12 oct', age: '6h', verified: true, crossChecked: 'BLS + Bloomberg', role: 'Consensus 2.8%, importance VERY HIGH' },
      { id: 'treasury', name: 'US Treasury TIPS', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 98, url: 'treasury.gov', date: 'Live', age: 'Live', verified: true, crossChecked: 'FRED', role: 'Real yields driver' },
      { id: 'cme', name: 'CME FedWatch', tier: 'A', type: 'MARKET DATA', reliability: 94, url: 'cmegroup.com', date: 'Live', age: 'Live', verified: true, crossChecked: 'Fed', role: 'Market pricing' }
    ],
    evidence: [
      { id: 'e1', point: 'Core CPI 3M ann. 2.4% vs 3.1%', sourceId: 'bls-cpi', sourceName: 'BLS CPI', tier: 'S', reliability: 99, badge: 'OFFICIAL SOURCE', verified: 'Vérifié BLS + FRED', age: 'Dans 28h', transformation: 'Calcul 3M annualisé depuis MoM officiel', who: 'BLS', when: '13 oct 14:30 EDT', where: 'bls.gov/cpi', isPrimary: true, isConfirmed: true },
      { id: 'e2', point: 'Consensus 2.8% YoY', sourceId: 'ff', sourceName: 'Forex Factory', tier: 'A+', reliability: 95, badge: 'TRADER SOURCE', verified: 'Cross-check Bloomberg 2.8%', age: '6h', transformation: 'Consensus agrégé trader', who: 'Forex Factory', when: '12 oct 09:00', where: 'forexfactory.com/calendar', isPrimary: false, isConfirmed: true },
      { id: 'e3', point: 'Breakevens 2.85% vs modèle 2.51%', sourceId: 'treasury', sourceName: 'US Treasury', tier: 'S', reliability: 98, badge: 'MARKET DATA', verified: 'Treasury + FRED live', age: 'Live', transformation: 'Market pricing vs model', who: 'US Treasury', when: 'Live', where: 'treasury.gov', isPrimary: true, isConfirmed: true }
    ]
  },
  {
    id: '02',
    market: 'GOLD',
    ticker: 'XAU/USD',
    direction: 'LONG',
    arrow: '↑',
    probability: 71,
    reliability: 88,
    confidence: 76,
    impact: 'MEDIUM-HIGH',
    impactScore: 3,
    timeHorizon: '1–2 sem',
    catalyst: { event: 'Real Yields + CB Demand', date: 'EN COURS', time: 'Régime', importance: 'HIGH', countdown: 'Structurel' },
    summary: 'Real yields compression + demande banques centrales.',
    thesisOneLiner: 'TIPS 1.82% + PBoC bid → asymétrie haussière',
    why: ['TIPS 2.08%→1.82% en 8j', 'PBoC+RBI 28T achats sept', 'COMEX long 62e percentile — room'],
    whyDetailed: [
      { title: 'Real yields collapse', desc: 'TIPS -26bp en 8j — support direct Gold' },
      { title: 'Central bank bid', desc: 'PBoC + RBI 28T sept WGC S 95' },
      { title: 'Positioning light', desc: '62e percentile — pas crowded' }
    ],
    invalidation: ['Real yields >2.05%', 'DXY >103.8', 'ETF outflows >12T 5j'],
    scenarios: [
      { prob: 71, label: 'Principal', desc: 'Gold $2,780-2,820 si real yields <1.90%', expectedMove: '+2.3%' },
      { prob: 21, label: 'Secondaire', desc: 'Range $2,680-2,750', expectedMove: 'Range' },
      { prob: 8, label: 'Adverse', desc: 'Hawkish Fed → $2,620', expectedMove: '-2.1%' }
    ],
    chain: [
      { id: '1', title: 'Real yields ↓', desc: 'TIPS -26bp', icon: '◐' },
      { id: '2', title: 'USD ↓', desc: 'DXY breakdown 102.5', icon: '◑' },
      { id: '3', title: 'CB bid + ETF inflows', desc: '28T + 6.2T', icon: '◒' },
      { id: '4', title: 'GOLD ↑', desc: '$2,805 target', icon: '●' }
    ],
    bull: ['ETF +$1.1B 3 sem consécutives', 'Géopolitique premium $40', 'Q4 saisonnalité 73% haussière'],
    bear: ['+7% 3 sem — profit taking', 'CPI hot demain = real yields up', 'COMEX liquidation si USD squeeze'],
    whatChanges: ['Real yields <1.75% → 78%', 'DXY >103.5 → <65% sortie', 'PBoC pause = alerte'],
    consensus: { previous: '$2,695', consensus: '$2,700-2,800', pricing: '$2,742 spot', model: '$2,805 target', surprise: '+2.3% upside' },
    crossAsset: 'USD ↓ + Real yields ↓ → Gold + Nasdaq + Crypto. Dé-corrélation S&P = hedge qualité.',
    score: 81,
    trustGate: 'PASS',
    expectedMove: '$2,780 → $2,820',
    isDemo: true,
    sources: [
      { id: 'tips', name: 'US Treasury TIPS', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 98, url: 'treasury.gov', date: 'Live', age: 'Live', verified: true, crossChecked: 'FRED', role: 'Driver' },
      { id: 'wgc', name: 'World Gold Council', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 95, url: 'gold.org', date: '09 oct', age: '3j', verified: true, crossChecked: 'PBoC', role: 'CB demand' },
      { id: 'cftc-gold', name: 'CFTC COT', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 93, url: 'cftc.gov', date: '10 oct', age: '2j', verified: true, crossChecked: 'CME', role: 'Positioning' }
    ],
    evidence: [
      { id: 'e1', point: 'TIPS 1.82% vs 2.08% 8j', sourceId: 'tips', sourceName: 'US Treasury', tier: 'S', reliability: 98, badge: 'OFFICIAL SOURCE', verified: 'Treasury + FRED', age: 'Live', transformation: 'Donnée directe', who: 'US Treasury', when: 'Live', where: 'treasury.gov', isPrimary: true, isConfirmed: true }
    ]
  },
  {
    id: '03',
    market: 'USD / JPY',
    ticker: 'USDJPY',
    direction: 'SHORT',
    arrow: '↓',
    probability: 70,
    reliability: 85,
    confidence: 74,
    impact: 'MEDIUM',
    impactScore: 3,
    timeHorizon: '3–7j',
    catalyst: { event: 'BoJ + Yields Top', date: '15-16 OCT', time: 'BoJ Minutes', importance: 'HIGH', countdown: '3j' },
    summary: 'BoJ normalization + US yields topping → spread compression.',
    thesisOneLiner: 'Wages 2.8% > seuil 2.5% + IMM crowded short → squeeze',
    why: ['BoJ 7/9 ouverts à hike si wages >2.5% (2.8% réalisé)', 'US 2Y double top 4.95%', 'IMM JPY short -112k extrême'],
    whyDetailed: [
      { title: 'BoJ hawkish tilt', desc: 'Wages spring 2.8% > seuil 2.5% — condition hike remplie' },
      { title: 'US yields topping', desc: '2Y échec 4.95% x2 — fin cycle hawkish' },
      { title: 'Crowded short squeeze', desc: 'IMM -112k contrats — asymétrie' }
    ],
    invalidation: ['US retail >0.6% MoM', 'BoJ dovish surprise', 'USDJPY >149.5'],
    scenarios: [
      { prob: 70, label: 'Principal', desc: 'USDJPY 146.20-146.80 (-1.4%)', expectedMove: '-1.4%' },
      { prob: 20, label: 'Secondaire', desc: 'Range 147.5-149.0', expectedMove: 'Range' },
      { prob: 10, label: 'Adverse', desc: 'Break 150 → 151.20', expectedMove: '+1.0%' }
    ],
    chain: [
      { id: '1', title: 'US 2Y top 4.95%', desc: 'Double top', icon: '◐' },
      { id: '2', title: 'BoJ wages 2.8%', desc: '> seuil 2.5%', icon: '◑' },
      { id: '3', title: 'Spread -18bp', desc: 'Carry moins attractif', icon: '◒' },
      { id: '4', title: 'USDJPY ↓', desc: '146.5 target', icon: '●' }
    ],
    bull: ['JPY shorts crowded — squeeze', 'MoF intervention risk 150', 'Saisonnalité octobre JPY forte'],
    bear: ['Carry 5.2% support structurel', 'US data résilient', 'BoJ a déçu 4 fois'],
    whatChanges: ['US CPI hot → 58%', 'Ueda hawkish → 77%', 'USDJPY >149.5 → NO TRADE'],
    consensus: { previous: '148.2', consensus: '147.8', pricing: '148.0 forward', model: '146.5', surprise: '-1.0% potentiel' },
    crossAsset: 'Yields US ↓ → USD ↓ → JPY ↑ → Gold ↑. Corrélé thèse Nasdaq LONG.',
    score: 78,
    trustGate: 'PASS',
    expectedMove: '146.2 → 146.8',
    isDemo: true,
    sources: [
      { id: 'boj', name: 'Bank of Japan Minutes', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 97, url: 'boj.or.jp', date: '09 oct', age: '3j', verified: true, crossChecked: 'MoF', role: 'Policy tilt' },
      { id: 'mof', name: 'MoF Japan', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 94, url: 'mof.go.jp', date: '11 oct', age: '1j', verified: true, crossChecked: 'BoJ', role: 'Intervention risk' },
      { id: 'cftc-jpy', name: 'CFTC IMM JPY', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 92, url: 'cftc.gov', date: '10 oct', age: '2j', verified: true, crossChecked: 'CME', role: 'Positioning' },
      { id: 'ff-boj', name: 'Forex Factory BoJ', tier: 'A+', type: 'TRADER SOURCE', reliability: 93, url: 'forexfactory.com', date: '12 oct', age: '6h', verified: true, crossChecked: 'BoJ calendar', role: 'Horaire + importance' }
    ],
    evidence: [
      { id: 'e1', point: 'BoJ 7/9 ouverts à hike si wages >2.5%', sourceId: 'boj', sourceName: 'BoJ Minutes', tier: 'S', reliability: 97, badge: 'OFFICIAL SOURCE', verified: 'Lecture directe minutes', age: '3j', transformation: 'Interprétation texte officiel', who: 'BoJ', when: '09 oct', where: 'boj.or.jp', isPrimary: true, isConfirmed: true }
    ]
  },
  {
    id: '04',
    market: 'BRENT',
    ticker: 'BRENT',
    direction: 'SHORT',
    arrow: '↓',
    probability: 67,
    reliability: 79,
    confidence: 68,
    impact: 'MEDIUM',
    impactScore: 2,
    timeHorizon: '1–2 sem',
    catalyst: { event: 'Demand Slowdown', date: '16 OCT', time: 'IEA Report', importance: 'MEDIUM', countdown: 'Extended' },
    summary: 'Demande Chine faible + stocks build + long crowded.',
    thesisOneLiner: 'China imports -6.2% + OECD +18M → pullback risk',
    why: ['China imports -6.2% YoY', 'OECD stocks +18M vs 5y avg', 'Net long 78e percentile'],
    whyDetailed: [
      { title: 'China demand weak', desc: 'Crude imports -6.2% YoY sept' },
      { title: 'Stocks build', desc: 'OECD +18M bbls vs 5y avg' },
      { title: 'Positioning crowded', desc: 'Net long 78e percentile' }
    ],
    invalidation: ['Géopolitique escalade', 'OPEC+ cut surprise', 'Brent >$82.5'],
    scenarios: [
      { prob: 67, label: 'Principal (Extended)', desc: 'Brent $75.20 (-3.1%)', expectedMove: '-3.1%' },
      { prob: 33, label: 'Adverse', desc: 'Spike géopolitique $84-86', expectedMove: '+5%' }
    ],
    chain: [
      { id: '1', title: 'China demand -6.2%', desc: 'Imports YoY', icon: '◐' },
      { id: '2', title: 'Stocks +18M', desc: 'OECD build', icon: '◑' },
      { id: '3', title: 'Long crowded 78%', desc: 'Positioning', icon: '◒' },
      { id: '4', title: 'Brent ↓ $75.2', desc: 'Target', icon: '●' }
    ],
    bull: ['Géopolitique premium sous-pricé', 'Hiver demande chauffage', 'OPEC+ discipline'],
    bear: ['Demande structurelle faible', 'US prod record 13.4M', 'EV adoption'],
    whatChanges: ['China stimulus → invalidation', 'Stocks draw >5M → <60%'],
    consensus: { previous: '$79.1', consensus: '$78.5', pricing: '$78.0', model: '$75.2', surprise: '-3.6%' },
    crossAsset: 'Oil ↓ → Inflation ↓ → Yields ↓ → Nasdaq ↑ (confirme 01) mais géopolitique = risque queue.',
    score: 64,
    trustGate: 'PARTIAL',
    expectedMove: '$75.20',
    isDemo: true,
    isExtended: true,
    sources: [
      { id: 'iea', name: 'IEA Oil Report', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 94, url: 'iea.org', date: 'Sept', age: '12j', verified: true, crossChecked: 'EIA', role: 'Demand' },
      { id: 'china-customs', name: 'China Customs', tier: 'S', type: 'OFFICIAL SOURCE', reliability: 92, url: 'customs.gov.cn', date: '08 oct', age: '4j', verified: true, crossChecked: 'NBS', role: 'Imports' }
    ],
    evidence: [
      { id: 'e1', point: 'China imports -6.2% YoY', sourceId: 'china-customs', sourceName: 'China Customs', tier: 'S', reliability: 92, badge: 'OFFICIAL SOURCE', verified: 'Customs + NBS', age: '4j', transformation: 'YoY calc officiel', who: 'China Customs', when: '08 oct', where: 'customs.gov.cn', isPrimary: true, isConfirmed: true }
    ]
  }
]

export const calendarEvents: CalendarEvent[] = [
  { id: 'cpi', date: '13 OCT', time: '14:30 EDT', title: 'US CPI — Septembre', importance: 'VERY HIGH', desc: 'Pivot semaine. 40% move hebdo NDX vient du CPI.', assets: ['NASDAQ', 'S&P 500', 'USD', 'Gold', 'Bonds'], consensus: '2.8% YoY', model: '2.6% YoY', surprise: '-0.2pp potentiel', sources: ['BLS S 99 OFFICIAL', 'Forex Factory A+ 95 TRADER'] },
  { id: 'ppi', date: '14 OCT', time: '08:30 EDT', title: 'US PPI', importance: 'HIGH', desc: 'Leading PCE. Vérifie désinflation biens.', assets: ['USD', 'Bonds', 'NASDAQ'], consensus: '0.2% MoM', model: '0.1% MoM', sources: ['BLS S 99'] },
  { id: 'boj', date: '15 OCT', time: '02:50 JST', title: 'BoJ Minutes + Wage Data', importance: 'HIGH', desc: 'Clé JPY. Salaires >2.5% → porte hike 30 oct.', assets: ['USD/JPY', 'Nikkei', 'JGB'], consensus: '2.6% wage', model: '2.8%', sources: ['BoJ S 97 OFFICIAL', 'Forex Factory A+ 93 TRADER'] },
  { id: 'fade', date: '15 OCT', time: '16:30 CEST', title: 'NASDAQ — Fenêtre prise de profit', importance: 'HIGH', desc: 'Fin fenêtre 1-3j post-CPI. Fade du spike CPI mardi + Fed pushback. LONG mardi → SHORT jeudi possible.', assets: ['NASDAQ', 'S&P 500', 'VIX'], consensus: 'Fade move CPI', model: 'Exit LONG / SHORT si yields rebond', sources: ['Internal model A 94 MARKET'] },
  { id: 'iea', date: '16 OCT', time: '10:00 CEST', title: 'IEA Oil Market Report', importance: 'MEDIUM', desc: 'Révision demande 2026.', assets: ['Brent', 'WTI', 'Energy'], sources: ['IEA S 94 OFFICIAL'] },
  { id: 'retail', date: '17 OCT', time: '08:30 EDT', title: 'US Retail Sales', importance: 'HIGH', desc: 'Consommation 68% GDP.', assets: ['USD', 'S&P 500', 'Bonds'], sources: ['Census S 99 OFFICIAL', 'Forex Factory A+ 95 TRADER'] },
  { id: 'china', date: '18 OCT', time: '10:00 CEST', title: 'China GDP Q3', importance: 'VERY HIGH', desc: 'Santé Chine. Impact Copper, AUD.', assets: ['Copper', 'AUD/USD', 'Hang Seng'], sources: ['NBS China S 90 OFFICIAL'] }
]

export const historyEntries: HistoryEntry[] = [
  { date: '08 oct', asset: 'NASDAQ 100', dir: 'LONG', prob: '72%', result: 'WIN +1.9%', calib: 'OK', sources: 'BLS S 99 + FF A+ 95 + Treasury S 98', gate: 'PASS' },
  { date: '03 oct', asset: 'EUR/USD', dir: 'SHORT', prob: '71%', result: 'LOSS -0.4%', calib: 'OK', sources: 'ECB S 99 + Eurostat S 98', gate: 'PASS' },
  { date: '01 oct', asset: 'GOLD', dir: 'LONG', prob: '75%', result: 'WIN +2.3%', calib: 'OK', sources: 'Treasury S 98 + WGC S 95', gate: 'PASS' },
  { date: '28 sept', asset: 'USD/JPY', dir: 'SHORT', prob: '70%', result: 'WIN +0.9%', calib: 'OK', sources: 'BoJ S 97 + CFTC S 92', gate: 'PASS' },
  { date: '20 sept', asset: 'S&P 500', dir: 'LONG', prob: '74%', result: 'WIN +1.2%', calib: 'OK', sources: 'BEA S 99 + BLS S 99', gate: 'PASS' }
]
