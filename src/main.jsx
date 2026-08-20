import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SEO_KEYWORDS } from './seoKeywords.js'

// Inject keywords into the meta tag
const keywordsMeta = document.querySelector('meta[name="keywords"]');
if (keywordsMeta) {
  keywordsMeta.setAttribute('content', SEO_KEYWORDS.join(', '));
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
