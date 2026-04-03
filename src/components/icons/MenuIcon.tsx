import menu from '../../assets/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg';
import close from '../../assets/close_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg';
import clsx from 'clsx';

const MenuIcon = ({open, toggleMenu} : {open : boolean, toggleMenu: () => void}) => {
    const baseClass = 'size-8'
    return (
        <a className='lg:hidden p-1 hover:bg-cyan-900/30 rounded-full cursor-pointer' onClick={toggleMenu}>{open ? <img src={close} className={clsx(baseClass)}></img> : <img src={menu} className={clsx(baseClass)}></img>}</a>
    )
}

export default MenuIcon;