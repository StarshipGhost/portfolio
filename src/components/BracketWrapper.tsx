import clsx from 'clsx';

const BracketWrapper = ({children, color, className} : {children: string, color: string, className: string}) => {
    return (
        <div className={className}>
            <span className={ clsx(color) }>{'<'}</span> 
            {children}
            <span className={ clsx(color) }>{'/>'}</span>
        </div>
    ) 
}

export default BracketWrapper;