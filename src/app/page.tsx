import { useTranslations } from 'next-intl'
import Section from '@/components/common/Section'
import Hero from '@/components/sections/hero/Hero'
import About from '@/components/sections/about/About'
import Experience from '@/components/sections/experience/Experience'
import Skills from '@/components/sections/skills/Skills'

const sections = [
  {
    Component: Hero,
    key: 'hero',
    className:
      'min-h-screen bg-section-1 backdrop-blur-sm border border-white/30 items-center',
  },
  {
    Component: About,
    key: 'about',
    className: 'bg-section-2 backdrop-blur-sm border border-white/30',
  },
  {
    Component: Experience,
    key: 'experience',
    className: 'bg-section-1 backdrop-blur-sm border border-white/30',
  },
  {
    Component: Skills,
    key: 'skills',
    className: ' bg-section-2 backdrop-blur-sm  border border-white/30',
  },
] as const

export default function Home() {
  const t = useTranslations('homePage')

  return (
    <div className="">
      {sections.map(({ Component, key, className }) => (
        <Section key={key} id={key} className={className}>
          <Component />
        </Section>
      ))}
    </div>
  )
}
