interface ExperienceItem {
  title: string
  company: string
  date: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    title: 'Tech Lead / Software Architect',
    company: 'SAAS Startup, Toulouse',
    date: '2024 - 2025',
    description:
      'Led complete technical architecture of a multi-tenant B2B SAAS solution. Established best practices, resolved critical blockers, and optimized performance. Stack: Spring Boot, Kotlin, PostgreSQL, Docker, AWS, React.',
  },
  {
    title: 'Senior Developer → Tech Lead',
    company: 'Bimpli (acquired by Swile), Toulouse',
    date: '2022 - 2024',
    description:
      'Promoted to Tech Lead of the Affiliate platform serving 200,000+ partner merchants. Led library upgrades, SQL optimization, and high-value feature development during Bimpli to Swile migration. Stack: Spring Boot, Java 11, Oracle, Docker, AWS, Angular.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'La Banque Postale (Sopra Steria), Toulouse',
    date: '2020 - 2021',
    description:
      'Developed internal IT platform for resource and request management using Agile methodology. Built modern user interfaces and performant RESTful APIs. Stack: Spring Boot, Java 11, Couchbase, Angular.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Orange (Sopra Steria), Toulouse',
    date: '2017 - 2020',
    description:
      'Evolved and maintained HRMS and payroll applications for Orange France. Managed client relationships and led progressive migration from legacy systems to modern technologies. Stack: Spring, Java 8, Oracle, Talend, Angular JS.',
  },
]

export default function Experience() {
  return (
    <section className="py-16 px-6 bg-gray-50" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Experience
        </h2>

        <div className="grid gap-8 mt-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-indigo-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {experience.title}
              </h3>

              <div className="text-indigo-500 font-bold mb-2">
                {experience.company}
              </div>

              <div className="text-gray-500 text-sm mb-4">
                {experience.date}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
