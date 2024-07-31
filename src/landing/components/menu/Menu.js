import React from "react";
import { Menubar } from 'primereact/menubar';
import './menu.scss';
import logo from './../../../assets/logo/black.png';

const Menu = () => {

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

    const icon = <img className="menu__icon" src={ logo } width={'90px'} alt="Logo"/>;

    return(<>
        <nav>
            <Menubar start={icon} model={items}/>
        </nav>
    </>);
}

export { Menu }; 