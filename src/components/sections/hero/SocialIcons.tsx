'use client'

import Image from 'next/image'

interface SocialIconsProps {
  githubUrl?: string
  linkedinUrl?: string
}

export function SocialIcons({
  githubUrl = 'https://github.com/Meehdi',
  linkedinUrl = 'https://linkedin.com/in/elmehdikzadri',
}: SocialIconsProps) {
  const handleGithubClick = () => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer')
  }

  const handleLinkedinClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex gap-4 items-center justify-center lg:justify-start">
      <Image
        src="/images/github.svg"
        width={40}
        height={40}
        alt="github"
        className="cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleGithubClick}
      />
      <Image
        src="/images/linkedin.svg"
        width={40}
        height={40}
        alt="linkedin"
        className="cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleLinkedinClick}
      />
    </div>
  )
}
