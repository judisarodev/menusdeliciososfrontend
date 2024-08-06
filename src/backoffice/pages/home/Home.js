import React, { useState } from "react";
import { FaUsers } from "react-icons/fa6";
import './home.scss';

const Home = () => {

    const traffic = 10;

    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const [month, setMonth] = useState(months[0]);
    
    return(<>
        <div className="bhome__container">
            <div className="bhome__metrics-container">
                <div className="bhome__monthly-active-users">
                    <p className="monthly-active-users__month">{ month }</p>
                    <FaUsers size={50}/>
                    <p>Tu menú ha sido consultado por <span className="monthly-active-users__traffic">{ traffic }</span> personas</p>
                </div>
            </div>
            <div className="bhome__dishes-container">

            </div>
        </div>
    </>);
}

export { Home }; 