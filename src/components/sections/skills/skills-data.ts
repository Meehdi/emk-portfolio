import { SkillCategory } from './skills-types'

export const skillCategories: SkillCategory[] = [
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
