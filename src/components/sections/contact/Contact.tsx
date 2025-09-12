import { useTranslations } from 'next-intl'
import SectionHeader from '@/components/common/SectionHeader'
import ContactCard from './ContactCard'

type ContactItem = {
  title: string
  subtitle: string
  icon: string
  href: string
}

const contactItems: ContactItem[] = [
  {
    title: 'Email',
    subtitle: 'Get in touch via email',
    href: 'mailto:elmehdi.kzadri@gmail.com',
    icon: '/images/email.svg',
  },
  {
    title: 'LinkedIn',
    subtitle: 'Connect with me professionally',
    href: 'https://www.linkedin.com/in/elmehdikzadri',
    icon: '/images/linkedin.svg',
  },
  {
    title: 'Calendly',
    subtitle: 'Schedule a video call',
    href: 'https://calendly.com/elmehdi-kzadri/30min',
    icon: '/images/calendly.svg',
  },
  {
    title: 'GitHub',
    subtitle: 'Check out my code and projects',
    href: 'https://github.com/Meehdi',
    icon: '/images/github.svg',
  },
]

export default function Contact() {
  const t = useTranslations('contact')

  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col gap-20">
      <SectionHeader title={t('title')} subtitle={t('subtitle')} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
        {contactItems.map((item, index) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-300 hover:scale-105"
          >
            <ContactCard
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              index={index}
              className="h-full"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
