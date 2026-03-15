import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-[137px] md:pb-[100px] md:pt-[160px] xl:pt-[180px]">
      <HeroGradientAnimation />
      <div className="container">
        <RevealWrapper className="text-center">
          <div className="rv-badge mb-5 md:mb-10">
            <span className="rv-badge-text">Hey, glad you stopped by 👋</span>
          </div>
          <h1 className="mb-7 xl:mb-8">
            Sergij
            <br />
            <i className="font-instrument italic">Vashkevych</i>
          </h1>
          <p className="mx-auto mb-3 max-w-xl text-lg font-medium uppercase tracking-[3px] opacity-60 md:mb-5 lg:max-w-[750px]">
            Software Developer
          </p>
          <p className="mx-auto mb-10 max-w-xl md:mb-14 lg:max-w-[700px] xl:mb-[76px]">
            4+ years turning ideas into fast, scalable web products. React & Next.js on the frontend, Node.js on the
            backend, TypeScript throughout — clean architecture, smooth animations, real results.
          </p>

          <ul className="flex list-none flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <li className="mx-auto block w-[90%] md:ml-auto md:mr-0 md:inline-block md:w-auto">
              <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
                <div className="rv-button-top">
                  <span>Hire Me</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Hire Me</span>
                </div>
              </Link>
            </li>

            <li className="mx-auto block w-[90%] md:ml-0 md:mr-auto md:inline-block md:w-auto">
              <Link href="/design-agency" className="rv-button rv-button-white block md:inline-block">
                <div className="rv-button-top">
                  <span>View Projects</span>
                </div>
                <div className="rv-button-bottom">
                  <span>View Projects</span>
                </div>
              </Link>
            </li>
          </ul>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Hero
