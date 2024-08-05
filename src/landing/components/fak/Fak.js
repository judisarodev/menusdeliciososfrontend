import React from "react";
import './fak.scss';
import { Accordion, AccordionTab } from 'primereact/accordion';



const FakView = ({faks}) => {
    return(
    <Accordion className="fak__container">
        {faks.map((fak) => {
            return(<AccordionTab header={fak.question}>
                <p>
                    {fak.answer}
                </p>
            </AccordionTab>);
        })}
    </Accordion>);
}

export { FakView };