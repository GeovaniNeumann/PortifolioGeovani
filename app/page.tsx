'use client'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Portfolio } from '@/components/sections/Portfolio'
import { Contact } from '@/components/sections/Contact'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/ui/BackToTop'
import { FloatingButtons } from '@/components/ui/FloatingButtons'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <FloatingButtons />
    </>
  )
}