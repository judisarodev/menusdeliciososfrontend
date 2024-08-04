import React from "react";
import './home.scss'; 
import { Button } from 'primereact/button';
import { Card } from "../../components/card/Card";
import { IoMdRestaurant } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { InfoCard } from "../../components/info-card/InfoCard";


const Home = () => {
    const cardsInfo = [{
        icon: <IoMdRestaurant className="home__card-icon" size={40} />, 
        title: 'Diseños', 
        text: 'Crea menús digitales atractivos para tu restaurante. Actualiza platos y precios en tiempo real.', 
        action: 'Descubre Más',
    }, {
        icon: <IoPhonePortraitOutline className="home__card-icon" size={40} />, 
        title: 'Acceso', 
        text: 'Tus menús digitales estarán disponibles desde cualquier dispositivo móvil, tablet o computadora.', 
        action: 'Aprende Cómo',
    }, {
        icon: <IoStatsChart className="home__card-icon" size={40} />, 
        title: 'Visibilidad', 
        text: 'Aumenta la visibilidad de tu restaurante y atrae más clientes con menús interactivos y agradables.', 
        action: 'Empieza Ahora',
    }];

    const infoCard = {
        title: '¡Mes Gratis para Probar Todas las Funciones!',
        description: 'Prueba nuestro servicio gratis por un mes! Disfruta de todas las funciones premium sin compromiso. Aprovecha esta oferta exclusiva y mejora tu experiencia. ¡Inscríbete ahora y comienza hoy mismo',
        smallText: 'Oferta por tiempo limitado'
    };

    return(<>
    
        <section className="home__banner">
            <h1 className="poppins-bold">Crea <span>Menús</span> Digitales Para <span>Restaurantes</span></h1>
            <Button label="Empezar ahora" severity="warning" />
        </section>
        <section className="home__floating-cards-container">
            <div className="home__cards-container">
                {cardsInfo.map((card) => {
                    return <Card icon={card.icon} title={card.title} text={card.text} action={card.action} />
                })}
            </div>
        </section>

        <section>
            <InfoCard title={infoCard.title} description={infoCard.description} />
        </section>
            
        
    </>);
}

export { Home }; 