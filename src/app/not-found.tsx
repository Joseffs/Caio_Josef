import Link from 'next/link'

const Container = 'w-full h-full flex flex-col justify-center items-center'
const NotFound404 = 'sm:text-5xl text-3xl text-red-600 uppercase font-extrabold cursor-default'
const LinkHome = 'mt-10 text-sm text-slate-500 hover:text-slate-50 duration-300'

export default function NotFound() {
  return (
    <div className={Container}>
      <h1 className={NotFound404}>Not found – 404!</h1>
      <div className={LinkHome}>
        <Link href="/">Go back to Home</Link>
      </div>
  </div>
  ) 
}