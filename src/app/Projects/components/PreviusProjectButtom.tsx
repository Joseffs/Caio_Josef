'use client'
// Dependências
import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowDownLong } from 'react-icons/fa6'

// Style Class Tailwind
const ButtonNext =
  'absolute w-16 h-28 flex justify-center items-center sm:bottom-8 bottom-4 sm:right-10 right-5 text-slate-500 rounded-full border border-slate-500 hover:bg-slate-500 duration-500 group'
const IconStyle =
  'text-slate-500 group-hover:text-slate-950 duration-500'

const PreviusProjectButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0 }}
      onClick={onClick}
      className={ButtonNext}
    >
      <FaArrowDownLong size={25} className={IconStyle} />
    </motion.button>
  )
}

export default PreviusProjectButton