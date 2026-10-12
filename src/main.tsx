import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Open-source stand-ins for Greed / Scto Grotesk A (see DESIGN_FOUNDATION.md)
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import './index.css'
import { App } from './App'

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
