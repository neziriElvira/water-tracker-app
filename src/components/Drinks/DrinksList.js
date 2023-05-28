import React from "react";
import DrinkItem from "./DrinkItem";
import './DrinksList.css';

const DrinksList = (props) => {


    if (props.items.length === 0) {
        return <p className="drinks-list__fallback">There is no drink in this month.</p>
    }

    return (
        <ul className="drinks-list">
            {props.items.map(drink => {
                return <DrinkItem key={drink.id} title={drink.text} amount={drink.amount} date={drink.date} />
            })}
        </ul>

    )
};

export default DrinksList;