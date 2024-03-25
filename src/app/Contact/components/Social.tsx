// Dependências
import { useState } from 'react'
// Components
import Titles from './Titles'
import Descriptions from './Descrition'

// Style Class Tailwind
const Container = 'absolute left-0 sm:pl-56 pl-0 top-[3px] h-full w-full'

// Data
const data = [
  {
    title: 'Linkedin',
    description: '100% chance of contact',
    href: 'https://www.linkedin.com/in/c410j0s3/',
  },
  {
    title: 'WhatsApp',
    description: '100% chance of contact',
    href: 'https://wa.me/5521980903910',
  },
  {
    title: 'Telegram',
    description: '80% chance of contact',
    href: 'https://t.me/Caio_Josef',
  },
  {
    title: 'E-mail',
    description: '90% chance of contact',
    href: 'mailto:josef.devs@gmail.com',
  },
]

export default function Social() {
  const [selectedSocial, setSelectedSocial] = useState<number | null>(null)
  return (
    <div className={Container}>
      <Titles data={data} setSelectedSocial={setSelectedSocial} />
      <Descriptions
        data={data}
        selectedSocial={selectedSocial !== null ? selectedSocial : 5}
      />
    </div>
  )
}