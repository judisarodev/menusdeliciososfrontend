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
            label: 'Planes',
            url: '/'
        },
        {
            id: 3,
            label: 'Bog',
            url: '/'
        },
        {
            id: 4,
            label: 'Sobre nosotros',
            url: '/'
        },
        {
            id: 5,
            label: 'Plantillas',
            url: '/'
        }
    ];

    const icon = <img className="menu__icon" src={ isAtTop ? blackLogo : whiteLogo } width={'90px'} alt="Logo"/>;

    const menuStyles = {
        backgroundColor: isAtTop ? 'black' : 'white'
    }

    return(<>
        <nav>
            <Menubar style={menuStyles} start={icon} model={items}/>
        </nav>
    </>);
}

export { Menu }; 