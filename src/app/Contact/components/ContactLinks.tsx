// Icons
import { SiLinkedin, SiGithub } from "react-icons/si";
// tailwind
const Container = 'sm:w-56 w-full sm:h-full h-44 flex flex-col justify-center items-center border-b border-slate-900'
const TextContact = 'w-full sm:h-[7%] h-10 text-sm text-slate-500 flex justify-center items-center border-b border-slate-900'
const Links = 'w-full sm:h-[93%] h-24 flex flex-col justify-center items-center sm:text-sm text-xs text-slate-500'
const Icons = ' w-full h-10 flex flex-row justify-around items-center text-3xl'

const ContactLinks = () => {
  return(
    <div className={Container}>
      <h4 className={TextContact}>
        _Contact
      </h4>
      <div className={Links}>
        <a href='mailto:josef.devs@gmail.com' target='_blank' className='my-2'>josef.devs@gmail.com</a>
        <a href='https://wa.me/5521980903910' target='_blank' className='my-2'>+55 (21) 98090-3910</a>
        <div className={Icons}>
          <a href='https://www.linkedin.com/in/c410j0s3/' target='_blank'><SiLinkedin /></a>
          <a href='https://github.com/Joseffs' target='_blank'><SiGithub /></a>
        </div>
      </div>
    </div>
  )
}

export default ContactLinks;





