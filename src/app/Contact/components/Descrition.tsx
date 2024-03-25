'use client'
// Dependências
import React from 'react'


const Container = 'absolute top-[3px] h-full w-full z-20 pointer-events-none'
const DescriptionP = 'description pl-[10%] sm:pr-[20%] pr-[10%] w-full h-1/4 flex-row text-neutral-950 font-extrabold'

export default function Description({
  data,
  selectedSocial,
}: {
  data: any[]
  selectedSocial: number
}) {
  const crop = (string: string, maxLength: number) => {
    return string.substring(0, maxLength)
  }

  return (
    <div className={Container}>
      {data.map((Social, i) => {
        const { title, description } = Social
        return (
          <div
            key={i}
            className={DescriptionP}
            style={{
              clipPath:
                selectedSocial === i ? 'inset(0 0 0)' : 'inset(50% 0 50%',
            }}
          >
            <p className="descriptionP text-4xl">{crop(title, 9)}</p>
            <p className="descriptionP2">{description}</p>
          </div>
        )
      })}
    </div>
  )
}