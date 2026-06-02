import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PontoCloud®',
  description:
    'Ponto simples de registrar, fácil de tratar e rápido de fechar. Controle de ponto eletrônico para PMEs brasileiras.',
  icons: {
    icon: '/imgs/favicon-site-pontocloud.png',
  },
  openGraph: {
    title: 'PontoCloud®',
    description: 'Ponto simples de registrar, fácil de tratar e rápido de fechar.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
