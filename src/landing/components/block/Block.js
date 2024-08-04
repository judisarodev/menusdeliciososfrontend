import React from "react";
import './block.scss';

const Block = ({ image, title, subtitle, description, imageLeftSide }) => {

    return(<div className="block__container">
        <div className={`block__image ${imageLeftSide ? 'block__left-orientation' : 'block__right-orientation'}`}>
            <img src={image} alt="info"/>
        </div>
        <div className={`block__info ${!imageLeftSide ? 'block__left-orientation' : 'block__right-orientation'}`}>
            <p className="block__info-subtitle">{subtitle}</p>
            <p className="block__info-title">{title}</p>
            <p className="block__info-description">{description}</p>
        </div>
    </div>);
}

export { Block }; 