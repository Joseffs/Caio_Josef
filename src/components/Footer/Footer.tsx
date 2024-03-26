// dependências
import React from 'react'
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
// Tailwind
const StyleFooter =
  'fixed bottom-0 left-0 w-full h-[7vh] flex justify-center items-center bg-slate-950 border-t border-slate-900 z-50'
const StyleSocial = 'relative w-full h-full flex justify-normal items-center'
const StyleFind =
  'text-slate-500 text-xs sm:w-40 w-36 flex justify-center items-center h-full border-r border-slate-900'
const StyleLink =
  'h-full text-slate-500 hover:text-slate-950 hover:bg-slate-500 text-xs flex justify-center items-center border-slate-900 duration-300 group'

export const Footer = () => {
  return (
    <>
      <footer className={StyleFooter}>
        <ul className={StyleSocial}>
          <h4 className={StyleFind}>
            find me in:
          </h4>
          <a href='https://www.linkedin.com/in/c410j0s3/' target='_blank' className={`w-8 border-r ${StyleLink}`}>
            <SiLinkedin size={15} />
          </a>
          <a href='mailto:josef.devs@gmail.com' target='_blank' className={`w-8 border-r ${StyleLink}`}>
          <SiGmail  size={15} />
          </a>
          <a href='https://github.com/Joseffs' target='_blank' className={`absolute right-0 w-28 font-extrabold border-l ${StyleLink}`}>
            @Joseffs
            <span className='ml-3 text-slate-500 group-hover:text-slate-950'>
              <SiGithub size={15}/>
            </span>
          </a>
        </ul>
      </footer>
    </>
  )
}
