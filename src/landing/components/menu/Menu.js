import React, { useEffect, useState } from "react";
import { Menubar } from 'primereact/menubar';
import './menu.scss';
import blackLogo from './../../../assets/logo/white-text.png';
import whiteLogo from './../../../assets/logo/black-text.png';

const Menu = () => {

    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        function handleScroll(){
            if(window.scrollY < 50){
                setIsAtTop(true);
            }else{
                setIsAtTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []); 

    const items = [
        {
            id: 1,
            label: 'Inicio',
            url: '/'
        },
        {
            id: 2,
            label: 'Plantillas',
            url: '/'
        },
        {
            id: 3,
            label: 'Planes',
            url: '/'
        }
    ];

    const icon = <img className="menu__icon" src={ isAtTop ? blackLogo : whiteLogo } width={'90px'} alt="Logo"/>;

    return(<>
        <nav>
            <Menubar className={isAtTop ? 'menu__standard-color' : 'menu__light-color'} start={icon} model={items}/>
        </nav>
    </>);
}

export { Menu }; 