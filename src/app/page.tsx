'use client'
// Components Reutilizaveis
import Section from '@/utils/Section'
//Icons
import { SiLinkedin , SiWhatsapp, SiTelegram } from 'react-icons/si'
// Styles Class Tailwind
const Main = 'py-10 relative w-4/5 h-full flex md:flex-row flex-col justify-center items-center overflow-hidden'
const StyleContainer = 'md:h-1/2 h-1/2 flex flex-col justify-end items-center'
const StyleText = 'ml-3 w-full h-1/2 flex flex-col justify-center items-center'
const ContainerLinks = 'w-4/5 h-20 text-4xl text-orange-500/20 flex flex-row justify-around items-center'
const LinkStyle = 'hover:text-orange-500 duration-300 drop-shadow-2xl'
const CVStyle = 'relative w-52 h-20 mt-5 text-2xl flex justify-center items-center group'
const AnimateCV = 'absolute left-0 w-10 group-hover:w-52 h-10 bg-slate-50/80 rounded-full duration-300 -z-10'

export default function Home() {

  return (
    <Section>
      <main className={Main}>
        <article className={`md:w-1/2 w-[300px] ${StyleContainer}`}>
          <div className={StyleText}>
            <h4 className='pl-1 w-full text-sm'>Hi all, I am</h4>
            <h1 className='w-full text-5xl lg:text-6xl'>Caio Josef</h1>
            <h2 className='w-full text-xl lg:text-3xl text-violet-500'>{'</> '}Front-end Developer</h2>
          </div>
          <div className={`text-[10px] lg:text-sm text-gray-500 text-left ${StyleText}`} >
            <span className='w-full'>{'//'} welcome to my portfolio</span>
            <span className='w-full'>{'//'} you can also see it on my Github</span>
            <span className='w-full flex flex-row'>
              <p className='text-violet-700'>const</p>&nbsp;
              <p className='text-green-400'>githubLink</p>&nbsp;=&nbsp;
              <a
                href='https://github.com/Joseffs'
                target='_blank'
                className='text-orange-500'
              >
                “https://github.com/Joseffs”
              </a>
            </span>
          </div>
        </article>
        <div className={`lg:w-1/2 w-full lg:h-full h-2/6 flex flex-col justify-center items-center ${StyleContainer}`}>
          <ul className={ContainerLinks}>
            <a
              href='https://www.linkedin.com/in/c410j0s3/'
              target='_blank'
              className={LinkStyle}
            >
              <SiLinkedin />
            </a>
            <a
              href='https://wa.me/5521980903910'
              target='_blank'
              className={LinkStyle}
            >
              <SiWhatsapp />
            </a>
            <a
              href='https://t.me/Caio_Josef'
              target='_blank'
              className={LinkStyle}
            >
              <SiTelegram />
            </a>
          </ul>
          <a
            href='#'
            target='_blank'
            className={CVStyle}
          >
            <p className='mix-blend-difference'>Download CV</p>
            <div className={AnimateCV}/>
          </a>
        </div>
      </main>
    </Section>
  )
}
