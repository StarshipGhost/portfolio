import BracketWrapper from "../BracketWrapper"

interface ToolProps {
    img: string,
    name: string
}

interface TechStackCardProps {
    layer: string,
    tools: ToolProps[]
}

const technologies : TechStackCardProps[] = [
        {layer: 'Frontend', tools: [
            {img: 'https://cdn.simpleicons.org/react/61DAFB', name: 'React'},
            {img: 'https://cdn.simpleicons.org/typescript/3178C6', name: 'TypeScript'},
            {img: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', name: 'Tailwind CSS'},
            {img: 'https://cdn.simpleicons.org/redux/674ABC', name: 'Redux'} 
        ]},
        {layer: 'Backend', tools: [
            {img: 'https://cdn.simpleicons.org/express/FFFFFF', name: 'Express'},
            {img: 'https://cdn.simpleicons.org/nodedotjs/339933', name: 'Node.js'},
            {img: 'https://cdn.simpleicons.org/python/3776AB', name: 'Python'},
            {img: 'https://cdn.simpleicons.org/MongoDB/47A248', name: 'MongoDB'},
            {img: 'https://cdn.simpleicons.org/mysql/4479A1', name: 'SQL'}, 
        ]},
        {layer: 'Tools & DevOps', tools: [
            {img: 'https://cdn.simpleicons.org/git/F05032', name: 'Git'},
            {img: 'https://cdn.simpleicons.org/jest/C21325', name: 'Jest'}
        ]}
    ] 

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
            <p className="max-w-xl text-neutral-400 text-md lg:text-lg text-center mb-8">Technologies and tools I use to bring ideas to life</p>
            <TechStackCards technologies={technologies}/>
        </section>
    )
}

export default TechStack;
