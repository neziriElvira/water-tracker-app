import React, { useState } from "react";
import DrinksForm from "./DrinksForm";
import './NewDrink.css';

const NewDrink = (props) => {

    const [formDisplayed, setFormDisplayed] = useState(false);

    const addDrinkHandler = (enteredDrink) => {
        const drinkData = {
            ...enteredDrink,
            id: Math.random()
        }

        props.onAddDrink(drinkData);
        setFormDisplayed(false);
    }

    const clickHandler = (e) => {
        setFormDisplayed(true);
    }

    const handleCancelClick = (e) => {
        setFormDisplayed(false);
    }

    return (
        <div className="new-drink">
            {formDisplayed &&
                <DrinksForm items={props.items} onAddDrink={addDrinkHandler} onCancelClick={handleCancelClick} />}
            {!formDisplayed &&
                <button onClick={clickHandler}>Add New Drink</button>}
        </div>
    )
};

export default NewDrink;