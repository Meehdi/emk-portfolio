interface SkillCardBackProps {
  title: string
  skills: string[]
}

interface SkillBadgeProps {
  skill: string
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="bg-white/10 px-3 py-1.5 rounded-full text-xs border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">
      {skill}
    </span>
  )
}

export default function SkillCardBack({ title, skills }: SkillCardBackProps) {
  return (
    <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl shadow-xl bg-gradient-to-br from-gray-700 to-gray-800 text-white [transform:rotateY(180deg)] flex flex-col justify-center items-center p-5">
      <h3 className="text-lg font-semibold mb-5 text-gray-200">
        {title} Technologies
      </h3>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {skills.map((skill, skillIndex) => (
          <SkillBadge key={skillIndex} skill={skill} />
        ))}
      </div>
    </div>
  )
}
