'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const heroSection = ref.current?.closest('section')
    if (heroSection) {
      const elements = heroSection.querySelectorAll('.reveal, .reveal-down, .reveal-slow')
      const delays = [80, 150]
      elements.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), delays[i] ?? 600 + i * 200)
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative pt-[128px] md:pt-[152px] bg-white"
      style={{ minHeight: 'auto' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none hero-bg-zoom"
        style={{ backgroundImage: 'url(/imgs/bg-hero-v4.png)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-[1]" />
      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-[26px] xs:text-[32px] md:text-[clamp(40px,_5vw,_64px)] font-medium text-black leading-[1.05] tracking-[-0.02em] mb-6">
          Conectando
          <br />
          seu tempo ao<br className="md:hidden" /> futuro
        </h1>

        <p className="text-foreground/60 text-[16px] md:text-[18px] font-inter tracking-[-0.01em] max-w-xl mx-auto leading-relaxed mb-12 md:mb-[88px]">
          Conte com a tecnologia e assertividade da PontoCloud®
          {' '}para elevar o patamar da empresa para atingir o próximo nível.
        </p>
      </div>

      <div className="reveal-slow max-w-[1000px] mx-auto px-6 relative z-10 -mb-16 md:-mb-32">
        <div
          className="transition-transform [transition-duration:400ms] ease-out"
          style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
        >
          <div className="relative">
            <Image
              src="/imgs/dashboard-pontocloud.svg"
              alt="Interface do PontoCloud com dashboard de controle de ponto"
              width={1400}
              height={900}
              className="w-full h-auto rounded-[12px] ring-[4px] ring-white/20"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 md:h-72 bg-gradient-to-t from-white/50 md:from-white via-white/10 md:via-white/60 to-transparent pointer-events-none rounded-b-[12px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
