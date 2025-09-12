import SectionSubtitle from '@/components/common/SectionSubtitle'
import SectionTitle from '@/components/common/SectionTitle'

type SectionHeaderProps = {
  title: string
  subtitle: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <SectionTitle title={title} />
      <SectionSubtitle subtitle={subtitle} />
    </div>
  )
}
