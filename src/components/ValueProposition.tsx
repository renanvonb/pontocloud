'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const managerItems = [
  'Dashboard com visão imediata da equipe',
  'Apuração mensal por colaborador',
  'Ajustes de ponto com rastreabilidade',
  'Relatórios fiscais oficiais prontos para auditoria',
]

const employeeItems = [
  'Registro rápido pelo app ou pela web',
  'Solicitações digitais para ajustes',
  'Consulta de espelho e comprovantes',
  'Acompanhamento das próprias ocorrências',
]

export default function ValueProposition() {
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
    <section className="pt-10 pb-12 md:pt-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal rounded-2xl overflow-hidden relative md:min-h-[400px] flex flex-col" style={{ background: 'linear-gradient(to right, #1AAFE8 0%, #0284C7 100%)' }}>

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-12 items-end px-4 xs:px-6 md:px-12 pt-6 md:pt-12 flex-1">
            <div className="lg:col-span-4 reveal pb-0 lg:pb-12 flex flex-col self-stretch">
              <h2 className="text-[16px] xs:text-[20px] md:text-[clamp(22px,_2.5vw,_32px)] leading-tight font-normal tracking-[-0.03em] mb-5 font-[family-name:var(--font-geist-sans)] text-white">
                Simples para registrar.<br />Poderoso para tratar.
              </h2>
              <p className="text-white/70 text-sm md:text-lg leading-relaxed mb-0 md:mb-8 font-inter tracking-[-0.01em]">
                Sua equipe com acesso a uma ferramenta poderosa e intuitiva para registrar, apurar, corrigir e fechar o ponto com agilidade e segurança.
              </p>
              <Button
                className="font-inter text-[16px] h-auto py-[12px] px-[16px] font-medium bg-white text-foreground hover:bg-white/90 mt-auto w-full hidden lg:flex"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                asChild
              >
                <a href="#revenda">{slideText('Fale com a nossa equipe')}</a>
              </Button>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-4 self-stretch">
              <div className="reveal rounded-2xl md:rounded-b-none bg-white p-6 relative overflow-hidden h-full" style={{ transitionDelay: '100ms' }}>
                <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.06) 0%, transparent 100%)' }} />
                <h3 className="text-xl font-medium tracking-[-0.02em] mb-5 font-[family-name:var(--font-geist-sans)]">Para o gestor</h3>
                <ul className="space-y-4">
                  {managerItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal rounded-2xl md:rounded-b-none bg-foreground p-6 h-full" style={{ transitionDelay: '200ms' }}>
                <h3 className="text-xl font-medium tracking-[-0.02em] mb-5 font-[family-name:var(--font-geist-sans)] text-white">Para o colaborador</h3>
                <ul className="space-y-4">
                  {employeeItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-white/70 leading-relaxed font-[family-name:var(--font-geist-sans)]">
                      <CheckCircle2 size={18} className="text-sky-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile-only button below cards */}
          <div className="lg:hidden px-6 pb-6 pt-6">
            <Button
              className="font-inter text-[16px] h-auto py-[12px] px-[16px] font-medium bg-white text-foreground hover:bg-white/90 w-full"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              asChild
            >
              <a href="#revenda">{slideText('Fale com a nossa equipe')}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
