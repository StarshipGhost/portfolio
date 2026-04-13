import { useState } from "react";
import BracketWrapper from "../BracketWrapper";
import MenuIcon from "../icons/MenuIcon";
import clsx from "clsx";

const MobileHeader = ({open, closeMenu, scroll}: {open: boolean, closeMenu: () => void, scroll: (index: number) => void}) => {
    const baseClass : string = "lg:hidden w-full absolute -z-1 bg-black flex flex-col p-4 transition -translate-y-full duration-300 delay-200"
    const activeClass : string = open ? 'translate-y-0' : '-translate-y-full'
    const itemClass : string = "text-sm text-neutral-400 font-medium hover:bg-cyan-900/30 p-3 rounded-md cursor-pointer";
    const navigate = (index: number) => {
        scroll(index);
        closeMenu();
    }
    return (
        <ul className={clsx(baseClass, activeClass)}>
            <li className={clsx(itemClass)} onClick={() => navigate(0)}><a>Home</a></li>
            <li className={clsx(itemClass)}onClick={() => navigate(1)}><a>Tech Stack</a></li>
            <li className={clsx(itemClass)}onClick={() => navigate(2)}><a>Projects</a></li>
            <li className={clsx(itemClass)}onClick={() => navigate(4)}><a>Contacts</a></li>
            <li className='text-white text-sm text-center font-medium bg-linear-to-r from-cyan-500 hover:from-cyan-600 to-purple-500 hover:to-purple-600 rounded-md p-2 cursor-pointer' onClick={closeMenu}><a>Resume</a></li>
        </ul>
    )
}

const DesktopHeader = ({scroll} : { scroll : (index: number) => void}) => {
    const itemClass : string = "text-sm text-neutral-400 font-medium hover:text-cyan-500 p-3 rounded-md cursor-pointer";
    return (
        <ul className="lg:flex hidden gap-2">
            <li className={clsx(itemClass)} onClick={() => scroll(0)}><a>Home</a></li>
            <li className={clsx(itemClass)} onClick={() => scroll(1)} ><a>Tech Stack</a></li>
            <li className={clsx(itemClass)} onClick={() => scroll(2)}><a>Projects</a></li>
            <li className={clsx(itemClass)} onClick={() => scroll(4)}><a>Contacts</a></li>
        </ul>
    )
}

const Header = ({scroll} : { scroll : (index: number) => void}) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const closeMenu = () => {
        setOpenMenu(false);
    }
    const toggleHover = () => {
        setHovered(!hovered);
    }
    const popoverBaseClass = 'absolute w-35 flex flex-col bg-black opacity-0 transition duration-200 pointer-event-none cursor-default'
    const popoverActiveClass = hovered && 'opacity-100 pointer-event-auto cursor-pointer'
    return (
        <header className="sticky top-0 z-1">
            <div className="flex justify-between items-center bg-black lg:px-[5vw] px-4 py-2 border-b border-solid border-cyan-900/70">
                <BracketWrapper color='' className="text-xl lg:text-2xl font-bold bg-linear-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text cursor-auto">
                    {`Portfolio `}
                </BracketWrapper>
                <DesktopHeader scroll={scroll}/>
                <MenuIcon open={openMenu} toggleMenu={() => setOpenMenu((v) => !v)}/>
                <div className="hidden lg:block">
                    <button onMouseEnter={() => setHovered(true)} onMouseLeave={toggleHover} className={' hidden relative lg:flex gap-2 items-center text-white text-sm font-medium bg-linear-to-r from-cyan-500 hover:from-cyan-600 to-purple-500 hover:to-purple-600 rounded-sm px-4 py-1.5 cursor-pointer'}> Resume <span className={ `size-0 border-l-5 border-r-5 border-t-5 border-solid border-l-transparent border-r-transparent border-t-white transition-transform duration-300 ${hovered && 'rotate-180'}` }></span></button>
                    <div className={ clsx(popoverBaseClass, popoverActiveClass) }>
                       <a className={ `text-cyan-500 text-sm font-medium border border-box border-cyan-900 hover:border-cyan-500 hover:bg-cyan-500/10 ${hovered ? 'block pointer-events-auto cursor-pointer' : 'hidden pointer-events-none cursor-default'} p-4`} onMouseEnter={() => hovered && setHovered(true)} onMouseLeave={() => setHovered(false)} href="CV_Saad_Kalyati_FR.pdf" target="_blank">French</a>
                       <a className={ `text-cyan-500 text-sm font-medium border border-box border-cyan-900 hover:border-cyan-500 hover:bg-cyan-500/10 ${hovered ? 'block pointer-events-auto cursor-pointer' : 'hidden pointer-events-none cursor-default'} p-4`} onMouseEnter={() => hovered && setHovered(true)} onMouseLeave={() => setHovered(false)} href="CV_Saad_Kalyati_EN.pdf" target="_blank">English</a>
                    </div>
                </div>
            </div>
            <MobileHeader open={openMenu} closeMenu={closeMenu} scroll={scroll}/>
        </header>
    ) 
}

export default Header;