'use client'
// Dependências
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Components
import Navigation from './Navigation'
// Icons
import { IoClose } from "react-icons/io5"

// Style Class Tailwind
const navButton =
  'absolute right-10 top-0 w-10 h-[7vh] flex justify-center items-center md:opacity-0 opacity-100 md:-z-10 z-50'
const navContainer =
  'w-10 h-full flex justify-center items-center group z-50'
const iconContainer = 'relative w-10 h-full text-slate-500 hover:text-slate-50 flex justify-center items-center duration-300'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 500)
  }

  return (
    <>
      <button className={navButton}>
        <motion.nav
          className={navContainer}
          initial={false}
          animate={{ rotate: isOpen ? 0 : 45 }}
          onClick={() => (isOpen ? closeMenu() : openMenu())}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={iconContainer}
          >
            {/* Ícones do botão de navegação */}
            <IoClose size={25}/>
          </motion.div>
        </motion.nav>
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <Navigation closeMenu={closeMenu} />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav