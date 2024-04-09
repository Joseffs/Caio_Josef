'use client'
// Dependências
import React from 'react'
import { motion } from 'framer-motion'

// Style Class tailwind
const Container = 'w-full h-full flex flex-col justify-center items-center'
const CounterStyle = 'w-6 h-2 flex flex-row justify-around items-center'
const CouterPoints = 'w-1 h-1 rounded-full bg-slate-500'

const ProjectCounter = ({
  projectIndex,
  totalProjects,
}: {
  projectIndex: number
  totalProjects: number
}) => {
  const numeroDoProjeto = projectIndex + 1

  const leftDivs = Array.from({ length: numeroDoProjeto }, (_, index) => (
    <>
      <motion.div
        key={index}
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        exit={{ y: 400 }}
        transition={{ duration: 1.5 }}
        className={CounterStyle}
      >
        <div className={CouterPoints} />
        <div className={CouterPoints} />
        <div className={CouterPoints} />
      </motion.div>
    </>
  ))

  const rightDivs = Array.from(
    { length: totalProjects - numeroDoProjeto },
    (_, index) => (
      <>
        <motion.div
          key={index}
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          exit={{ y: 400 }}
          transition={{ duration: 1.5 }}
          className={CounterStyle}
        >
          <div className={CouterPoints} />
          <div className={CouterPoints} />
          <div className={CouterPoints} />
        </motion.div>
      </>
    ),
  )
  return (
    <div className={Container}>
      {leftDivs}
      <div style={{ height: '400px' }}></div>
      {rightDivs}
    </div>
  )
}

export default ProjectCounter