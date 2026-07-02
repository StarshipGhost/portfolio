import { technologies } from "@/constants/technologies"
import BracketWrapper from "../BracketWrapper"
import type { TechStackCardProps, ToolProps } from "@/types"

const Tool = ({img, name} : ToolProps) => {
    return (
        <div className="flex gap-2 justify-center items-center bg-cyan-500/10 hover:bg-cyan-500/20 border border-solid border-cyan-900 hover:border-cyan-500 rounded-lg px-3 py-1.5 cursor-default">
            <img className='size-4' src={img}></img>
            <p className="text-cyan-400 text-sm font-bold">{name}</p>
        </div>
    )
}

const TechStackCard = ({technology : {layer, tools}} : {technology: TechStackCardProps}) => {
    return (
        <div className="z-0 flex flex-col items-start gap-6 p-4 bg-black border border-solid border-cyan-900 hover:border-cyan-500 rounded-xl">
            <h3 className="text-xl text-white">{layer}</h3>
            <div className="flex flex-wrap gap-3">
                {tools.map(( {img, name} ) => <Tool key={name} img={img} name={name}/>)}
            </div>
        </div>
    )
}

const TechStackCards = ({technologies} : {technologies: TechStackCardProps[]}) => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            { technologies.map((tech) => <TechStackCard key={tech.layer} technology={tech}/>) }
        </div>
    )
}

const TechStack = () => {
    return (
        <section className="max-w-7xl mx-auto flex flex-col gap-4 items-center px-4 py-20">
            <BracketWrapper color={'text-cyan-500'} className="text-3xl lg:text-4xl text-white text-center font-bold">Tech Stack</BracketWrapper>
            <p className="max-w-xl text-neutral-400 text-sm lg:text-lg text-center mb-8">Technologies and tools I use to bring ideas to life</p>
            <TechStackCards technologies={technologies}/>
        </section>
    )
}

export default TechStack;
