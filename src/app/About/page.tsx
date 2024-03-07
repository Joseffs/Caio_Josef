'use client'
// Dependências

// Components Reutilizaveis
import Section from '@/utils/Section'
// Components Home

// react-icons
import { SiHtml5, SiSass, SiReact, SiTailwindcss, SiTypescript, SiFigma, SiNodedotjs, SiMysql } from "react-icons/si"
import TabContainer from './TabContainer'
// Styles Class Tailwind
const Main =
  'relative py-10 w-full h-full flex md:flex-row flex-col justify-center items-center overflow-hidden'

export default function About() {

  return (
    <Section>
      <div className={Main}>
        <div className='absolute py-[7vh] top-0 left-0 sm:w-56 w-full h-full flex sm:flex-row flex-nowrap flex-col justify-center items-center border-r border-slate-900'>
          <div className='sm:w-12 w-0 sm:h-full h-0 text-slate-500 flex flex-col justify-around items-center sm:border-r border-0 border-slate-900 overflow-hidden'>
            <SiHtml5 size={25}/>
            <SiSass size={25}/>
            <SiReact size={25}/>
            <SiTypescript size={25}/>
            <SiTailwindcss size={25}/>
            <SiFigma size={25}/>
            <SiNodedotjs size={25}/>
            <SiMysql size={25}/>
          </div>
          <div className='sm:w-44 w-full h-full flex flex-col justify-start items-start'>
            <h4 className='w-full sm:h-[10%] h-[7vh] text-sm text-slate-500 flex justify-center items-center border-b border-slate-900'>
              _About
            </h4>
            <div className='w-full sm:h-[90%] h-0 personal bg-slate-500'/>
          </div>  
        </div>
        <div className='sm:mt-0 mt-[7vh] sm:pl-56 pl-0 w-full lg:w-4/5 h-[79vh] sm:h-full z-10'>
          <TabContainer />
        </div>
        <div className='w-0 md:w-1/5 md:h-full h-0 bg-slate-900'>
          
        </div>
      </div>
    </Section>
  )
}
