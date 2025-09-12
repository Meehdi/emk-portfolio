import SectionTitle from '@/components/common/SectionTitle'
import SkillsGrid from './SkillsGrid'
import { skillCategories } from './skills-data'

export default function Skills() {
  return (
    <div className="flex flex-col gap-20 p-6">
      <SectionTitle title="Skills" />
      <SkillsGrid skillCategories={skillCategories} />
    </div>
  )
}
