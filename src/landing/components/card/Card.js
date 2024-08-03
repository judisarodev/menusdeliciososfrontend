import React from "react";
import './card.scss'

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
        <div>
            <button onClick={action}></button>
        </div>
    </div>);
}

export { Card }; 