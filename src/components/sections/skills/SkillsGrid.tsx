import SkillCard from './SkillCard'
import { SkillCategory } from './skills-types'

interface SkillsGridProps {
  skillCategories: SkillCategory[]
}

export default function SkillsGrid({ skillCategories }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {skillCategories.map((category, index) => (
        <SkillCard key={index} category={category} index={index} />
      ))}
    </div>
  )
}
