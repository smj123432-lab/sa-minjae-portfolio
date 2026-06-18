'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  className,
}: RevealProps) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.32, 0.72, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
