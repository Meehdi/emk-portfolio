interface SkillCardFrontProps {
  icon: string
  title: string
  subtitle: string
  gradient: string
}

export default function SkillCardFront({
  icon,
  title,
  subtitle,
}: SkillCardFrontProps) {
  return (
    <div
      className={`absolute w-full h-full [backface-visibility:hidden] bg-amber-200/30 rounded-2xl shadow-xl flex flex-col justify-center items-center p-5  border-2 border-white/20`}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  )
}
