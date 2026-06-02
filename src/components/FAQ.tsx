import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Para quais empresas o PontoCloud foi pensado?',
    a: 'Para pequenas e médias empresas brasileiras que precisam controlar jornada em mais de uma unidade, departamento ou equipe, com uma experiência simples para colaboradores e clara para gestores.',
  },
  {
    q: 'O colaborador consegue acompanhar as próprias informações?',
    a: 'Sim. O colaborador pode consultar registros, solicitações, comprovantes, espelhos de ponto e ocorrências pela web ou pelo app, conforme as permissões configuradas.',
  },
  {
    q: 'Como funciona a apuração de ponto?',
    a: 'O gestor acompanha o resumo mensal por colaborador, acessa o ponto diário detalhado e aplica ajustes como mover marcações, alterar turno, ajustar banco de horas, registrar folgas e tratar solicitações.',
  },
]

export default function FAQ() {
  return (
    <section id="duvidas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal text-center mb-12">
            <h2 className="text-[28px] md:text-[42px] leading-tight font-normal tracking-[-0.03em] font-[family-name:var(--font-geist-sans)]">
              Dúvidas frequentes
            </h2>
          </div>
          <div className="reveal">
            <Accordion type="single" collapsible className="border-t border-border/40">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-b border-border/40 border-x-0 rounded-none">
                  <AccordionTrigger className="font-[family-name:var(--font-geist-sans)] font-normal text-[18px] tracking-[-0.02em] py-5 px-0 hover:no-underline data-[state=open]:font-medium justify-center text-center [&>svg]:hidden">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-muted-foreground leading-relaxed text-[15px] px-0 tracking-[-0.01em] text-center">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  )
}
