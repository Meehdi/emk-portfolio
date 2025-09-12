type SectionTitleProps = {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h1 className="text-center">{title}</h1>
}
