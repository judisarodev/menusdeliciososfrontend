import React from 'react';
import { IoStatsChart } from 'react-icons/io5';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { IoMdRestaurant } from 'react-icons/io';
import { Button } from 'primereact/button';
import { InfoCard } from '../../components/info-card/InfoCard';
import { Card } from '../../components/card/Card';
import { Block } from '../../components/block/Block';
import blockImage1 from './../../../assets/home/cooking.jpg';
import blockImage2 from './../../../assets/home/usage.jpg';
import './home.scss'; 

const Home = () => {
    const cardsInfo = [{
        id: 1,
        icon: <IoMdRestaurant className="home__card-icon" size={40} />, 
        title: 'Diseños', 
        text: 'Crea menús digitales atractivos para tu restaurante. Actualiza platos y precios en tiempo real.', 
        action: 'Descubre Más',
    }, {
        id: 2,
        icon: <IoPhonePortraitOutline className="home__card-icon" size={40} />, 
        title: 'Acceso', 
        text: 'Tus menús digitales estarán disponibles desde cualquier dispositivo móvil, tablet o computadora.', 
        action: 'Aprende Cómo',
    }, {
        id: 3,
        icon: <IoStatsChart className="home__card-icon" size={40} />, 
        title: 'Visibilidad', 
        text: 'Aumenta la visibilidad de tu restaurante y atrae más clientes con menús interactivos y agradables.', 
        action: 'Empieza Ahora',
    }];

    const infoCard = {
        title: '¡Mes Gratis para Probar Todas las Funciones!',
        description: 'Prueba nuestro servicio gratis por un mes. Disfruta de todas las funciones premium sin compromiso. Aprovecha esta oferta exclusiva y mejora tu experiencia. ¡Inscríbete ahora y comienza hoy mismo',
        smallText: 'Oferta por tiempo limitado'
    };

    const blocks = [{
        id: 1,
        image: blockImage1,
        title: 'Personaliza Tu Menú',
        subtitle: 'Ajusta Cada Detalle',
        description: 'Con nuestra plataforma, puedes crear y personalizar menús digitales de forma sencilla. Añade y edita platos, cambia precios en tiempo real y elige entre múltiples plantillas para reflejar el estilo único de tu restaurante. Ofrece a tus clientes una experiencia visual atractiva y moderna que los invite a volver.',
        imageLeftSide: true
    }, {
        id: 2,
        image: blockImage2,
        title: 'Accesibilidad y Comodidad',
        subtitle: 'Disponible en Todos los Dispositivos',
        description: 'Tus menús digitales estarán accesibles desde cualquier dispositivo móvil, tablet o computadora. Esto permite a tus clientes explorar y elegir sus platos favoritos desde la comodidad de su hogar o en tu restaurante. Mejora la experiencia del cliente y facilita la gestión del menú con nuestra tecnología intuitiva y fácil de usar.',
        imageLeftSide: false
    }];

    return(<div>
    
        <section className="home__banner">
            <h1 className="poppins-bold">Crea <span>Menús</span> Digitales Para <span>Restaurantes</span></h1>
            <Button label="Empezar ahora" severity="warning" />
        </section>
        <section className="home__floating-cards-container">
            <div className="home__cards-container">
                {cardsInfo.map((card) => {
                    return <Card key={card.id} icon={card.icon} title={card.title} text={card.text} action={card.action} />
                })}
            </div>
        </section>
        <section>
            <InfoCard title={infoCard.title} description={infoCard.description} />
        </section>
        <section>
            {blocks.map((block) => (
                <Block key={block.id} image={block.image} title={block.title} subtitle={block.subtitle} description={block.description} imagePosition={block.imagePosition}/>
            ))}
        </section>
            
        
    </div>);
}

export { Home }; 