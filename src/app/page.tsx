'use client'
// Components Reutilizaveis
import Section from '@/utils/Section'
// Components Home

// Styles Class Tailwind
const Main = 'py-10 relative w-4/5 h-full flex justify-center items-center overflow-hidden'
const StyleContainer = 'h-1/2 flex flex-col justify-end items-center'
const StyleText = 'w-full h-1/2 flex flex-col justify-center items-center'

export default function Home() {

  return (
    <Section>
      <main className={Main}>
        <article className={`md:w-1/2 w-full ${StyleContainer}`}>
          <div className={StyleText}>
            <h4 className='pl-1 w-full text-sm'>Hi all, I am</h4>
            <h1 className='w-full text-5xl lg:text-6xl'>Caio Josef</h1>
            <h2 className='w-full text-xl lg:text-3xl text-violet-500'>{'</> '}Front-end Developer</h2>
          </div>
          <div className={`text-[12px] md:text-sm text-gray-500 text-left ${StyleText}`} >
            <span className='w-full opacity-0 lg:opacity-100'>{'//'} complete the game to continue</span>
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
        <div className={`lg:opacity-100 opacity-0 lg:w-1/2 w-0 h-full flex justify-center items-center ${StyleContainer}`}>

        </div>
      </main>
    </Section>
  )
}
