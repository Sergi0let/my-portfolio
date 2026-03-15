import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const techCategories = [
  {
    title: 'Core',
    items: ['HTML5 / CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'React Router', 'React Hooks', 'Redux Toolkit', 'Redux Saga'],
  },
  {
    title: 'Styling',
    items: ['Tailwind CSS', 'SCSS / Sass', 'shadcn/ui', 'DaisyUI', 'Styled Components'],
  },
  {
    title: 'Animation & 3D',
    items: ['GSAP', 'Three.js', 'React Three Fiber', 'Drei', 'Pixi.js', 'Swiper / Splide'],
  },
  {
    title: 'Data & API',
    items: ['REST', 'GraphQL', 'WebSockets', 'Axios', 'SWR', 'Zod', 'Formik'],
  },
  {
    title: 'Backend & CMS',
    items: ['Node.js', 'Nest.js', 'Express', 'Sanity', 'Strapi', 'WordPress', 'Prisma', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub / GitLab', 'Docker', 'Vite', 'Webpack', 'ESLint', 'Prettier', 'Sentry', 'Figma'],
  },
  {
    title: 'Auth & i18n',
    items: ['JWT', 'OAuth', 'next-auth', 'i18next'],
  },
]

const ServicesV8 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 sm:items-center md:mb-20 md:flex-row lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="rv-badge mb-3 md:mb-4">
              <span className="rv-badge-text">Skills</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Tech <br />
                <span className="font-instrument italic">Stack</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg max-md:text-justify md:place-self-end md:text-right">
                Modern, scalable solutions built with industry-proven tools. From pixel-perfect interfaces to complex
                animations and full-stack integrations.
              </p>
            </TextAppearAnimation>

            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Hire Me</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Hire Me</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px border dark:border-dark sm:grid-cols-3 lg:grid-cols-4">
          {techCategories.map((category) => (
            <RevealWrapper key={category.title} className="border-b border-r p-6 dark:border-dark md:p-8">
              <h5 className="mb-4 text-xs font-bold uppercase tracking-[2px] text-primary">{category.title}</h5>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm opacity-70">
                    {item}
                  </li>
                ))}
              </ul>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesV8
