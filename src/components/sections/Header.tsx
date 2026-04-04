import { useState } from "react";
import BracketWrapper from "../BracketWrapper";
import MenuIcon from "../icons/MenuIcon";
import clsx from "clsx";

const MobileHeader = ({open, closeMenu}: {open: boolean, closeMenu: () => void}) => {
    const baseClass : string = "lg:hidden w-full absolute -z-1 bg-black flex flex-col p-4 transition -translate-y-full duration-300 delay-200"
    const activeClass : string = open ? 'translate-y-0' : '-translate-y-full'
    const itemClass : string = "text-sm text-neutral-400 font-medium hover:bg-cyan-900/30 p-3 rounded-md cursor-pointer";
    return (
        <ul className={clsx(baseClass, activeClass)}>
            <li className={clsx(itemClass)} onClick={closeMenu}><a>Home</a></li>
            <li className={clsx(itemClass)}onClick={closeMenu}><a>Tech Stack</a></li>
            <li className={clsx(itemClass)}onClick={closeMenu}><a>Projects</a></li>
            <li className={clsx(itemClass)}onClick={closeMenu}><a>Contacts</a></li>
            <li className='text-white text-sm text-center font-medium bg-linear-to-r from-cyan-500 hover:from-cyan-600 via-background to-purple-500 hover:to-purple-600 rounded-md p-2 cursor-pointer' onClick={closeMenu}><a>Resume</a></li>
        </ul>
    )
}

const DesktopHeader = () => {
    const itemClass : string = "text-sm text-neutral-400 font-medium hover:text-cyan-500 p-3 rounded-md cursor-pointer";
    return (
        <ul className="lg:flex hidden gap-2">
            <li className={clsx(itemClass)}>Home</li>
            <li className={clsx(itemClass)}>Tech Stack</li>
            <li className={clsx(itemClass)}>Projects</li>
            <li className={clsx(itemClass)}>Contacts</li>
        </ul>
    )
}

const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const closeMenu = () => {
        setOpenMenu(false);
    }
    return (
        <header className="sticky top-0 z-1">
            <div className="flex justify-between items-center bg-black lg:px-[5vw] px-4 py-2 border-b border-solid border-cyan-900/70">
                <BracketWrapper color='' className="text-xl lg:text-2xl font-bold bg-linear-to-r from-cyan-500 via-background to-purple-500 text-transparent bg-clip-text cursor-auto">
                    {`Portfolio `}
                </BracketWrapper>
                <DesktopHeader/>
                <MenuIcon open={openMenu} toggleMenu={() => setOpenMenu((v) => !v)}/>
                <button className={'hidden lg:block text-white text-sm font-medium bg-linear-to-r from-cyan-500 hover:from-cyan-600 via-background to-purple-500 hover:to-purple-600 px-4 py-1.5 rounded-md cursor-pointer'}>Resume</button>
            </div>
            <MobileHeader open={openMenu} closeMenu={closeMenu}/>
        </header>
    ) 
}

export default Header;