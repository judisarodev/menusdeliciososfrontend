import React from "react";
import './home.scss'; 
import { Button } from 'primereact/button';

const Home = () => {
    return(<>
        <section>
            <div className="home__banner">
                <h1 className="poppins-bold">Crea <span>Menús</span> Digitales Para <span>Restaurantes</span></h1>
                <p>Ofrecemos menús digitales interactivos que encantan a tus clientes y simplifican la gestión del restaurante. .</p>
                <Button label="Empezar ahora" severity="warning" />
            </div>
        </section>
    </>);
}

export { Home }; 