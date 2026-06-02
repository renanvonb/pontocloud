'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, LogIn, X } from 'lucide-react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Seja uma revenda', href: '#revenda' },
]

const NAVBAR_HEIGHT = 80

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4)
}

function smoothScrollTo(targetY: number) {
  const startY = window.scrollY
  const distance = targetY - startY
  const duration = Math.min(Math.max(Math.abs(distance) * 0.15, 150), 400)
  let startTime: number | null = null

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * easeOutQuart(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const target = document.getElementById(id)
  if (!target) return
  const targetY = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
  smoothScrollTo(targetY)
}

function scrollToTop() {
  smoothScrollTo(0)
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  function slideText(text: string, key: string) {
    const hovered = hoveredBtn === key
    return (
      <span style={{ display: 'block', height: '1.3em', overflow: 'hidden', lineHeight: '1.3' }}>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
      </span>
    )
  }

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setScrollY(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out pt-1 pb-1',
        'bg-white/40 shadow-sm backdrop-blur-md md:shadow-none md:backdrop-blur-none md:bg-transparent',
        scrolled ? 'md:bg-white/60 md:shadow-sm md:backdrop-blur-md' : '',
        mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}
    >
      <nav className="relative max-w-7xl mx-auto px-6 h-[72px] flex items-center">
        <div className="flex items-center">
          <button onClick={scrollToTop} className="cursor-pointer">
            <Logo />
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-[4px] absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollToSection(l.href)}
                className={`inline-flex items-center text-[16px] font-normal font-inter transition-all py-[12px] px-[16px] rounded-md cursor-pointer ${
                  scrolled
                    ? 'text-foreground hover:text-black'
                    : 'text-foreground hover:bg-white/20 hover:backdrop-blur-md'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex items-center justify-end gap-3">
          <Button
            variant="ghost"
            onMouseEnter={() => setHoveredBtn('revenda')}
            onMouseLeave={() => setHoveredBtn(null)}
            className="hidden md:inline-flex text-[16px] h-auto py-[12px] px-[16px] font-medium font-inter text-foreground hover:text-foreground border-0 backdrop-blur-md"
            style={{ backgroundColor: `rgba(255,255,255,${Math.max(0, 0.20 - scrollY / 400)})`, transition: 'background-color 0.4s ease' }}
            asChild
          >
            <a href="https://revendas.dev.ponto.cloud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <LogIn className="h-4 w-4 shrink-0" />
              {slideText('Área da revenda', 'revenda')}
            </a>
          </Button>
          <Button
            className="hidden md:inline-flex text-[16px] h-auto py-[12px] px-[16px] font-medium font-inter"
            onMouseEnter={() => setHoveredBtn('acessar')}
            onMouseLeave={() => setHoveredBtn(null)}
            asChild
          >
            <a href="https://app.dev.ponto.cloud/" target="_blank" rel="noopener noreferrer">
              {slideText('Acessar', 'acessar')}
            </a>
          </Button>

          <button className="md:hidden relative w-9 h-9 flex items-center justify-center" aria-label="Abrir menu" onClick={() => setSheetOpen(!sheetOpen)}>
            <Menu className={cn('h-5 w-5 absolute transition-all duration-200', sheetOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100')} />
            <X className={cn('h-5 w-5 absolute transition-all duration-200', sheetOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75')} />
          </button>
        </div>
      </nav>
    </header>

    {/* Backdrop */}
    {sheetOpen && (
      <div className="fixed inset-0 z-40 md:hidden" onClick={() => setSheetOpen(false)} />
    )}

    {/* Floating glass menu */}
    <div
      className={cn(
        'fixed top-[100px] left-6 right-6 z-50 md:hidden rounded-2xl bg-white/40 shadow-sm backdrop-blur-md overflow-hidden transition-all duration-300',
        sheetOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
      )}
    >
      <div className="flex flex-col p-4 gap-1">
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => { scrollToSection(l.href); setSheetOpen(false) }}
            className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors text-center py-3 rounded-xl hover:bg-black/5"
          >
            {l.label}
          </button>
        ))}
        <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-black/5">
          <Button variant="ghost" size="lg" className="w-full font-normal text-foreground hover:text-foreground" asChild>
            <a href="https://revendas.dev.ponto.cloud/" target="_blank" rel="noopener noreferrer" onClick={() => setSheetOpen(false)}>
              <LogIn className="h-4 w-4 mr-2 shrink-0" />
              Área da revenda
            </a>
          </Button>
          <Button size="lg" className="w-full font-normal" asChild>
            <a href="https://app.dev.ponto.cloud/" target="_blank" rel="noopener noreferrer" onClick={() => setSheetOpen(false)}>Acessar</a>
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}
