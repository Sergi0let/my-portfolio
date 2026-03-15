'use client'
import useReveal from '@/hooks/useReveal'
import CircleTextAnimation from './CircleTextAnimation'

const About = () => {
  const { revealRef } = useReveal()

  return (
    <section className="relative overflow-hidden pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center lg:items-stretch lg:justify-normal">
          <CircleTextAnimation />
          <h3 className="mx-auto mt-[34px]" ref={revealRef}>
            I&apos;m Sergij — a web developer <br className="hidden sm:block" />
            with 4+ years of hands-on experience. <br />
            <br />
            I build full-stack products end-to-end: <br className="hidden sm:block" />
            from pixel-perfect React interfaces to Node.js backends, <br className="hidden sm:block" />
            using modern practices and AI-powered tools <br className="hidden sm:block" />
            to ship faster without cutting corners.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default About
