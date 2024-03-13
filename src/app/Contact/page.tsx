'use client'
// Components Reutilizaveis
import Section from '@/utils/Section'
// Components About
import { ContactForm } from './components/ContactForm';
import ContactLinks from './components/ContactLinks'
// Styles Class Tailwind
const Main =
  'relative w-full h-full flex flex-row justify-center items-center overflow-hidden'
const ContainerLeft = 'absolute py-[7vh] top-0 left-0 sm:w-56 w-full sm:h-full h-56 flex flex-row flex-nowrap justify-center items-center border-r border-slate-900'
const ContainerRight = 'py-[7vh] sm:pl-44 pl-0 sm:pt-0 pt-44 sm:pl-56 w-full sm:h-full h-full'

export default function Contact() {
  return (
    <Section>
      <div className={Main}>
        <div className={ContainerLeft}>
          <ContactLinks /> 
        </div>
        <div className={ContainerRight}>
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
