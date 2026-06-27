import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import DiggoPage from '@/components/projects/DiggoPage'
import LionsStudyPage from '@/components/projects/LionsStudyPage'
import ActivioV1Page from '@/components/projects/ActivioV1Page'
import ActivioV2Page from '@/components/projects/ActivioV2Page'

interface Props {
  params: Promise<{ slug: string }>
}

const PROJECT_METADATA: Record<
  string,
  { title: string; description: string; ogImage: string | null }
> = {
  diggo: {
    title: 'DIGGO — SA MINJAE',
    description:
      '건설 현장 배차 불신 문제를 신뢰 뱃지 시스템으로 푼 개인 프로젝트',
    ogImage: '/images/diggo/hero_screenshot.png',
  },
  'lions-study': {
    title: '사자들의 공부방 — SA MINJAE',
    description:
      'Vanilla JS + Vite로 Lighthouse Performance 62→80, FCP 3.1→1.1초 달성한 팀 프로젝트',
    ogImage: '/images/lions-study/hero_screenshot.png',
  },
  'activio-v1': {
    title: 'ACTIVIO v1 — SA MINJAE',
    description: '부트캠프 수료 전 초기 버전 팀 프로젝트',
    ogImage: null,
  },
  'activio-v2': {
    title: 'ACTIVIO v2 — SA MINJAE',
    description:
      '6개 격투기 종목 수련자·도장·코치를 잇는 올인원 스포츠 커뮤니티 플랫폼. 접근성 위반 33→0건, Lighthouse Accessibility 100점.',
    ogImage: '/images/activio-v2/screenshot1.png',
  },
}

export async function generateStaticParams() {
  return [
    { slug: 'diggo' },
    { slug: 'lions-study' },
    { slug: 'activio-v1' },
    { slug: 'activio-v2' },
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meta = PROJECT_METADATA[slug]
  if (!meta) return {}
  return {
    title: meta.title,
    ...(meta.description ? { description: meta.description } : {}),
    openGraph: {
      title: meta.title,
      ...(meta.description ? { description: meta.description } : {}),
      ...(meta.ogImage ? { images: [{ url: meta.ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      ...(meta.description ? { description: meta.description } : {}),
      ...(meta.ogImage ? { images: [meta.ogImage] } : {}),
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  if (slug === 'diggo')
    return (
      <>
        <Header />
        <DiggoPage />
      </>
    )
  if (slug === 'lions-study')
    return (
      <>
        <Header />
        <LionsStudyPage />
      </>
    )
  if (slug === 'activio-v1')
    return (
      <>
        <Header />
        <ActivioV1Page />
      </>
    )
  if (slug === 'activio-v2')
    return (
      <>
        <Header />
        <ActivioV2Page />
      </>
    )

  notFound()
}
