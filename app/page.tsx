import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ProgramsPreview from '@/components/ProgramsPreview'
import PublicationsPreview from '@/components/PublicationsPreview'
import ResearchersPreview from '@/components/ResearchersPreview'
import CTA from '@/components/CTA'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'CEIS — Home',
  description: 'Center of Eastern Indonesian Studies — Building People, Strengthening Academic Traditions, Shaping the Future of Eastern Indonesia.'
}

export default function Home(){
  return (
    <>
      <Hero />
      <Features />
      <ProgramsPreview />
      <PublicationsPreview />
      <ResearchersPreview />
      <CTA />
      <Newsletter />
      <Footer />
    </>
  )
}
