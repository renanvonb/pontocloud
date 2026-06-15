'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const estados = [
  { uf: 'AC', nome: 'Acre' }, { uf: 'AL', nome: 'Alagoas' }, { uf: 'AM', nome: 'Amazonas' },
  { uf: 'AP', nome: 'Amapá' }, { uf: 'BA', nome: 'Bahia' }, { uf: 'CE', nome: 'Ceará' },
  { uf: 'DF', nome: 'Distrito Federal' }, { uf: 'ES', nome: 'Espírito Santo' }, { uf: 'GO', nome: 'Goiás' },
  { uf: 'MA', nome: 'Maranhão' }, { uf: 'MG', nome: 'Minas Gerais' }, { uf: 'MS', nome: 'Mato Grosso do Sul' },
  { uf: 'MT', nome: 'Mato Grosso' }, { uf: 'PA', nome: 'Pará' }, { uf: 'PB', nome: 'Paraíba' },
  { uf: 'PE', nome: 'Pernambuco' }, { uf: 'PI', nome: 'Piauí' }, { uf: 'PR', nome: 'Paraná' },
  { uf: 'RJ', nome: 'Rio de Janeiro' }, { uf: 'RN', nome: 'Rio Grande do Norte' }, { uf: 'RO', nome: 'Rondônia' },
  { uf: 'RR', nome: 'Roraima' }, { uf: 'RS', nome: 'Rio Grande do Sul' }, { uf: 'SC', nome: 'Santa Catarina' },
  { uf: 'SE', nome: 'Sergipe' }, { uf: 'SP', nome: 'São Paulo' }, { uf: 'TO', nome: 'Tocantins' },
]

export default function CTABanner() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function maskPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 10) {
      return digits
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
    }
    return digits
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
  }
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  const [cidades, setCidades] = useState<string[]>([])
  const [loadingCidades, setLoadingCidades] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!estado) { setCidades([]); return }
    setLoadingCidades(true)
    setCidade('')
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios?orderBy=nome`)
      .then((r) => r.json())
      .then((data: { nome: string }[]) => setCidades(data.map((m) => m.nome)))
      .finally(() => setLoadingCidades(false))
  }, [estado])
  const [submitted, setSubmitted] = useState(false)
  const [hovered, setHovered] = useState(false)

  function slideText(text: string) {
    return (
      <span style={{ display: 'block', height: '1.3em', overflow: 'hidden', lineHeight: '1.3' }}>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
      </span>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && phone && estado && cidade) {
      setSubmitted(true)
    }
  }

  return (
    <section id="revenda" className="py-10 md:py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 0% 100%, rgba(14,165,233,0.75) 0%, transparent 100%), radial-gradient(ellipse 55% 50% at 100% 0%, rgba(14,165,233,0.40) 0%, transparent 100%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        <div className="lg:col-span-7 text-left reveal text-white flex flex-col justify-center px-4 lg:px-0">
          <h2 className="text-[20px] xs:text-[26px] md:text-[clamp(34px,_4.4vw,_56px)] leading-[1.05] font-normal tracking-[-0.03em] mb-6 font-[family-name:var(--font-geist-sans)] text-center lg:text-left">
            <span className="lg:hidden">Torne-se uma revenda<br /><span style={{ color: '#0EA5E9' }}>PontoCloud®</span></span>
            <span className="hidden lg:inline">Torne-se<br />uma revenda<br /><span style={{ color: '#0EA5E9' }}>PontoCloud®</span></span>
          </h2>
          <p className="text-white/70 text-sm lg:text-lg mb-8 leading-relaxed font-[family-name:var(--font-geist-sans)] text-center lg:text-left">
            Oferte soluções completas com recursos<br className="hidden lg:block" /> de ponta a seus clientes e construa uma receita<br className="hidden lg:block" /> recorrente com o suporte da nossa equipe.
          </p>
          <ul className="space-y-4 text-white/90">
            {[
              'Comissões recorrentes por cliente ativo',
              'Suporte e treinamento dedicados',
              'Material de vendas e apoio comercial',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm lg:text-base font-[family-name:var(--font-geist-sans)]">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 reveal flex flex-col">
          <div className="flex-1 rounded-2xl bg-white p-6 md:p-8 flex flex-col">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center flex-1 py-12">
                <h3 className="text-2xl font-medium mb-3 font-[family-name:var(--font-geist-sans)]">Recebemos seu contato!</h3>
                <p className="text-muted-foreground font-[family-name:var(--font-geist-sans)] max-w-xs leading-relaxed">
                  Agradecemos seu interesse. Nossa equipe comercial entrará em contato com você em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-4">
                <h3 className="text-xl font-medium mb-2 font-[family-name:var(--font-geist-sans)]">Preencha o formulário</h3>
                <div className="space-y-1.5">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-[65fr_35fr]">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="seuemail@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Contato</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(maskPhone(e.target.value))}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-[56px_1fr] gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="estado">Estado</Label>
                    <Select
                      value={estado}
                      onValueChange={(v) => { setEstado(v); setCidade('') }}
                    >
                      <SelectTrigger id="estado">
                        <SelectValue placeholder="UF" />
                      </SelectTrigger>
                      <SelectContent>
                        {estados.map((e) => (
                          <SelectItem key={e.uf} value={e.uf}>{e.uf}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="cidade">Cidade</Label>
                    <Select
                      value={cidade}
                      onValueChange={setCidade}
                      disabled={!estado || loadingCidades}
                    >
                      <SelectTrigger id="cidade">
                        <SelectValue placeholder={!estado ? 'Selecione o estado' : loadingCidades ? 'Carregando...' : 'Selecione a cidade'} />
                      </SelectTrigger>
                      <SelectContent>
                        {cidades.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Mensagem</Label>
                  <textarea
                    id="message"
                    placeholder="Digite uma mensagem."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none font-inter"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full text-[16px] h-auto py-[12px] px-[16px] font-medium font-inter mt-auto"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {slideText('Fale conosco')}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
