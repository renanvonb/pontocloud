'use client'

import { useScrollReveal } from '@/components/useScrollReveal'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import Problem from '@/components/Problem'
import ProblemV2 from '@/components/ProblemV2'
import ValueProposition from '@/components/ValueProposition'
import FeatureRows from '@/components/FeatureRows'
import CTABanner from '@/components/CTABanner'
import FAQ from '@/components/FAQ'
import Planos from '@/components/Planos'
import Footer from '@/components/Footer'

export default function Home() {
  useScrollReveal()

  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Clients />
      <hr className="border-border" />
      {/* Recursos */}
      <ProblemV2 />
      {/* Benefícios */}
      <ValueProposition />
      <Problem />
      <FeatureRows />
      {/* Dúvidas */}
      <FAQ />
      {/* Planos */}
      <Planos />
      {/* Revenda */}
      <CTABanner />
      <Footer />
    </main>
  )
}
