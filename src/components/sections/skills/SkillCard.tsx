import { SkillCategory } from './skills-types'
import SkillCardFront from './SkillCardFront'
import SkillCardBack from './SkillCardBack'

interface SkillCardProps {
  category: SkillCategory
  index: number
}

export default function SkillCard({ category, index }: SkillCardProps) {
  return (
    <div
      className={`relative w-full h-64 [perspective:1000px] group animate-fade-in-up animate-delay-${index * 100 + 100}`}
    >
      <div className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group-hover:[transform:rotateY(180deg)]">
        <SkillCardFront
          icon={category.icon}
          title={category.title}
          subtitle={category.subtitle}
          gradient={category.gradient}
        />
        <SkillCardBack title={category.title} skills={category.skills} />
      </div>
    </div>
  )
}
