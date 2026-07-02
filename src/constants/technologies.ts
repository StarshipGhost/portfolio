import type { TechStackCardProps } from "@/types";

export const technologies: TechStackCardProps[] = [
  {
    layer: 'Frontend',
    tools: [
      {img: 'https://cdn.simpleicons.org/react/61DAFB', name: 'React'},
      {img: 'https://cdn.simpleicons.org/typescript/3178C6', name: 'TypeScript'},
      {img: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', name: 'Tailwind CSS'},
      {img: 'https://cdn.simpleicons.org/redux/674ABC', name: 'Redux'},
    ],
  },
  {
    layer: 'Backend',
    tools: [
      {img: 'https://cdn.simpleicons.org/express/FFFFFF', name: 'Express'},
      {img: 'https://cdn.simpleicons.org/nodedotjs/339933', name: 'Node.js'},
      {img: 'https://cdn.simpleicons.org/python/3776AB', name: 'Python'},
      {img: 'https://cdn.simpleicons.org/MongoDB/47A248', name: 'MongoDB'},
      {img: 'https://cdn.simpleicons.org/mysql/4479A1', name: 'SQL'},
    ],
  },
  {
    layer: 'Tools & DevOps',
    tools: [
      {img: 'https://cdn.simpleicons.org/git/F05032', name: 'Git'},
      {img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VSCode'},
      {img: 'https://cdn.simpleicons.org/apachemaven/C71A36', name: 'Maven'},
      {img: 'https://cdn.simpleicons.org/jetbrains/000000', name: 'JetBrains'},
      {img: 'https://cdn.simpleicons.org/jest/C21325', name: 'Jest'},
    ],
  },
]
