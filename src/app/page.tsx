import { useTranslations } from 'next-intl'
import Section from '@/components/common/Section'
import Hero from '@/components/sections/hero/Hero'
import About from '@/components/sections/about/About'
import Experience from '@/components/sections/experience/Experience'
import Skills from '@/components/sections/skills/Skills'

const sections = [
  { Component: Hero, key: 'hero' },
  { Component: About, key: 'about' },
  { Component: Experience, key: 'experience' },
  { Component: Skills, key: 'skills' },
] as const

export default function Home() {
  const t = useTranslations('homePage')

  return (
    <>
      {sections.map(({ Component, key }) => (
        <Section key={key} id={key}>
          <Component />
        </Section>
      ))}
    </>
  )
}
