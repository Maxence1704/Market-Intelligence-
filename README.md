# MARKET INTELLIGENCE — Macro & Fundamental Intelligence

**AI financial intelligence platform — extremely selective filtering**

> 247 sources → 96.4% filtered → 3 high-conviction opportunities max 10/week

Philosophie : **Beaucoup de données en entrée → énormément de filtrage → très peu d'opportunités en sortie.** Préfère dire `NO HIGH-CONVICTION SETUP` plutôt que forcer un signal.

![Premium](https://img.shields.io/badge/design-premium%20%7C%20minimal%20%7C%20Apple%20%2F%20Linear%20%2F%20Stripe-black)
![Stack](https://img.shields.io/badge/stack-React%20%2B%20Vite%20%2B%20TypeScript-blue)
![Sources](https://img.shields.io/badge/sources-S%20Tier%2068%25%20primary-60A5FA)
![Trust Gate](https://img.shields.io/badge/trust%20gate-PASS-22C55E)

---

## ✨ Design Direction — Premium Modern 2026

Refonte complète pour une sensation **Apple / Linear / Stripe / modern fintech**, pas dashboard crypto.

- **Moins de texte** : grands chiffres, badges, cartes arrondies 20-28px, anneaux de probabilité, sparklines, timeline visuelle
- **Hiérarchie** : Asset (18px bold) → Direction → Probability ring 74% → Impact → Catalyst → One-liner → Action
- **Cards** : border-radius 24px, bordures subtiles, ombres légères, profondeur discrète, whitespace généreux
- **Flow** : SUMMARY (très simple) → ANALYSIS (3 key reasons au clic) → DEEP DIVE (tout, repliable)
- **Couleurs** : background #08080A charcoal, cards #18181B légèrement plus clair, texte blanc cassé #F5F5F0, secondary gris, accent bleu-gris subtil, green LONG, red SHORT, yellow attention. Pas de néons, pas de glow excessif.
- **Micro-interactions** : hover translateY(-2px), transitions cubic-bezier(.22,1,.36,1), fadeIn, expansion cartes, skeleton
- **Responsive** : sidebar desktop 220px, bottom nav mobile, cards empilées, vraie adaptation mobile pas juste réduction

### Home structure
```
HEADER: Logo / Search / Alerts / Profile
SECTION Today: "3 high-conviction opportunities — Updated 2 min ago"
SECTION Top Opportunities: max 3-5 cartes très visuelles
  ┌──────────────────────────────────────┐
  │ NASDAQ 100                 LONG ↑    │
  │ 74% ring   HIGH IMPACT  +1.8→2.6%   │
  │ CPI • Oct 13 • 14:30  [Verified]    │
  │ Inflation below consensus            │
  │ CPI 2.6% vs 2.8% → Yields ↓ → NDX  │
  │ [ Analyze ]                    +     │
  └──────────────────────────────────────┘
```

---

## 🏛️ Source Trust System — Exigence Critique

### Hiérarchie stricte

**S TIER 99/100 — OFFICIAL SOURCE** (bleu)
Fed, FOMC, BLS, BEA, Census, Treasury, SEC, ECB, Eurostat, BoE, ONS, BoJ, MoF, PBoC, NBS China, CFTC, EIA. Priorité absolue.

**A+ TIER 95/100 — TRADER SOURCE** (jaune)
Forex Factory pour calendrier, horaires, importance, consensus, previous, actual. **IMPORTANT** : jamais source primaire du chiffre. Si chiffre original disponible chez BLS/Fed, vérifier auprès du primaire. Cross-check obligatoire.

**A TIER 80-94 — MARKET DATA** (gris)
CME FedWatch, Treasury market data, CFTC, ICE, Bloomberg. Forex OTC → comparer plusieurs flux.

**INTERDIT** : X/Twitter anonyme, Telegram anonyme, Reddit, forums, blogs sans méthodo, screenshots. → `SOURCE NOT SUFFICIENTLY RELIABLE` → opportunité supprimée.

### Badges visuels
- `OFFICIAL SOURCE` bleu — donnée primaire institutionnelle
- `TRADER SOURCE` jaune — consensus/horaires trader
- `MARKET DATA` gris — prix marché
- `✓ VERIFIED` vert — vérifié
- `DATA CONFLICT` rouge — deux sources fiables divergent → expliqué
- `DEMO DATA` dashed — données démo clairement marquées

### Verification Pipeline — 6 étapes
1. Trouver source → 2. Primaire/Secondaire ? → 3. Chercher primaire si secondaire → 4. Comparer → 5. Vérifier date/heure/timezone/valeur/unité/previous/consensus/révision → 6. Confirmer 2e source indépendante

### Trust Gate — Conditions minimales pour HIGH CONVICTION
- Aucune source critique non vérifiée
- Aucune donnée critique uniquement douteuse
- Pas de contradiction majeure non résolue
- Date/heure confirmées
- Données importantes vérifiées
- Origine identifiable

Si Gate échoue → `NO HIGH-CONVICTION SETUP` automatique.

### Source Confidence ≠ Trade Probability
- Reliability 99/100 = donnée fiable ?
- Probability 74% = marché va monter ? Incertain même avec bonne donnée. Source fiable ≠ trade certain.

### Gestion cas limites
- `DATA UNAVAILABLE` → opportunité dégradée/supprimée, jamais inventer URL/stat/consensus
- `DATA CONFLICT` → afficher source A vs B, pourquoi diffèrent, laquelle primaire, laquelle plus récente, impact
- `SOURCE NOT SUFFICIENTLY RELIABLE` → supprimée
- Minimum source requirement >70% : convergence de plusieurs éléments indépendants (inflation + Fed + taux + futures + dollar + positionnement + catalyseur + historique)

---

## 📊 Features

- **Max 10 opportunités/semaine** — plafond, pas objectif. Peut être 0, 1, 3. Idéalement 2-3 excellentes > 20 moyennes.
- **Seuils** : ≥70% affichage, 65-69% Extended optionnel, <65% masqué. Reliability ≥75, Trust Gate PASS, pas de conflit critique.
- **10 questions par opportunité** : QUOI, QUAND, ACTIF, DIRECTION, PROBA, FIABILITÉ, POURQUOI, CATALYSEUR, INVALIDATION, IMPACT
- **Chaîne causale** : Événement → Macro → Politique monétaire → Taux → Dollar/Liquidité → Marchés → Direction
- **Cross-asset** : USD + taux + obligations + actions + commodities + crypto + vol + liquidité — confirmation/contradiction
- **Bull vs Bear** : recherche active arguments CONTRE thèse + What would change view?
- **Calendrier intelligent** : pas "CPI 14:30" mais pourquoi ça compte, actifs concernés, scénarios, consensus vs modèle vs surprise
- **Scoring** : Probability, Reliability, Confidence, Impact, Opportunity Score (proba 40% + reliability 20% + confidence 15% + impact 10% + cross-asset 10% + asymétrie 5%)
- **History & Calibration** : enregistre date/heure/actif/direction/proba/confidence/données/scénario/résultat/performance → stats calibration
- **NO TRADE** : état officiel quand données contradictoires

---

## 🗂️ Project Structure

```
/src
  /components
    Badge.tsx
    OpportunityCard.tsx        # Card moderne 24px radius, probability ring, chain visual
    ProbabilityRing.tsx        # Anneau SVG 74% + bar
    MiniChart.tsx              # Sparkline SVG
    ConsensusVisual.tsx        # Previous/Consensus/Market/Model bars + scenario distribution
    Collapsible.tsx            # Sections repliables Deep Dive
    Header.tsx                 # Logo / Search / Alerts / Profile
    Sidebar.tsx                # Nav minimal + bottom nav mobile
    EmptyState.tsx             # No Trade, Data Unavailable
  /pages
    Overview.tsx               # Today + Top Opportunities + KPIs + divergence banner
    Markets.tsx                # Forex, Indices, Stocks, Crypto, Commodities, Bonds, Macro
    Calendar.tsx               # Intelligent calendar avec badges sources
    Watchlist.tsx
    History.tsx
    Sources.tsx                # Hiérarchie S → A+ → A + pipeline
  /layouts
    AppLayout.tsx
  /hooks
    useOpportunities.ts
    useSearch.ts
  /lib
    sourceTrust.ts             # Trust Gate evaluation + tier colors
    scoring.ts                 # Opportunity Score + thresholds
    formatters.ts
  /data
    demo.ts                    # Demo opportunities avec sources S + A+ + evidence traçabilité
  /types
    index.ts
  /styles
    tokens.css                 # Design tokens : colors, radius 12/16/20/24/28, shadows
    globals.css                # Layout, cards, drawer, animations, responsive

/public
  vite.svg

.github/workflows/deploy.yml   # GitHub Pages deploy

index.html
package.json
vite.config.ts                 # base: './' pour GitHub Pages
tsconfig.json
.env.example
README.md
```

---

## 🚀 Installation & Lancement

### Prérequis
- Node >=18
- npm >=9

### 1. Cloner / Créer repo
```bash
git clone https://github.com/YOUR_USERNAME/market-intelligence.git
cd market-intelligence
```

### 2. Installer
```bash
npm install
```

### 3. Lancer dev
```bash
npm run dev
# → http://localhost:3000
```

### 4. Build
```bash
npm run build
npm run preview # → http://localhost:4173
```

### 5. Lint / Type check
```bash
npm run lint
```

---

## 🔑 Variables d'environnement

Copier `.env.example` → `.env`

```
VITE_DEMO_MODE=true
VITE_APP_VERSION=3.0.0

# Optionnel — demo mode fonctionne sans
VITE_FRED_API_KEY=your_fred_key
VITE_BLS_API_KEY=your_bls_key
VITE_TWELVE_DATA_API_KEY=your_twelve_key

# Si backend nécessaire pour clés secrètes
VITE_API_BASE_URL=https://api.yourdomain.com
```

**NE JAMAIS** mettre de clé secrète directement dans le frontend. Utiliser backend/serverless si API nécessite secret.

---

## 📦 Déploiement GitHub Pages

### Automatique via GitHub Actions
1. Push sur `main` → workflow `.github/workflows/deploy.yml` build + deploy vers GitHub Pages
2. Activer Pages : repo Settings → Pages → Source: GitHub Actions

### Manuel
```bash
npm run build
# dist/ prêt à déployer
```

### Config base path
Dans `vite.config.ts` :
```ts
base: './' // pour root ou custom domain
// ou
base: '/market-intelligence/' // pour https://username.github.io/market-intelligence/
```

---

## 🧩 Architecture Data — Séparation propre

```
UI (components/pages)
  ↓
hooks (useOpportunities, useSearch)
  ↓
lib (scoring, sourceTrust, formatters)
  ↓
data (demo.ts) → future: services/data providers → APIs (FRED, BLS, Forex Factory, Treasury, CFTC)
```

**Ajouter nouvelle source :**
1. Ajouter dans `src/data/demo.ts` → `sources: [{ id, name, tier: 'S', type: 'OFFICIAL SOURCE', reliability: 99, url, date, age, verified, crossChecked, role }]`
2. Ajouter evidence associée dans `evidence: [{ point, sourceId, tier, badge, verified, age, transformation, who, when, where, isPrimary, isConfirmed }]`
3. Trust Gate évalue automatiquement

**Ajouter nouvel actif :**
1. Ajouter dans `assetsByTab` dans `Markets.tsx`
2. Créer opportunité dans `demo.ts` avec convergence multi-sources

**Modifier scoring :**
Éditer `src/lib/scoring.ts` → `calculateOpportunityScore` — poids proba 40%, reliability 20%, etc.

**Connecter données réelles :**
Créer `src/services/` :
- `fred.ts` → FRED API (TIPS, import prices)
- `bls.ts` → BLS API (CPI, PPI)
- `forexFactory.ts` → scraping/API calendar (consensus, importance)
- `treasury.ts` → Treasury yields
- `cftc.ts` → COT reports
Puis remplacer `demo.ts` par hooks qui fetch + vérifient + cross-check.

---

## 🎨 Design System

**Tokens** (`tokens.css`) :
- bg #08080A charcoal, panel #151518, card #18181B, border #232326
- radius 12/16/20/24/28, radius-full 999px
- shadows sm/md/lg avec inset
- mono JetBrains Mono, sans Inter

**Cards** : 24px radius, border subtle, shadow md on hover, translateY(-2px), 18px padding, gap 14px, fade-in animation

**Probability Ring** : SVG circle, stroke-dashoffset animé .8s cubic-bezier(.22,1,.36,1), green LONG, red SHORT

**Badges** : 8px font, 3px 7px padding, radius 999px, mono, uppercase, officiel bleu, trader jaune, market gris, verified vert

**Collapsible** : border 1px, radius 16px, head 14px 16px, icon rotate 90deg on open, body fadeIn .25s

**Responsive** : sidebar 220px desktop sticky, bottom nav mobile fixed, cards-grid 3→2→1 columns, header search max 420px

---

## 📋 Modes

**DEMO MODE** (par défaut) : données clairement marquées `DEMO DATA` dashed badge, jamais présentées comme live. Si donnée réelle non dispo → `DATA UNAVAILABLE`, si conflit → `DATA CONFLICT`, si pas assez preuves → `NO TRADE`

**LIVE MODE** (futur) : brancher APIs via services, garder même UI, Trust Gate passe en vérification live

---

## ⚠️ Disclaimer

Données démo pour 12 Oct 2026. Pas de conseil financier. Probabilités = estimations, jamais certitudes. Calibration historique fournie pour transparence. Source fiable ≠ trade certain.

---

## 📄 License

MIT — Libre pour usage perso. Pour usage pro avec données live, ajouter backend sécurisé pour clés API.
