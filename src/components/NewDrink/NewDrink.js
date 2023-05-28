import React from "react";
import DrinksForm from "./DrinksForm";
import './NewDrink.css';

const NewDrink = (props) => {

    const addDrinkHandler = (enteredDrink) => {
        const drinkData = {
            ...enteredDrink,
            id: Math.random()
        }

        props.onAddDrink(drinkData);
    }

    return (
        <div className="new-drink">
            <DrinksForm items={props.items} onAddDrink={addDrinkHandler} />
        </div>
    )
};

export default NewDrink;