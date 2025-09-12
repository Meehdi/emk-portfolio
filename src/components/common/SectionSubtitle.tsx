type SectionSubtitleProps = {
  subtitle: string
}

export default function SectionSubtitle({ subtitle }: SectionSubtitleProps) {
  return <h5 className="text-gray-500">{subtitle}</h5>
}
