// dependências
import React from 'react'
import Link from 'next/link'
// Tailwind
const StyleHeader =
  'fixed m-0 p-0 top-0 left-0 w-full h-[7vh] flex justify-center items-center border-b border-slate-900 z-50'
const StyleName =
  'pl-5 text-slate-500 text-xs min-w-56 flex justify-start items-center h-full sm:border-r border-0 border-slate-900'
const StyleContainer = 'relative w-full h-full flex justify-normal items-center'
const StyleLink =
   'sm:w-28 w-0 h-full text-slate-500 text-xs flex justify-center items-center sm:border-r border-0 border-slate-900 overflow-hidden'

export const Header = () => {
  return (
    <>
      <header className={StyleHeader}>
        <h4 className={StyleName}>
          Caio_Josef
        </h4>
        <ul className={StyleContainer}>
          <Link href='/' className={StyleLink}>
            _Home
          </Link>
          <Link href='/About' className={StyleLink}>
            _About-me
          </Link>
          <Link href='/Projects' className={StyleLink}>
            _Projects
          </Link>
          <Link href='/Contact' className={`absolute right-0 border-l border-slate-900 ${StyleLink}`}>
            _Contact
          </Link>
        </ul>
      </header>
    </>
  )
}
