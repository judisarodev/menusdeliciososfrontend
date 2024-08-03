import React from "react";
import './card.scss'
import { Button } from "primereact/button";

const Card = ({ icon, title, text, action }) => {
    return(
    <div className="card__container">
        <div>
            { icon }
        </div>
        <div className="card__title">
            { title }
        </div>
        <div className="card__text">
            { text }
        </div>
        <div className="card__button">
            <Button label='Ver más' outlined  severity="secondary"/>
        </div>
    </div>);
}

export { Card }; 