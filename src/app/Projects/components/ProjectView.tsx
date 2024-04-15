'use client'
// Dependências
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Components
import ProjectCounter from './ProjectCounter'
import NextProjectButton from './NextProjectButtom'
import PreviusProjectButtom from './PreviusProjectButtom'
// Icons
import { SiGithub } from "react-icons/si";
import { MdOutlineWebAsset } from "react-icons/md";

// Data
import worksData from '@/data/data'
// Style Class Tailwind
const ContainerView =
  'relative w-full h-full flex justify-center items-center overflow-hidden relative'
const MotionStyle =
  'w-full h-full pt-10 flex items-top justify-center'
const CounterContainer =
  'absolute sm:left-[20%] left-[30%] sm:bottom-16 bottom-12 sm:w-[60%] w-[40%] h-8'
const ProjectStyle =
  'relative w-3/4 h-4/6 flex flex-col justify-center items-center border border-slate-500 rounded-3xl cursor-pointer group'
const bgDivStyle =
  'absolute w-full h-full brightness-200 duration-500 sm:rounded-3xl -z-10'
const DescritionStyle =
  'absolute w-full h-full py-8 flex flex-col justify-around items-center group-hover:bg-slate-500/90 rounded-3xl duration-500'
const TextStyle =
  'opacity-0 group-hover:opacity-100 uppercase text-black font-extrabold sm:text-4xl text-3xl duration-500'
const ContainerLink =
  'w-full opacity-0 group-hover:opacity-100 flex flex-row justify-around items-center duration-500'
const LinkStyles =
  'w-28 h-10 text-black/50 hover:text-slate-500 hover:bg-black text-2xl uppercase flex justify-center items-center border border-black rounded-3xl duration-500'
export const ProjectView = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % worksData.length)
  }

  const handlePreviusProject = () => {
    setCurrentProjectIndex((prevIndex) => {
      const newIndex = (prevIndex - 1) % worksData.length
      return newIndex < 0 ? worksData.length - 1 : newIndex
    })
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
                  <div className={ProjectStyle}>
                    <div className={`${bgDivStyle} ${project.bg}`}/>
                      
                    <div className={DescritionStyle}>
                      <h2 className={TextStyle}>{project.nomeProjeto}</h2>
                      <div className={ContainerLink}>
                        <a target='_blank' href={project.githubLink} className={LinkStyles}>
                        <h2>Code</h2>
                        </a>
                        <a target='_blank' href={project.webLink} className={LinkStyles}>
                          <h2>Site</h2>
                        </a>
                      </div> 
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
        <div className={CounterContainer}>
          <ProjectCounter
            projectIndex={currentProjectIndex}
            totalProjects={worksData.length}
          />
        </div>
        <NextProjectButton onClick={handleNextProject} />
        <PreviusProjectButtom onClick={handlePreviusProject} />
      </div>
    </>
  )
}