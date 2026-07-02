import { projects } from '@/constants/projects';
import BracketWrapper from '../BracketWrapper';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';
import GithubIcon from '../icons/GithubIcon';
import type { ProjectCardProp } from '@/types';

const TechTag = ({name} : {name: string}) => {
    return <span className='text-purple-400 text-xs font-bold px-2 py-1 border border-solid border-purple-900 rounded-lg'>{name}</span>
}

const ProjectCard = ({project : {name, description, liveDemo, repo, technologies, img}} : {project: ProjectCardProp}) => {
    return (
        <div className='grid bg-black backdrop-blur-3xl border border-solid border-purple-500/30 hover:border-purple-400 rounded-xl'>
            <img src={img} className='w-full h-full border border-solid border-purple-500/30 hover:border-purple-400 rounded-tl-xl rounded-tr-xl'></img>
            <div className="flex flex-col justify-between gap-4 p-4">
                <h2 className='text-white text-xl'>{name}</h2>
                <p className='text-sm text-neutral-400 overflow-y-auto'>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map(tech => <TechTag key={tech} name={tech}/>)}
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <a href={liveDemo} target="_blank" className="flex justify-center items-center h-9 text-white text-sm font-medium bg-linear-to-r from-cyan-500 hover:from-cyan-600 to-purple-500 hover:to-purple-600 border border-solid border-cyan-900 rounded-lg whitespace-nowrap cursor-pointer"><ExternalLinkIcon/> Live Demo </a>
                    <a href={repo} target="_blank" className='text-purple-400 hover:text-primary-foreground text-sm font-medium h-9 flex justify-center items-center gap-2 border border-solid border-purple-500/50 hover:border-purple-400 bg-accent-foreground hover:bg-purple-500/10 rounded-lg cursor-pointer'><GithubIcon /> Code </a>
                </div>
            </div>
        </div>
    )
}

const ProjectCards = ({projects} : {projects: ProjectCardProp[]}) => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-8">
            {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
        </div>
    )
}

const Projects = () => {
    return (
        <section className="max-w-5xl mx-auto flex flex-col gap-4 items-center px-4 py-20">
            <BracketWrapper color={'text-purple-400'} className="text-3xl lg:text-4xl text-white text-center font-bold">Featured Projects</BracketWrapper>
            <p className="max-w-xl text-neutral-400 text-sm lg:text-lg text-center mb-8">A selection of projects I've worked on recently</p>
            <ProjectCards projects={projects}/>
        </section>
    )
}

export default Projects; 
    