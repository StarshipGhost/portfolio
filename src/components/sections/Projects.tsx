import project_1 from '../../assets/hoops-league-registration-app.png';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';
import GithubIcon from '../icons/GithubIcon';

interface ProjectCardProp {
    name: string,
    description: string,
    technologies: string[]
}

const projects : ProjectCardProp[] = [
        {
            name: 'Hoops-league-registration-app',
            description: 'A full-stack basketball game registration app.It allows users to view upcoming games, register for the next available event, and lets an admin manage the schedule and player registrations.',
            technologies: ['React', 'Typescript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB']
        },
        {
            name: 'Hoops-league-registration-app',
            description: 'A full-stack basketball game registration app.It allows users to view upcoming games, register for the next available event, and lets an admin manage the schedule and player registrations.',
            technologies: ['React', 'Typescript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB']
        },
        {
            name: 'Hoops-league-registration-app',
            description: 'A full-stack basketball game registration app.It allows users to view upcoming games, register for the next available event, and lets an admin manage the schedule and player registrations.',
            technologies: ['React', 'Typescript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB']
        },

] 
const TechTags = ({name} : {name: string}) => {
    return <span className='text-purple-400 text-xs font-bold px-2 py-1 border border-solid border-purple-900 rounded-lg'>{name}</span>
}

const ProjectCard = ({project : {name, description, technologies}} : {project: ProjectCardProp}) => {
    return (
        <div className='flex flex-col bg-black/40 backdrop-blur-3xl border border-solid border-purple-500/30 hover:border-purple-400 rounded-xl'>
            <img src={project_1} className='h-50 bg-purple-500 rounded-tl-xl rounded-tr-xl'></img>
            <div className="flex flex-col gap-4 p-4">
                <h2 className='text-white text-xl'>{name}</h2>
                <p className='text-sm text-neutral-400'>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map(tech => <TechTags name={tech}/>)}
                </div>
                <div className='w-full bg-destructive grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <button className="flex justify-center items-center h-9 text-white text-sm font-medium bg-linear-to-r from-cyan-500 hover:from-cyan-600 via-background to-purple-500 hover:to-purple-600 border border-solid border-cyan-900 rounded-lg whitespace-nowrap cursor-pointer"><ExternalLinkIcon/> Live Code </button>
                    <button className='text-purple-400 text-sm font-medium flex justify-center items-center gap-2 border border-solid border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10'><GithubIcon className=''/> Code </button>
                </div>
            </div>
        </div>
    )
}
const ProjectCards = ({projects} : {projects: ProjectCardProp[]}) => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-6">
            {projects.map(project => <ProjectCard project={project}/>)}
        </div>
        
    )
}

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            <ProjectCards projects={projects}/>
        </div>
    )
}

export default Projects; 
    