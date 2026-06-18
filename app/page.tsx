import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}
