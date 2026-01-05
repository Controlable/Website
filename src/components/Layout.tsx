import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import FloatingIcons from './FloatingIcons'
import Header from './Header'
import Footer from './Footer'

declare global {
  interface Window {
    lucide?: {
      createIcons?: () => void
    }
  }
}

const year = new Date().getFullYear()

export default function Layout() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [hash])

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

    const handleThemeToggle = () => {
      document.documentElement.classList.toggle('dark')
      sunIcon?.classList.toggle('hidden')
      moonIcon?.classList.toggle('hidden')
      const isDark = document.documentElement.classList.contains('dark')
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }

    themeToggle?.addEventListener('click', handleThemeToggle)

    // Scroll Animation Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.1
      }
    )

    // Observe elements after a short delay to ensure DOM is ready
    setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach((reveal) => observer.observe(reveal))
    }, 100)

    return () => {
      themeToggle?.removeEventListener('click', handleThemeToggle)
      observer.disconnect()
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
        <Outlet />
        <Footer year={year} />
      </div>
      {/* Styles for dark mode background override */}
      <style>{`
        [data-bg-root].dark, html.dark [data-bg-root] {
          background: linear-gradient(135deg, #0f172a 0%, #1a1f35 100%) !important;
        }
      `}</style>
    </div>
  )
}
