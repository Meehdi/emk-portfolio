type SectionSubtitleProps = {
  subtitle: string
}

export default function SectionSubtitle({ subtitle }: SectionSubtitleProps) {
  return <p className="text-gray-700 text-center">{subtitle}</p>
}
