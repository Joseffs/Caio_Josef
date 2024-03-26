'use client'
// Dependências
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Style Class Tailwind
const StyleContainer = 'introduction relative z-30'
const StyleMenu =
  'absolute bottom-36 left-10 w-1/2 h-1/2 flex flex-col items-left justify-around z-50'
const StyleMapMenu = 'w-full h-full flex justify-start items-center z-50'
const StyleLink =
  'text-5xl text-neutral-950 hover:text-neutral-50 hover:translate-x-10 duration-500 uppercase'

// List Menu
const Nemu = [
  { textNav: '_Home', url: '/' },
  { textNav: '_About', url: '/About' },
  { textNav: '_Projects', url: '/Projects' },
  { textNav: '_Contact', url: '/Contact' }
]

export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`
  const animatePath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height - 300} 0 ${dimension.height}  L0 0`

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    animate: {
      d: animatePath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  }

  const slideUp = {
    initial: {
      top: '-100vh',
    },
    animate: {
      top: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
    exit: {
      top: '-100vh',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className={StyleContainer}
    >
      {dimension.width > 0 && (
        <>
          <motion.ul
            initial="initial"
            animate="animate"
            exit="exit"
            className={StyleMenu}
          >
            {Nemu.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, rotateX: '90deg' }}
                animate={{ opacity: 1, rotateX: '0deg' }}
                exit={{ opacity: 0, rotateX: '-90deg' }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className={StyleMapMenu}
              >
                <Link href={item.url} onClick={closeMenu} className={StyleLink}>
                  {item.textNav}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </>
      )}
    </motion.div>
  )
}