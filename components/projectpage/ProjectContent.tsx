import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'

interface TableOfContentProps {
  tableOfContents: string[]
}

const TableOfContent = ({ tableOfContents }: TableOfContentProps) => (
  <nav>
    <h5 className="mb-4 text-sm font-bold uppercase tracking-[2px]">Contents</h5>
    <ul className="space-y-3">
      {tableOfContents.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm opacity-60 transition-opacity hover:opacity-100">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

const ProjectContent = async ({ project }: any) => {
  const headings = project.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-7 md:px-20">
        <div className="flex flex-col gap-x-8 gap-y-12 lg:flex-row">
          <aside className="min-w-[275px] flex-1">
            <div className="sticky top-40 space-y-8">
              <TableOfContent tableOfContents={tableOfContents} />
              {(project.data.liveUrl || project.data.codeUrl) && (
                <div>
                  <h5 className="mb-4 text-sm font-bold uppercase tracking-[2px]">Links</h5>
                  <ul className="space-y-3">
                    {project.data.liveUrl && (
                      <li>
                        <Link
                          href={project.data.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-sm opacity-60 transition-opacity hover:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          Live Site
                        </Link>
                      </li>
                    )}
                    {project.data.codeUrl && (
                      <li>
                        <Link
                          href={project.data.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-sm opacity-60 transition-opacity hover:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Source Code
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </aside>
          <article className="project-details-body overflow-hidden [&>*]:scroll-mt-20">
            <RevealWrapper as="figure" className="max-w-[870px] md:h-[480px]">
              <img src={project.data.coverImage} alt="Services Big Img" className="h-full w-full object-cover" />
            </RevealWrapper>
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{project.content}</ReactMarkdown>
            <div className="mt-10 max-w-[870px]">
              <img src={project.data.mainImage} alt="Services Big Img" className="h-full w-full object-cover" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ProjectContent
