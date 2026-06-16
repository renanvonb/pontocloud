const tagClass = 'inline-flex items-center text-xs font-semibold font-[family-name:var(--font-geist-sans)] text-primary bg-primary/10 rounded-full px-3 py-1 tracking-[0.04em] uppercase'

export default function FeatureRows() {
  return (
    <section className="bg-[#f5f6f8] pt-2 pb-16 md:pb-16 lg:pt-0 lg:pb-16 xl:pb-[88px] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-12 reveal relative z-10">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">

          <div className="px-4 md:px-0 md:pr-8 lg:pr-16 pb-6 md:pb-0">
            <span className={`${tagClass} mb-5`}>Para o colaborador</span>
            <h3 className="text-[16px] xs:text-[20px] md:text-[clamp(24px,_3vw,_38px)] leading-tight font-normal tracking-[-0.03em] mb-5 font-[family-name:var(--font-geist-sans)]">
              Registro de ponto<br />simples e flexível com<br />acompanhamento completo
            </h3>
            <p className="text-muted-foreground text-sm lg:text-[17px] leading-relaxed font-inter tracking-[-0.01em]">
              Ponto via app ou web, solicitações digitais, espelhos e comprovantes — tudo acessível pelo colaborador sem depender de e-mails ou processos manuais.
            </p>
          </div>

          <div className="px-4 md:px-0 md:pl-8 lg:pl-16 pt-6 md:pt-0">
            <span className={`${tagClass} mb-5`}>Apuração e gestão</span>
            <h3 className="text-[16px] xs:text-[20px] md:text-[clamp(24px,_3vw,_38px)] leading-tight font-normal tracking-[-0.03em] mb-5 font-[family-name:var(--font-geist-sans)]">
              Apuração, tratamento<br />de marcações e fechamento<br />de folha com segurança
            </h3>
            <p className="text-muted-foreground text-sm lg:text-[17px] leading-relaxed font-inter tracking-[-0.01em]">
              Visualize marcações, corrija inconsistências e aplique ajustes com rastreabilidade total. O fechamento que levava dias passa a levar horas.
            </p>
          </div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to top, #dde0e4 0%, transparent 100%)' }} />
    </section>
  )
}
