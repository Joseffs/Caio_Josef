'use client'
// Dependências
import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpLong } from 'react-icons/fa6'

// Style Class Tailwind
const ButtonNext =
  'absolute flex flex-col justify-center items-center bottom-4 left-1/2 right-1/2 transform -translate-x-1/2 space-x-4 text-slate-500 group'

const NextProjectButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.4 }}
      onClick={onClick}
      className={ButtonNext}
    >
      <FaArrowUpLong size={15} className="ml-5 text-slate-500 group-hover:text-slate-50 duration-300" />
      <p className="font-medium text-xs group-hover:text-slate-50 duration-300">Next Project</p>
    </motion.button>
  )
}

export default NextProjectButton