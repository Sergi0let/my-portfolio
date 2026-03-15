import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface Project {
  name: string
  url?: string
}

const experiences = [
  {
    id: 1,
    company: 'Inno-Soft',
    role: 'Frontend Developer · Full-time',
    period: 'Aug 2025 — present',
    description:
      'Development of digital products and custom integrations across iGaming and affiliate marketing verticals.',
    highlights: [
      'Built React-based web products with MobX and React Query',
      'Developed affiliate and offer pages integrated with tracking platforms',
      'Implemented analytics and event tracking (Matomo, Microsoft Clarity)',
      'Created custom Telegram bot integrations and automated workflows via Node.js',
      'Built digital pipelines connecting internal tools, spreadsheets, and third-party APIs',
    ],
    projects: [] as Project[],
    stack: ['React', 'MobX', 'React Query', 'TS', 'Node.js', 'PHP', 'i18n', 'Telegram API'],
  },
  {
    id: 2,
    company: 'Evoplay',
    role: 'Frontend Developer',
    period: 'May 2023 — Aug 2025',
    description:
      'Development and support of web projects in the gambling sector and client side of a cryptocurrency startup.',
    highlights: [
      'Added new game logic: talismans, loot boxes, player races',
      'Completely redesigned UI of existing projects by updated layouts',
      'Created AMP versions for Google to improve loading speed and SEO',
      'Implemented light/dark theme support across products',
      'Layout of pages with complex GSAP and CSS animations',
      'Optimized images — converted to modern formats, improved performance',
      'Reduced unnecessary re-renders and fixed rendering bugs',
    ],
    projects: [
      { name: 'League of Slots' },
      { name: 'Seastar', url: 'https://sea-star.casino' },
      { name: 'Starlight Casino', url: 'https://starlight-casino.com' },
      { name: 'VStars Casino', url: 'https://vstars.casino/ru/' },
    ] as Project[],
    stack: ['React', 'Redux', 'Saga', 'WebSocket', 'Node.js', 'TypeScript', 'SCSS', 'GSAP'],
  },
  {
    id: 3,
    company: 'Softlab Pro',
    role: 'Frontend Developer',
    period: 'Aug 2022 — Apr 2023',
    description: 'Development of a platform for real-time sports event streaming with a flexible and dynamic UI.',
    highlights: [
      'Developed and adapted components based on design mockups',
      'Integrated third-party APIs for data sync and real-time updates',
      'Fixed bugs, improved code quality, wrote unit tests',
      'Actively participated in Q&A sessions and team meetings',
    ],
    projects: [] as Project[],
    stack: ['Next.js', 'WebSocket', 'Node.js', 'TypeScript', 'Styled Components'],
  },
  {
    id: 4,
    company: 'Traffband',
    role: 'Frontend Developer · Part-time',
    period: 'Part-time · 2023 — 2024',
    description:
      'SEO-focused web development for an iGaming affiliate team. Refactoring and building WordPress-based sites for international markets.',
    highlights: [
      'Refactored existing sites to meet SEO and Web Content Accessibility (WCAG) standards',
      'Developed and customised WordPress themes from scratch',
      'Built new affiliate landing pages aligned with SEO strategy',
      'Collaborated closely with SEO specialists to improve search engine ranking',
      'Ensured semantic HTML, performance optimisation, and structured data markup',
    ],
    projects: [{ name: 'SEO Pub', url: 'https://seo-pub.com' }] as Project[],
    stack: ['WordPress', 'PHP', 'HTML5/CSS3', 'JavaScript', 'SEO', 'WCAG'],
  },
]

const WorkExperience = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <RevealWrapper className="rv-badge mb-3 md:mb-4">
            <span className="rv-badge-text">Experience</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Work <i className="font-instrument italic">Experience</i>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <RevealWrapper key={exp.id} className="border p-6 dark:border-dark md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                <div className="md:w-[280px] md:shrink-0">
                  <p className="mb-1 text-sm font-medium uppercase tracking-[2px] text-primary">{exp.period}</p>
                  <h3 className="text-2xl font-medium md:text-3xl">{exp.company}</h3>
                  <p className="mt-1 text-base opacity-60">{exp.role}</p>
                  {exp.stack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="inline-block border border-primary px-3 py-1 text-xs text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {exp.projects.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.projects.map((project) =>
                        project.url ? (
                          <Link
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 border border-white/20 px-3 py-1 text-xs opacity-60 transition-all duration-300 hover:border-primary hover:text-primary hover:opacity-100">
                            {project.name}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </Link>
                        ) : (
                          <span
                            key={project.name}
                            className="inline-block border border-white/20 px-3 py-1 text-xs opacity-60">
                            {project.name}
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <p className="mb-5 text-base opacity-70">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="opacity-80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-8 border border-dashed p-6 dark:border-dark md:p-10">
          <h4 className="mb-4 text-xl font-medium md:text-2xl">Additional Freelance Experience</h4>
          <p className="max-w-3xl opacity-70">
            Participated in various freelance projects as part of a small team (developer + UX/UI designer),
            collaborating with SEO specialists and copywriters. Projects included a charitable foundation website,
            business card sites, cosmetology platform, eCommerce on Shopify, WordPress integrations, and a medical
            reference guide.
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WorkExperience
