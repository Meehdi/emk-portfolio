interface SkillCategory {
  icon: string
  title: string
  subtitle: string
  skills: string[]
  gradient: string
}

const skillCategories: SkillCategory[] = [
  {
    icon: '🎨',
    title: 'Frontend',
    subtitle: 'User Interface & Experience',
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
    ],
    gradient: 'from-pink-300 via-purple-300 to-indigo-300',
  },
  {
    icon: '⚙️',
    title: 'Backend',
    subtitle: 'Server & API Development',
    skills: ['Spring Boot', 'Kotlin', 'Java', 'Docker', 'REST APIs'],
    gradient: 'from-blue-300 via-cyan-300 to-teal-300',
  },
  {
    icon: '🗄️',
    title: 'Database & DevOps',
    subtitle: 'Data Management & Infrastructure',
    skills: [
      'PostgreSQL',
      'Oracle',
      'Couchbase',
      'Docker',
      'AWS',
      'GitLab CI/CD',
      'Jenkins',
      'CloudFront',
      'S3',
      'RDS',
    ],
    gradient: 'from-green-300 via-emerald-300 to-lime-300',
  },
]

export default function Skills() {
  return (
    <section className="py-16 px-6 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative w-full h-64 [perspective:1000px] group"
            >
              <div className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group-hover:[transform:rotateY(180deg)]">
                {/* Card Front */}
                <div
                  className={`absolute w-full h-full [backface-visibility:hidden] rounded-2xl shadow-xl flex flex-col justify-center items-center p-5 bg-gradient-to-br ${category.gradient} border-2 border-gray-200`}
                >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <div className="text-xl font-bold text-gray-800 mb-2">
                    {category.title}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {category.subtitle}
                  </div>
                </div>

                {/* Card Back */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl shadow-xl bg-gradient-to-br from-gray-700 to-gray-800 text-white [transform:rotateY(180deg)] flex flex-col justify-center items-center p-5">
                  <h3 className="text-lg font-semibold mb-5 text-gray-200">
                    {category.title} Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white/10 px-3 py-1.5 rounded-full text-xs border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
