'use client'
// Dependências
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import {
  SiHtml5,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiRedux,
  SiReactquery,
  SiJest,
  SiFigma,
  SiNodedotjs,
  SiMysql,
} from 'react-icons/si'

// Style Class Tailwind
const SectionStyle = 'w-full h-4/5 flex justify-center items-center p-4'
const LinkStyle =
  'w-1/2 h-1/6 group relative flex justify-center items-center border border-slate-500 py-4 transition-colors duration-500 hover:border-teal-400 animate'
const TextContainerStyle =
  'w-full relative z-10 block text-sm font-bold flex justify-center items-center text-slate-500 transition-colors duration-500 group-hover:text-neutral-50'
const IconStyle =
  'absolute z-0 h-10 w-32 rounded-lg object-cover md:h-48 md:w-64 text-teal-400'

export const HoverImageLinks = () => {
  return (
    <section className={SectionStyle}>
      <div className="p-4 w-full h-full flex justify-center items-center flex-wrap">
        <Link
          heading="HTML"
          icon={<SiHtml5 size={100} />}
        />
        <Link
          heading="Sass"
          icon={<SiSass size={100} />}
        />
        <Link
          heading="Javascript"
          icon={<SiJavascript size={100} />}
        />
        <Link
          heading="Typescript"
          icon={<SiTypescript size={100} />}
        />
        <Link
          heading="React"
          icon={<SiReact size={100} />}
        />
        <Link
          heading="Next_JS"
          icon={<SiNextdotjs size={100} />}
        />
        <Link
          heading="Tailwind_CSS"
          icon={<SiTailwindcss size={100} />}
        />
        <Link
          heading="GraphQL"
          icon={<SiGraphql size={100} />}
        />
        <Link
          heading="Redux"
          icon={<SiRedux size={100} />}
        />
        <Link
          heading="React_Query"
          icon={<SiReactquery size={100} />}
        />
        <Link
          heading="Jest"
          icon={<SiJest size={100} />}
        />
        <Link
          heading="Figma"
          icon={<SiFigma size={100} />}
        />
        <Link
          heading="Node_JS"
          icon={<SiNodedotjs size={100} />}
        />
        <Link
          heading="Mysql"
          icon={<SiMysql size={100} />}
        />
      </div>
    </section>
  )
}

const Link = ({
  heading,
  icon,
}: {
  heading: string
  icon: any
}) => {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['50%', '100%'])
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['50%', '100%'])

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const rect = (
      ref.current as unknown as HTMLElement
    )?.getBoundingClientRect()

    if (rect) {
      const width = rect.width
      const height = rect.height

      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5

      x.set(xPct)
      y.set(yPct)
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className={LinkStyle}
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: 'spring',
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className={TextContainerStyle}
        >
          {heading.split('').map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: 'spring' }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
      </div>

      <motion.div
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          initial: { scale: 0, rotate: '-12.5deg' },
          whileHover: { scale: 1, rotate: '12.5deg' },
        }}
        transition={{ type: 'spring' }}
        className={IconStyle}
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}

export default HoverImageLinks