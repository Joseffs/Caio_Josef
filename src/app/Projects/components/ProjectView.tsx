'use client'
// Dependências
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Components
import ProjectCounter from './ProjectCounter'
import NextProjectButton from './NextProjectButtom'
// Data
import worksData from '@/data/data'
// Style Class Tailwind
const ContainerView =
  'w-full h-full flex justify-center items-center overflow-hidden relative'
const MotionStyle = 'w-full h-full flex items-center justify-center'
const CounterContainer = 'absolute bottom-10 right-10 h-auto w-8'

export const ProjectView = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % worksData.length)
  }
  return (
    <>
      <div className={ContainerView}>
        <AnimatePresence initial={true} mode="wait">
          {worksData.map(
            (project, index) =>
              index === currentProjectIndex && (
                <motion.div
                  key={index}
                  className={MotionStyle}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{
                    duration: 1.0,
                    ease: 'easeInOut',
                  }}
                >
                  <div>
                    <h2>{project.nomeProjeto}</h2>
                    <p>{project.descricao}</p>
                    {/* Adicione outras informações do projeto aqui */}
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className={CounterContainer}
        >
          <ProjectCounter
            projectIndex={currentProjectIndex}
            totalProjects={worksData.length}
          />
        </motion.div>
        <NextProjectButton onClick={handleNextProject} />
      </div>
    </>
  )
}