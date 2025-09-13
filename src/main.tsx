import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure KaTeX works properly by confirming DOM is in standards mode
if (document.compatMode !== 'CSS1Compat') {
  console.warn('Document is not in standards mode. This should not happen with HTML5 doctype.');
}

// Additional KaTeX configuration for Recharts compatibility
if (typeof window !== 'undefined') {
  // Set global KaTeX options if available
  (window as any).katexOptions = {
    strict: false,
    throwOnError: false,
    errorColor: '#cc0000',
    macros: {}
  };
}

createRoot(document.getElementById("root")!).render(<App />);
