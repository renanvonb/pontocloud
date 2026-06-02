'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Clock,
  MessageSquare,
  AlertCircle,
  CalendarDays,
  History,
  FileCheck,
  BarChart2,
  TrendingUp,
  TrendingDown,
  Bell,
  Users,
  SlidersHorizontal,
  Download,
  Building2,
} from 'lucide-react'

const webFeatures = [
  { icon: BarChart2, label: 'Dashboard' },
  { icon: SlidersHorizontal, label: 'Apuração de ponto' },
  { icon: Users, label: 'Gestão de equipe' },
  { icon: FileCheck, label: 'Relatórios fiscais' },
  { icon: TrendingUp, label: 'Banco de horas' },
  { icon: MessageSquare, label: 'Solicitações' },
  { icon: AlertCircle, label: 'Ocorrências' },
  { icon: Download, label: 'Exportações' },
  { icon: Bell, label: 'Alertas' },
  { icon: Building2, label: 'Multi-unidades' },
]

const features = [
  { icon: Clock, label: 'Registro de ponto' },
  { icon: History, label: 'Histórico de registros' },
  { icon: MessageSquare, label: 'Solicitações' },
  { icon: AlertCircle, label: 'Ocorrências' },
  { icon: FileCheck, label: 'Comprovantes' },
  { icon: CalendarDays, label: 'Espelhos de ponto' },
  { icon: BarChart2, label: 'Banco de horas' },
  { icon: TrendingUp, label: 'Horas extras' },
  { icon: TrendingDown, label: 'Horas falta' },
  { icon: Bell, label: 'Notificações' },
]

const tabs = [
  {
    label: 'Aplicativo mobile',
    title: 'Aplicativo mobile',
    description: 'O ponto de contato diário\ndo colaborador com a jornada',
  },
  {
    label: 'Aplicativo Web',
    title: 'Aplicativo web',
    description: 'Controle centralizado para sua equipe acompanhar, tratar e fechar ponto',
  },
]

export default function Problem() {
  const [active, setActive] = useState(0)
  const [hoveredTab, setHoveredTab] = useState<number | null>(null)
  const blockRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!blockRef.current || !parallaxRef.current) return
      const rect = blockRef.current.getBoundingClientRect()
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      const scale = 1 + Math.max(0, Math.min(progress, 1)) * 0.14
      parallaxRef.current.style.transform = `scale(${scale})`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="recursos" className="relative z-20 py-24 bg-[#f5f6f8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section title */}
        <div className="max-w-2xl mx-auto text-center reveal mb-8">
          <h2 className="text-[28px] md:text-[42px] leading-tight font-normal tracking-[-0.03em] mb-0 font-[family-name:var(--font-geist-sans)]">
            Integração perfeita entre dispositivos
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 reveal">
          <div className="flex items-center gap-1 bg-foreground/5 border border-border rounded-lg p-1">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                onMouseEnter={() => setHoveredTab(i)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`text-[16px] font-medium font-inter py-[12px] px-[16px] rounded-md transition-all duration-300 ${
                  i === active
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span style={{ display: 'block', height: '1.3em', overflow: 'hidden', lineHeight: '1.3' }}>
                  <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hoveredTab === i ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{tab.label}</span>
                  <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hoveredTab === i ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{tab.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Image block */}
        <div ref={blockRef} className="relative reveal rounded-xl overflow-hidden h-[420px] md:h-[700px]">

          {/* Wrapper parallax */}
          <div
            ref={parallaxRef}
            className="absolute inset-0"
            style={{ transformOrigin: 'center center' }}
          >
            {/* Slide mobile */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/imgs/app-mobile.png)',
                backgroundSize: '120%',
                backgroundPosition: '-20% 52%',
                transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                transform: active === 0 ? 'translateX(0%)' : 'translateX(-100%)',
              }}
            />
            {/* Slide web */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/imgs/img-mac.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                transform: active === 1 ? 'translateX(0%)' : 'translateX(100%)',
              }}
            />
          </div>

          {/* Degradê esquerda para disfarçar corte */}
          <div className="absolute inset-y-0 left-0 w-[160px] md:w-[280px] pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)' }} />

          {/* Título com track vertical — "Aplicativo" parece estático */}
          <div className="absolute top-5 left-5 md:top-8 md:left-8 w-[240px] md:w-[360px]" style={{ height: '40px', overflow: 'hidden' }}>
            <div style={{
              transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
              transform: `translateY(${active === 0 ? '0px' : '-40px'})`,
            }}>
              <h3 className="text-white text-[20px] md:text-[32px] leading-[40px] font-normal tracking-[-0.03em] font-[family-name:var(--font-geist-sans)] whitespace-nowrap">
                Aplicativo mobile
              </h3>
              <h3 className="text-white text-[20px] md:text-[32px] leading-[40px] font-normal tracking-[-0.03em] font-[family-name:var(--font-geist-sans)] whitespace-nowrap">
                Aplicativo web
              </h3>
            </div>
          </div>

          {/* Painéis — descrição + cards (fade) */}
          {tabs.map((tab, i) => (
            <div
              key={tab.label + '-panel'}
              className="absolute left-5 md:left-8 bottom-4 md:bottom-8 w-[180px] md:w-[360px] flex flex-col"
              style={{
                top: '60px',
                opacity: i === active ? 1 : 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: i === active ? 'auto' : 'none',
              }}
            >
              <p className="text-white/70 text-sm md:text-xl leading-relaxed whitespace-pre-line font-[family-name:var(--font-geist-sans)] hidden md:block">
                {tab.description}
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1 mt-3 md:mt-6">
                {(i === 0 ? features : webFeatures).map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="relative flex flex-col justify-between bg-white/15 backdrop-blur-md rounded-lg px-4 py-4 cursor-default overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                    <Icon size={20} className="text-white/70 relative z-10" />
                    <span className="text-white/90 text-[14px] leading-snug font-[family-name:var(--font-geist-sans)] relative z-10">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
