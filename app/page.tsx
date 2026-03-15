import Hero from '@/components/homepage-01/Hero'
import Portfolio from '@/components/homepage-01/Portfolio'
import WorkExperience from '@/components/homepage-01/WorkExperience'
import About from '@/components/shared/About'
import Community from '@/components/shared/Community'
import CTA from '@/components/shared/CTA'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import ServicesV8 from '@/components/shared/ServicesV8'

export const metadata = {
  title: 'Svash | Front-end Developer',
  description:
    'Sergij Vashkevych — Front-end Developer with 4+ years of experience. React, Next.js, TypeScript, GSAP, Tailwind.',
}

const Home = () => {
  return (
    <LayoutOne>
      <Hero />
      <About />
      <WorkExperience />
      <Portfolio />
      <ServicesV8 />
      <Community />
      <FAQ />
      <CTA buttonText="Get in Touch">
        Let&apos;s build something
        <br />
        <i className="font-instrument italic">great</i> together.
      </CTA>
    </LayoutOne>
  )
}

export default Home
