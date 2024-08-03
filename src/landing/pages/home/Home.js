import React from "react";
import './home.scss'; 
import { Button } from 'primereact/button';
import { Card } from "../../components/card/Card";
import { IoMdRestaurant } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";


const Home = () => {
    const cardsInfo = [{
        icon: <IoMdRestaurant size={40} />, 
        title: 'Menús', 
        text: 'Crea y personaliza menús digitales atractivos y modernos para tu restaurante. Actualiza platos y precios en tiempo real para mantener a tus clientes siempre informados.', 
        action: 'Descubre Más',
    }, {
        icon: <IoPhonePortraitOutline size={40} />, 
        title: 'Acceso', 
        text: 'Tus menús digitales estarán disponibles desde cualquier dispositivo móvil, tablet o computadora, brindando a tus clientes una experiencia cómoda y accesible.', 
        action: 'Aprende Cómo',
    }, {
        icon: <IoStatsChart size={40} />, 
        title: 'Visibilidad', 
        text: 'Aumenta la visibilidad de tu restaurante y atrae más clientes con menús interactivos y fáciles de compartir en redes sociales y plataformas de reseñas.', 
        action: 'Empieza Ahora',
    }];

    return(<>
        <section>
            <div className="home__banner">
                <h1 className="poppins-bold">Crea <span>Menús</span> Digitales Para <span>Restaurantes</span></h1>
                <p>Ofrecemos menús digitales interactivos que encantan a tus clientes y simplifican la gestión del restaurante. .</p>
                <Button label="Empezar ahora" severity="warning" />
            </div>
        </section>
        <section className="home__cards-container">
            {cardsInfo.map((card) => {
                return <Card icon={card.icon} title={card.title} text={card.text} action={card.action} />
            })}
        </section>
    </>);
}

export { Home }; 