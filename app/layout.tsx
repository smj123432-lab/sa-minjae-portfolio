import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import Providers from './providers'
import BackgroundLayer from '@/components/common/BackgroundLayer'
import CodeBlueprint from '@/components/common/CodeBlueprint'
import ScrollToTop from '@/components/common/ScrollToTop'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '사민재 | 프론트엔드 개발자',
  description:
    '비효율을 견디지 못해서 개발자가 됐다. 현장에서 본 문제를, 이제 코드로 푼다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${geistMono.variable} scroll-pt-24 scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground min-h-screen antialiased">
        <BackgroundLayer />
        <CodeBlueprint />
        <Providers>{children}</Providers>
        <ScrollToTop />
      </body>
    </html>
  )
}
