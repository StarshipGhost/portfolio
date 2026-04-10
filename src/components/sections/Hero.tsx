import BracketWrapper from "../BracketWrapper";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import profile_picture from '../../assets/linkedin_profile_picture.png'
import LeetCodeIcon from "../icons/LeetCodeIcon";

const ProfilePicture = () => {
  return (
    <div className='flex justify-center items-center rounded-full order-1 lg:order-2'>
        <div className='relative size-64 sm:size-72 md:size-80 lg:size-120'>
            <div className="absolute w-full h-full bg-linear-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full p-1">
                <div className="w-full h-full rounded-full bg-black p-2">
                    <img src={profile_picture} className="w-full h-full rounded-full object-cover"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

const Headline = ({scroll} : {scroll : (index: number) => void}) => {
    return (
        <div className="flex flex-col items-center lg:items-start order-2 lg:order-1">
            <h1 className="text-5xl lg:text-6xl text-white mb-2 text-center lg:text-left"> Hi, I'm <span className="bg-linear-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"> Saâd Kalyati</span></h1>
            <BracketWrapper color="text-cyan-500" className="text-2xl lg:text-3xl text-gray-300 text-center lg:text-left font-mono font-medium mb-6">
                Software Engineering Student
            </BracketWrapper>
            <div className="flex flex-col gap-4">
            <p className="text-lg text-neutral-400 font-normal mb-2 text-center lg:text-left">Passionate about building elegant solutions to complex problems. I specialize in creating scalable web applications with modern technologies and best practices. </p>
                <div className="flex justify-center lg:justify-start gap-4 mb-6">
                    <a className="bg-black border border-box border-cyan-900 hover:border-cyan-500 hover:bg-cyan-500/10 p-2 rounded-md cursor-pointer text-cyan-500 hover:text-white" href="https://github.com/starshipghost" target="_blank"><GithubIcon/></a>
                    <a className="bg-black border border-box border-cyan-900 hover:border-cyan-500 hover:bg-cyan-500/10 p-2 rounded-md cursor-pointer text-cyan-500 hover:text-white" href="https://linkedin.com/in/saad-kalyati" target="_blank"><LinkedinIcon/></a>
                    <a className="bg-black border border-box border-cyan-900 hover:border-cyan-500 hover:bg-cyan-500/10 p-2 rounded-md cursor-pointer text-cyan-500 hover:text-white" href="mailto:saad.kalyati.1@ens.etsmtl.ca" target="_blank"><MailIcon/></a>
                    <a className="bg-black border border-box border-cyan-900 hover:border-cyan-500 hover:bg-cyan-500/10 p-2 rounded-md cursor-pointer text-cyan-500 hover:text-white" href="https://leetcode.com/u/saadk09" target="_blank"><LeetCodeIcon/></a>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <button className="w-38 h-9 text-white text-sm font-medium bg-linear-to-r from-cyan-500 hover:from-cyan-600 to-purple-500 hover:to-purple-600 border border-solid border-cyan-900 rounded-lg whitespace-nowrap cursor-pointer" onClick={() => scroll(2)}>View My Work</button>
                    <button className="w-38 h-9 bg-black text-sm font-medium border border-box border-cyan-900 hover:border-cyan-500 hover:bg-cyan-500/10 rounded-lg cursor-pointer text-cyan-500 hover:text-white whitespace-nowrap" onClick={() => scroll(4)}>Get In Touch</button>
                </div>
            </div>
        </div>
    )
}

const Hero = ({scroll} : {scroll : (index: number) => void}) => {
    return (
        <section className="bg-linear-to-br from-cyan-400/10 to-purple-400/10">
            <div className="min-h-[90vh] max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-x-8 gap-y-10 px-4 py-20">
                <Headline scroll={scroll}/>
                <ProfilePicture />
            </div>
        </section>
    )
}

export default Hero;