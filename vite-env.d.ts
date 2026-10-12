/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEMO_MODE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_FRED_API_KEY?: string
  readonly VITE_BLS_API_KEY?: string
  readonly VITE_BASE_PATH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
