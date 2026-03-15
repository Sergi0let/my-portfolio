import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const Community = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="text-center">
          <TextAppearAnimation>
            <h2 className="text-appear mb-12 md:mb-20">
              Let&apos;s <span className="font-instrument italic">connect.</span>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <RevealWrapper className="col-span-full flex flex-col items-start justify-between gap-y-8 border p-6 dark:border-dark md:flex-row md:items-center md:p-10">
            <div>
              <div className="rv-badge mb-4">
                <span className="rv-badge-text">GitHub</span>
              </div>
              <h3 className="mb-4 leading-[1.2] tracking-[-1.08px] lg:text-4xl">
                Check out my code <br />
                on GitHub
              </h3>
              <p className="mb-8 max-w-sm opacity-60">
                Source code of pet projects, experiments, and open-source contributions.
              </p>
              <Link
                href="https://github.com/Sergi0let"
                target="_blank"
                className="rv-button rv-button-secondary block w-full text-center max-md:mx-auto md:inline-block md:w-auto">
                <div className="rv-button-top">
                  <span>Open GitHub</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Open GitHub</span>
                </div>
              </Link>
            </div>
            <div className="flex h-32 w-32 items-center justify-center border dark:border-dark md:h-40 md:w-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          </RevealWrapper>

          <RevealWrapper className="col-span-full border pb-10 pt-10 text-center dark:border-dark md:col-span-6 md:pb-[60px]">
            <div className="rv-badge">
              <span className="rv-badge-text">LinkedIn</span>
            </div>
            <h3 className="my-5 text-[25px] leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
              Professional <br className="hidden md:block" />
              Network
            </h3>
            <Link
              href="https://www.linkedin.com/in/s-vashkevych"
              target="_blank"
              className="rv-button rv-button-secondary block w-[90%] max-md:mx-auto md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Connect on LinkedIn</span>
              </div>
              <div className="rv-button-bottom">
                <span>Connect on LinkedIn</span>
              </div>
            </Link>
          </RevealWrapper>

          <RevealWrapper className="col-span-full border pb-10 pt-10 text-center dark:border-dark md:col-span-6 md:pb-[60px]">
            <div className="rv-badge">
              <span className="rv-badge-text">Telegram</span>
            </div>
            <h3 className="my-5 text-[25px] leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
              Drop me <br />a message
            </h3>
            <Link
              href="https://t.me/serg_v6"
              target="_blank"
              className="rv-button rv-button-secondary block w-[90%] max-md:mx-auto md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Write on Telegram</span>
              </div>
              <div className="rv-button-bottom">
                <span>Write on Telegram</span>
              </div>
            </Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default Community
