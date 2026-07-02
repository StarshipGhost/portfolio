import ets from './../assets/ets.jpg'
import college_rosemont from './../assets/college_rosemont.png'
import type {EducationCardProps} from '@/types'

export const education: EducationCardProps[] = [
  {
    icon: ets,
    school: 'École de Technologie Supérieure',
    program: 'Bachelor in Software Engineering',
    specialization: 'Specialized in Software Architecture and Web Development.',
    year: '2023 - present',
  },
  {
    icon: college_rosemont,
    school: 'Cégep de Rosemont',
    program: 'Computer Science and Mathematics',
    specialization:
      'Focus on Procedural Programming. Learn the basics and good coding practice. Deep dive in Object Oriented Programming and brief introduction to Data Structures & Algorithms.',
    year: '2019 - 2022',
  },
]
