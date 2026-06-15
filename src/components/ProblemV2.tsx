import { AlertTriangle, Clock3, EyeOff, FileWarning, ShieldAlert } from 'lucide-react'

const items = [
  {
    icon: Clock3,
    number: '01',
    title: 'Fechamento de folha\nsem atraso',
    description:
      'O sistema consolida marcações, horas extras, banco de horas e ausências em uma visão clara por colaborador. O fechamento que levava dias passa a levar horas.',
  },
  {
    icon: AlertTriangle,
    number: '02',
    title: 'Operação simples\npara qualquer nível',
    description:
      'Interface desenhada para quem usa todos os dias. Sem treinamento extenso, sem dependência de TI para ajustes rotineiros. Gestores, DP e colaboradores operam com independência.',
  },
  {
    icon: EyeOff,
    number: '03',
    title: 'Visibilidade total\nda jornada',
    description:
      'Atrasos, ausências, horas extras e solicitações em aberto aparecem em tempo real. Decisões chegam na hora certa, não dias depois do ocorrido.',
  },
  {
    icon: FileWarning,
    number: '04',
    title: 'Conformidade trabalhista\nprotegida',
    description:
      'Relatórios fiscais gerados automaticamente: AFD, AEJ, espelho de ponto e atestado REP-P. A empresa fica preparada para auditorias sem esforço extra.',
  },
  {
    icon: ShieldAlert,
    number: '05',
    title: 'Rastreabilidade\nem cada ajuste',
    description:
      'Toda correção manual fica registrada com data, hora e responsável. Auditorias internas e externas têm um histórico confiável para consultar a qualquer momento.',
  },
]

export default function ProblemV2() {
  return (
    <section id="beneficios" className="relative z-20 bg-white pt-12 pb-0 md:pt-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-16 reveal">
          <h2 className="text-[18px] xs:text-[24px] md:text-[clamp(28px,_3.3vw,_42px)] leading-tight font-normal tracking-[-0.03em] font-[family-name:var(--font-geist-sans)]">
            <span className="md:hidden">Registro e controle de<br />ponto eficiente para uma<br />rotina descomplicada</span>
            <span className="hidden md:inline">Registro e controle de ponto eficiente para uma rotina descomplicada</span>
          </h2>
        </div>

        {/* Row — 5 cards: 3+2 at lg, 5-col at xl */}
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 gap-4">
          {items.map((item, index) => {
            const Icon = item.icon
            const lgColClasses = [
              'lg:col-start-1 lg:col-span-2 xl:col-start-auto xl:col-span-1',
              'lg:col-start-3 lg:col-span-2 xl:col-start-auto xl:col-span-1',
              'lg:col-start-5 lg:col-span-2 xl:col-start-auto xl:col-span-1',
              'lg:col-start-2 lg:col-span-2 xl:col-start-auto xl:col-span-1',
              'lg:col-start-4 lg:col-span-2 xl:col-start-auto xl:col-span-1',
            ]
            return (
              <div key={item.number} className={`reveal bg-[#f5f6f8] rounded-2xl p-6 md:p-7 flex flex-col gap-6 md:gap-0 hover:-translate-y-1 transition-transform duration-300 ${lgColClasses[index]}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shrink-0 md:mb-10" style={{ boxShadow: '1px 2px 4px rgba(0,0,0,0.04)' }}>
                    <Icon size={22} className="text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-normal tracking-[-0.02em] font-[family-name:var(--font-geist-sans)] md:mb-2">
                    {item.title.split('\n').map((line, i, arr) => (
                      <span key={i}>{line}{i < arr.length - 1 && <br className="md:hidden" />}</span>
                    ))}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-inter tracking-[-0.01em]">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
