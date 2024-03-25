'use client'
// Dependências
import React, { useRef } from 'react'
// Style Class Tailwind
const Container =
  'w-full h-1/4 flex items-center border-b border-slate-900 cursor-default relative z-20'
const Titles = 'titles w-full h-full flex items-center pl-[10%] text-slate-500 text-4xl'
const TitleP = 'TitlesP ml-[10%] w-full h-full font-extrabold flex items-center'

export default function index({
  data,
  setSelectedSocial,
}: {
  data: any
  setSelectedSocial: (value: any) => void
}) {
  return (
    <div className="w-full h-full">
      {data.map((Social: any, i: React.Key | null | undefined) => {
        return (
          <Title
            key={i}
            data={{ ...Social, i }}
            setSelectedSocial={setSelectedSocial}
          />
        )
      })}
    </div>
  )
}

function Title({
  data,
  setSelectedSocial,
}: {
  data: any
  setSelectedSocial: (value: any) => void
}) {
  const { title, i, href } = data
  const container = useRef(null)

  return (
    <a href={href} target="_blank" ref={container} className={Container}>
      <div
        className={Titles}
        onMouseOver={() => {
          setSelectedSocial(i)
        }}
        onMouseLeave={() => {
          setSelectedSocial(null)
        }}
      >
        <p className={TitleP}>{title}</p>
      </div>
    </a>
  )
}