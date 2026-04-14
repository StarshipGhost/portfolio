import ets from '../../assets/ets.jpg';
import college_rosemont from '../../assets/college_rosemont.png';
import CalendarIcon from '../icons/CalendarIcon';
import BracketWrapper from '../BracketWrapper';
import GraduationCapIcon from '../icons/GraduationCapIcon';

interface EducationCardProps {
    icon: string,
    school: string,
    program: string,
    specialization: string,
    year: string,
}

const education : EducationCardProps[] = [
        {
            icon: ets,
            school: 'École de Technologie Supérieure',
            program: 'Bachelor in Software Engineering',
            specialization: 'Specialized in Software Architecture and Web Development.',
            year: '2023 - present'
        },
        {
            icon: college_rosemont,
            school: 'Cégep de Rosemont',
            program: 'Computer Science and Mathematics',
            specialization: 'Focus on Procedural Programming. Learn the basics and good coding practice. Deep dive in Object Oriented Programming and brief introduction to Data Structures & Algorithms.',
            year: '2019 - 2022'
        }
    ]

const EducationCard = ({education : {icon, school, program, specialization, year}} : {education: EducationCardProps}) => {
    return (
        <div className="bg-cyan-500/10 backdrop-blur-3xl border border-solid border-cyan-900 hover:border-cyan-500 flex flex-col gap-4 rounded-lg p-4">
            <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
                <div className='flex gap-4'>
                    <img src={icon} className='size-11 rounded-lg'></img> 
                    <div className='space-y-2'>
                        <h2 className='text-white'>{school}</h2>
                        <p className='text-cyan-500 text-sm font-medium'>{program}</p> 
                    </div>
                </div> 
                <div className='text-neutral-400 text-sm tracking-tight flex gap-2 items-center'>
                    <CalendarIcon/>    
                    <span>{year}</span>
                </div>
            </div>
            <p className='max-w-4xl text-sm lg:text-normal text-neutral-400'>{specialization}</p>
        </div>
    )
}

const EducationCards = ({education} : {education: EducationCardProps[]}) => {
    return (
        <div className='w-full space-y-8'>
            {education.map(edu => <EducationCard key={edu.school} education={edu}/>)};
        </div>
    ) 
}

const Education = () => {
    return (
        <section className='max-w-7xl mx-auto flex flex-col gap-4 items-center px-4 py-20'>
            <GraduationCapIcon/>
            <BracketWrapper color={'text-cyan-500'} className="text-3xl lg:text-4xl text-white text-center font-bold">Education</BracketWrapper>
            <p className="max-w-xl text-neutral-400 text-sm lg:text-lg tracking-wide text-center mb-8">My academic journey and qualifications</p>
            <EducationCards education={education}/>
        </section>
    )
}

export default Education;