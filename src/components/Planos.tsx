'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Planos() {
  const [hovered, setHovered] = useState(false)

  function slideText(text: string) {
    return (
      <span style={{ display: 'block', height: '1.3em', overflow: 'hidden', lineHeight: '1.3' }}>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
      </span>
    )
  }

  return (
    <section id="planos" className="pb-12 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal rounded-2xl overflow-hidden relative flex items-end min-h-[320px] md:min-h-[500px]" style={{ background: 'linear-gradient(to right, #1AAFE8 0%, #0284C7 100%)' }}>
          {/* Left content */}
          <div className="relative z-10 px-6 md:px-12 pt-10 md:pt-16 pb-8 md:pb-12 flex flex-col justify-between self-stretch w-full md:w-[calc(32%+32px)]">
            <div className="reveal flex flex-col gap-4">
              <h2 className="text-[32px] md:text-[56px] leading-[1.05] font-normal tracking-[-0.03em] text-white font-[family-name:var(--font-geist-sans)]">
                <span className="md:hidden">Valores que<br />cabem no seu bolso</span>
                <span className="hidden md:inline">Valores<br />que cabem<br />no seu bolso</span>
              </h2>
              <p className="text-white/70 font-inter text-sm md:text-[17px] leading-relaxed">
                Pague só pelo que usa.<br />Sem surpresas na fatura, sem licenças desperdiçadas.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '150ms' }}>
              <Button
                className="w-full text-[16px] h-auto py-[12px] px-[24px] font-medium font-inter bg-white text-foreground hover:bg-white/90"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                asChild
              >
                <a href="#revenda">{slideText('Fale com a nossa equipe')}</a>
              </Button>
            </div>
          </div>

          {/* Dashboard — vaza no topo, cortado na direita e base */}
          <div className="reveal-right absolute bottom-0 w-[68%] pointer-events-none hidden md:block" style={{ top: '40px', right: '-80px' }}>
            <div className="relative">
              <img
                src="/imgs/dashboard-pontocloud.svg"
                alt="Dashboard PontoCloud"
                className="w-full h-auto rounded-tl-[12px]"
              style={{ border: '2px solid rgba(255,255,255,0.10)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}
              />
              <div className="absolute inset-0 rounded-tl-[12px]" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(1,78,128,0.30) 100%)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
