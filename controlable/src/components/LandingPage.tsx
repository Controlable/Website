import { useEffect } from 'react'

declare global {
  interface Window {
    lucide?: { createIcons?: () => void }
  }
}
import FloatingIcons from './FloatingIcons'
import Header from './Header'
import Hero from './Hero'
import CTASection from './CTASection'
import Footer from './Footer'
import {
  ValueDelivered,
  Mission,
  PlatformBuilding,
  HowItWorks,
  Differentiation,
  WhoFor,
  Team
} from './ContentSections'

const year = new Date().getFullYear()

function LandingPage() {
  useEffect(() => {
    // Lucide icons
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons()
    }
    // Theme preference
    const themeToggle = document.getElementById('themeToggle')
    const sunIcon = themeToggle?.querySelector('.sun-icon')
    const moonIcon = themeToggle?.querySelector('.moon-icon')
    const savedTheme = localStorage.getItem('theme') || 'light'
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      sunIcon?.classList.add('hidden')
      moonIcon?.classList.remove('hidden')
    }
    themeToggle?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark')
      sunIcon?.classList.toggle('hidden')
      moonIcon?.classList.toggle('hidden')
      const isDark = document.documentElement.classList.contains('dark')
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    })
    return () => {
      themeToggle?.removeEventListener('click', () => {})
    }
  }, [])

  return (
    <div
      className="min-h-screen text-slate-900 antialiased"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}
      data-bg-root
    >
      <FloatingIcons />
      <Header />
      <div className="main-container">
        <Hero />
        <ValueDelivered />
        <Mission />
        <PlatformBuilding />
        <HowItWorks />
        <Differentiation />
        <WhoFor />
        <Team />
        <CTASection />
        <Footer year={year} />
      </div>
      {/* Styles for floating icons, dark mode, etc. */}
      <style>{`
        [data-bg-root].dark, html.dark [data-bg-root] {
          background: linear-gradient(135deg, #0f172a 0%, #1a1f35 100%) !important;
        }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0px) rotateZ(0deg); } 50% { transform: translateY(-20px) rotateZ(5deg); } }
        @keyframes subtle-glow { 0%, 100% { filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.3)); } 50% { filter: drop-shadow(0 0 16px rgba(16, 185, 129, 0.5)); } }
        .float { animation: float 3s ease-in-out infinite; }
        .float-icon { position: fixed; opacity: 0.04; z-index: 0; pointer-events: none; color: #10b981; }
        html.dark .float-icon { opacity: 0.06; }
        .float-icon-1 { animation: float-slow 8s ease-in-out infinite; top: 10%; left: 5%; }
        .float-icon-2 { animation: float-slow 10s ease-in-out infinite; top: 30%; right: 8%; animation-delay: 1s; }
        .float-icon-3 { animation: float-slow 12s ease-in-out infinite; top: 60%; left: 10%; animation-delay: 2s; }
        .float-icon-4 { animation: float-slow 11s ease-in-out infinite; top: 50%; right: 5%; animation-delay: 1.5s; }
        .subtle-glow { animation: subtle-glow 4s ease-in-out infinite; }
        .main-container { width: 100%; max-width: 1400px; margin: 0 auto; position: relative; z-index: 10; }
        .fancy-button { position: relative; overflow: hidden; transition: all 0.3s ease; }
        .fancy-button::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s; }
        .fancy-button:hover::before { left: 100%; }
        .section-border { border-top: 1px solid #e2e8f0; }
        html.dark .section-border { border-top-color: #334155; }
        html.dark body { color: #e2e8f0; }
        html.dark .bg-slate-50 { background-color: #0f172a; border-color: #475569; }
        html.dark .border-slate-200 { border-color: #475569; }
        html.dark .border-slate-300 { border-color: #475569; }
        html.dark .placeholder-slate-400::placeholder { color: #64748b; }
        html.dark .hover\\:border-emerald-300 { border-color: #475569; }
        html.dark .hover\\:border-emerald-300:hover { border-color: rgba(16, 185, 129, 0.5); }
        html.dark .bg-white { background-color: #334155; }
        html.dark .bg-white .text-sm { color: #cbd5e1; }
        html.dark .border-slate-200:hover { border-color: rgba(16, 185, 129, 0.6); }
        .theme-toggle { cursor: pointer; transition: all 0.3s ease; color: #64748b; }
        html.dark .theme-toggle { color: #cbd5e1; }
        .theme-toggle:hover { transform: rotate(20deg); }
      `}</style>
    </div>
  )
}

export default LandingPage
