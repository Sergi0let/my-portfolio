import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import { satoshi } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'

export const metadata: Metadata = {
  title: {
    default: 'Svash | Full-stack Web Developer',
    template: '%s | Svash',
  },
  icons: {
    icon: 'images/favicon.ico',
  },
  description:
    'Sergij Vashkevych — Full-stack Web Developer with 4+ years of experience. React, Next.js, Node.js, TypeScript, GSAP, Tailwind. Open for freelance and full-time roles.',
  keywords: [
    'Full-stack Developer',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'GSAP',
    'Tailwind CSS',
    'Web Developer',
    'Sergij Vashkevych',
    'Svash',
    'Portfolio',
  ],
  authors: [{ name: 'Sergij Vashkevych', url: 'https://github.com/Sergi0let/' }],
  creator: 'Sergij Vashkevych',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vashkevych.pro',
    siteName: 'Svash Portfolio',
    title: 'Svash | Full-stack Web Developer',
    description:
      'Sergij Vashkevych — Full-stack Web Developer. React, Next.js, Node.js, TypeScript. Open for freelance and full-time roles.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Svash — Full-stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Svash | Full-stack Web Developer',
    description: 'Sergij Vashkevych — Full-stack Web Developer. React, Next.js, Node.js, TypeScript.',
    images: ['/og-image.png'],
    creator: '@svashkevych',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>
            <ThemeModeProvider>
              <ThemeSwitcher />
              <CursorPointer />
              {children}
            </ThemeModeProvider>
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  )
}
