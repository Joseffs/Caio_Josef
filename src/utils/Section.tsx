'use client'
// Dependências
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Style Class Tailwind
const StyleAnimate =
  'w-full h-full flex items-center justify-center overflow-hidden'

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={StyleAnimate}
      >
        {children} {/* component filho */}
      </motion.section>
    </AnimatePresence>
  )
}

export default Section
