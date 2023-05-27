import React from "react";
import DrinksForm from "./DrinksForm";
import './NewDrink.css';

const NewDrink = (props) => {
    return (
        <div className="new-drink">
            <DrinksForm items={props.items} />
        </div>
    )
};

export default NewDrink;