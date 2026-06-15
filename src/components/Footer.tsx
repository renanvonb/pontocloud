'use client'

import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import Logo from './Logo'
import { Separator } from '@/components/ui/separator'

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function LegalDialog({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-xs md:text-sm text-muted-foreground font-inter hover:text-foreground transition-colors cursor-pointer">
          {title}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 md:p-10 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-xl font-medium tracking-[-0.02em] font-[family-name:var(--font-geist-sans)]">
              {title}
            </Dialog.Title>
            <Dialog.Close className="rounded-lg p-2 opacity-50 hover:opacity-100 hover:bg-muted transition-all focus:outline-none">
              <X className="h-6 w-6" />
              <span className="sr-only">Fechar</span>
            </Dialog.Close>
          </div>
          <div className="overflow-y-auto max-h-[60vh] pr-2 text-sm md:text-[16px] font-normal text-muted-foreground font-inter leading-relaxed [&_strong]:font-normal [&_strong]:text-foreground">
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-10 pb-10 md:pt-16 md:pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 pb-12">
          <div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
              <Logo />
            </button>
            <p className="text-muted-foreground text-sm mt-4 mb-6 max-w-xs leading-relaxed font-inter">
              Seu aliado completo para simplificar a rotina de registro e controle de ponto da sua empresa.
            </p>
            <div className="flex gap-3">
              <span className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <WhatsAppIcon />
              </span>
              <span className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <InstagramIcon />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-4 md:flex md:justify-start md:gap-24">
            <div>
              <h5 className="text-xs md:text-sm font-medium font-inter mb-4">Páginas</h5>
              <ul className="flex flex-col gap-3">
                <li><a href="#beneficios" className="text-xs md:text-sm text-muted-foreground font-inter hover:text-foreground transition-colors">Benefícios</a></li>
                <li><a href="#recursos" className="text-xs md:text-sm text-muted-foreground font-inter hover:text-foreground transition-colors">Recursos</a></li>
                <li><a href="#duvidas" className="text-xs md:text-sm text-muted-foreground font-inter hover:text-foreground transition-colors">Dúvidas</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs md:text-sm font-medium font-inter mb-4">Informação</h5>
              <ul className="flex flex-col gap-3">
                <li><a href="#revenda" className="text-xs md:text-sm text-muted-foreground font-inter hover:text-foreground transition-colors">Seja uma revenda</a></li>
                <li>
                  <LegalDialog title="Termos de uso">
                    <div className="space-y-5">
                      {[
                        ['1. Aceitação dos Termos', 'Ao acessar ou utilizar a plataforma PontoCloud®, você concorda com estes Termos de Uso. Se não concordar, não utilize o serviço.'],
                        ['2. Descrição do Serviço', 'A PontoCloud® é uma plataforma de controle de ponto eletrônico voltada para pequenas e médias empresas brasileiras. O serviço inclui registro de jornada, apuração, relatórios fiscais e gestão de colaboradores.'],
                        ['3. Cadastro e Responsabilidades', 'O contratante é responsável pela veracidade das informações cadastradas, pelo sigilo das credenciais de acesso e pela utilização adequada da plataforma por seus colaboradores e gestores.'],
                        ['4. Uso Permitido', 'O serviço destina-se exclusivamente ao controle de jornada de trabalho em conformidade com a legislação trabalhista brasileira (CLT e Portaria MTE nº 671/2021). É vedado o uso para fins ilícitos ou que violem direitos de terceiros.'],
                        ['5. Pagamento e Cancelamento', 'Os planos são cobrados mensalmente. O cancelamento pode ser solicitado a qualquer momento e terá efeito ao final do período vigente, sem reembolso proporcional.'],
                        ['6. Disponibilidade', 'A PontoCloud® empenha esforços para manter a plataforma disponível 24/7, mas não garante disponibilidade ininterrupta. Manutenções programadas serão comunicadas com antecedência.'],
                        ['7. Limitação de Responsabilidade', 'A PontoCloud® não se responsabiliza por danos decorrentes de uso indevido da plataforma, falhas de conexão do contratante ou ações de terceiros não autorizados.'],
                        ['8. Alterações', 'Estes termos podem ser atualizados a qualquer momento. Notificaremos os usuários por e-mail com antecedência mínima de 15 dias antes de alterações relevantes.'],
                        ['9. Foro', 'Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer controvérsias oriundas destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.'],
                      ].map(([title, body]) => (
                        <div key={title}><p className="text-foreground mb-1">{title}</p><p>{body}</p></div>
                      ))}
                    </div>
                  </LegalDialog>
                </li>
                <li>
                  <LegalDialog title="Polít. de privacidade">
                    <div className="space-y-5">
                      {[
                        ['1. Responsável pelo Tratamento', 'A PontoCloud® é a controladora dos dados pessoais coletados por meio de sua plataforma, comprometendo-se com o tratamento responsável conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).'],
                        ['2. Dados Coletados', 'Coletamos dados de cadastro da empresa contratante (razão social, CNPJ, e-mail, telefone), dados dos colaboradores inseridos pelo contratante (nome, CPF, horários de trabalho, registros de ponto) e dados de acesso e navegação na plataforma.'],
                        ['3. Finalidade do Tratamento', 'Os dados são utilizados exclusivamente para: prestação do serviço de controle de ponto; geração de relatórios fiscais exigidos pela legislação trabalhista; comunicações relacionadas ao serviço; e melhoria contínua da plataforma.'],
                        ['4. Compartilhamento de Dados', 'Não vendemos nem compartilhamos dados pessoais com terceiros para fins comerciais. Podemos compartilhar com prestadores de serviços essenciais à operação da plataforma (hospedagem, infraestrutura), sempre sob obrigação de confidencialidade.'],
                        ['5. Segurança', 'Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda ou destruição, incluindo criptografia em trânsito (TLS) e em repouso, controle de acesso por perfis e monitoramento contínuo.'],
                        ['6. Retenção de Dados', 'Os dados são mantidos pelo período contratual e por até 5 anos após o encerramento, conforme exigências fiscais e trabalhistas brasileiras. Após esse prazo, são anonimizados ou excluídos.'],
                        ['7. Direitos do Titular', 'Nos termos da LGPD, os titulares podem solicitar: confirmação de tratamento, acesso aos dados, correção, portabilidade, eliminação e revogação de consentimento. Solicitações devem ser enviadas para privacidade@pontocloud.com.br.'],
                        ['8. Cookies', 'Utilizamos cookies essenciais para funcionamento da plataforma e cookies analíticos para entender o uso do serviço. Não utilizamos cookies de rastreamento para fins publicitários.'],
                        ['9. Alterações nesta Política', 'Esta política pode ser atualizada para refletir mudanças legais ou melhorias no serviço. Informaremos os usuários por e-mail em caso de alterações relevantes.'],
                      ].map(([title, body]) => (
                        <div key={title}><p className="text-foreground mb-1">{title}</p><p>{body}</p></div>
                      ))}
                    </div>
                  </LegalDialog>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs md:text-sm font-medium font-inter mb-4">Acessos</h5>
              <ul className="flex flex-col gap-3">
                <li><a href="https://app.dev.ponto.cloud/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground font-inter hover:text-foreground transition-colors">Área do cliente</a></li>
                <li><a href="https://revendas.dev.ponto.cloud/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground font-inter hover:text-foreground transition-colors">Área de revenda</a></li>
                <li><a href="https://admin.dev.ponto.cloud/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground font-inter hover:text-foreground transition-colors">Área administrativa</a></li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="mb-8 -ml-6 w-[calc(100%+3rem)]" />

        <p className="text-xs md:text-sm text-muted-foreground font-inter text-center">
          © PontoCloud® 2026. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
