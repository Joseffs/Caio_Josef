'use client'
// Components Reutilizaveis
import Section from '@/utils/Section'
// Components Contact
import Social from './components/Social'
// react-icons
import { SiHtml5, SiSass, SiReact, SiTailwindcss, SiTypescript, SiFigma, SiNodedotjs, SiMysql } from "react-icons/si"
// Styles Class Tailwind
const Main =
  'relative py-10 w-full h-full flex md:flex-row flex-col justify-center items-center overflow-hidden'
const ContainerIcons = 'absolute py-[7vh] top-0 left-0 sm:w-56 w-full h-full flex sm:flex-row flex-nowrap flex-col justify-center items-center border-r border-slate-900'
const FlexIcons = 'sm:w-12 w-0 sm:h-full h-0 text-slate-500 flex flex-col justify-around items-center sm:border-r border-0 border-slate-900 overflow-hidden'
const ContainerAbout = 'sm:w-44 w-full h-full flex flex-col justify-start items-start'
const TextAbout = 'w-full h-[7%] text-sm text-slate-500 flex justify-center items-center border-b border-slate-900'
const ImgAbout = 'w-full sm:h-[93%] h-0 personal bg-slate-500'
const ContainerLink = 'relative sm:mt-0 mt-[7vh] sm:pl-56 pl-0 w-full h-full z-10'

export default function Contact() {
  return (
    <Section>
      <div className={Main}>
        <div className={ContainerIcons}>
          <div className={FlexIcons}>
            <SiHtml5 size={25}/>
            <SiSass size={25}/>
            <SiReact size={25}/>
            <SiTypescript size={25}/>
            <SiTailwindcss size={25}/>
            <SiFigma size={25}/>
            <SiNodedotjs size={25}/>
            <SiMysql size={25}/>
          </div>
          <div className={ContainerAbout}>
            <h4 className={TextAbout}>
              _Contact
            </h4>
            <div className={ImgAbout}/>
          </div>  
        </div>
        <div className={ContainerLink}>
          <Social />
        </div>
      </div>
    </Section>
  )
}
