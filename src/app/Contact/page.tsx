'use client'
// Dependências

// Components Reutilizaveis
import Section from '@/utils/Section'
// Components Home

// Icons
import { SiLinkedin, SiGithub } from "react-icons/si";
import { ContactForm } from './components/ContactForm';
// Styles Class Tailwind
const Main =
  'relative w-full h-full flex flex-row justify-center items-center overflow-hidden'

export default function Contact() {

  return (
    <Section>
      <div className={Main}>
        <div className='absolute py-[7vh] top-0 left-0 sm:w-56 w-44 h-full flex flex-row flex-nowrap justify-center items-center border-r border-slate-900'>
          <div className='sm:w-56 w-44 h-full flex flex-col justify-center items-center'>
            <h4 className='w-full h-[7%] text-sm text-slate-500 flex justify-center items-center border-b border-slate-900'>
              _Contact
            </h4>
            <div className='w-full h-[93%] flex flex-col justify-center items-center sm:text-sm text-xs text-slate-500'>
              <a href='mailto:josef.devs@gmail.com' target='_blank' className='my-2'>josef.devs@gmail.com</a>
              <a href='https://wa.me/5521980903910' target='_blank' className='my-2'>+55 (21) 98090-3910</a>
              <div className=' w-full h-28 flex flex-row justify-around items-center text-3xl'>
                <a href='https://www.linkedin.com/in/c410j0s3/' target='_blank' className=''><SiLinkedin /></a>
                <a href='https://github.com/Joseffs' target='_blank' className=''><SiGithub /></a>
              </div>
            </div>
          </div>  
        </div>
        <div className='py-[7vh] pl-44 sm:pl-56 w-full h-full'>
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
