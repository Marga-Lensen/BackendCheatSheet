import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { LanguageContext } from './contexts/LanguageContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <LanguageContext value={{ language: "en", toggleLanguage: () => {} }}> */}
      <App />
    {/* </LanguageContext> */}
  </StrictMode>,
)
