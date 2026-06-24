'use client'

import { useState } from 'react'
import Image from 'next/image'

type ObjectPos = 'top' | 'center' | 'bottom'

const POS: Record<ObjectPos, string> = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom',
}

interface ProjectGalleryProps {
  images: string[]
  alt: string
  positions?: ObjectPos[]
}

export default function ProjectGallery({
  images,
  alt,
  positions,
}: ProjectGalleryProps) {
  const [mainIdx, setMainIdx] = useState(0)
  const main = images[mainIdx]
  const getPos = (i: number): string => POS[positions?.[i] ?? 'top']

  return (
    <div className="mb-16">
      {/* Main image */}
      <div className="border-border/40 bg-surface relative mb-3 aspect-video w-full overflow-hidden border">
        <Image
          src={main}
          alt={alt}
          fill
          className={`object-cover ${getPos(mainIdx)}`}
          priority
          sizes="100vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))`,
          }}
        >
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setMainIdx(i)}
              aria-label={`스크린샷 ${i + 1} 보기`}
              className={[
                'relative aspect-video overflow-hidden border transition-all duration-200',
                i === mainIdx
                  ? 'border-accent'
                  : 'border-border/40 opacity-50 hover:opacity-90',
              ].join(' ')}
            >
              <Image
                src={img}
                alt={`스크린샷 ${i + 1}`}
                fill
                className={`object-cover ${getPos(i)}`}
                sizes="16vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
