import { useTranslations } from 'next-intl'
import Section from '@/components/common/Section'
import Hero from '@/components/sections/hero/Hero'
import { Fragment } from 'react'
import About from '@/components/sections/about/About'
import Experience from '@/components/sections/experience/Experience'

export default function Home() {
  const t = useTranslations('homePage')

  return (
    <Fragment>
      <Section>
        <Hero />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Experience />
      </Section>
    </Fragment>
  )
}
