export interface ProjectCardProp {
  name: string
  description: string
  liveDemo: string
  repo: string
  technologies: string[]
  img: string
}

export interface ToolProps {
  img: string
  name: string
}

export interface TechStackCardProps {
  layer: string
  tools: ToolProps[]
}

export interface EducationCardProps {
  icon: string
  school: string
  program: string
  specialization: string
  year: string
}

export interface MailFormInputProps {
  id: string
  type: string
  label: string
  placeholder: string
  value: string
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}
