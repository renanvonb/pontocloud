import { AlertTriangle, Clock3, EyeOff, FileWarning, ShieldAlert } from 'lucide-react'

const items = [
  {
    icon: Clock3,
    number: '01',
    title: 'Fechamento de folha sem atraso',
    description:
      'O sistema consolida marcações, horas extras, banco de horas e ausências em uma visão clara por colaborador. O fechamento que levava dias passa a levar horas.',
  },
  {
    icon: AlertTriangle,
    number: '02',
    title: 'Operação simples para qualquer nível',
    description:
      'Interface desenhada para quem usa todos os dias. Sem treinamento extenso, sem dependência de TI para ajustes rotineiros. Gestores, DP e colaboradores operam com independência.',
  },
  {
    icon: EyeOff,
    number: '03',
    title: 'Visibilidade total da jornada',
    description:
      'Atrasos, ausências, horas extras e solicitações em aberto aparecem em tempo real. Decisões chegam na hora certa, não dias depois do ocorrido.',
  },
  {
    icon: FileWarning,
    number: '04',
    title: 'Conformidade trabalhista protegida',
    description:
      'Relatórios fiscais gerados automaticamente: AFD, AEJ, espelho de ponto e atestado REP-P. A empresa fica preparada para auditorias sem esforço extra.',
  },
  {
    icon: ShieldAlert,
    number: '05',
    title: 'Rastreabilidade em cada ajuste',
    description:
      'Toda correção manual fica registrada com data, hora e responsável. Auditorias internas e externas têm um histórico confiável para consultar a qualquer momento.',
  },
]

export default function ProblemV2() {
  return (
    <section id="beneficios" className="relative z-20 bg-white pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-16 reveal">
          <h2 className="text-[28px] md:text-[42px] leading-tight font-normal tracking-[-0.03em] font-[family-name:var(--font-geist-sans)]">
            Registro e controle de ponto eficiente para uma rotina descomplicada
          </h2>
        </div>

        {/* Row — 5 cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.number} className="reveal bg-[#f5f6f8] rounded-2xl p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-10 shrink-0" style={{ boxShadow: '2px 4px 8px rgba(0,0,0,0.06)' }}>
                  <Icon size={22} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-normal tracking-[-0.02em] mb-2 font-[family-name:var(--font-geist-sans)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-inter tracking-[-0.01em]">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
