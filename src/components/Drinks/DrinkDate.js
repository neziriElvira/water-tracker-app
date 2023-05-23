import React from "react";
import './DrinkDate.css';
const DrinkDate = () => {

    const drinkingDate = new Date(2021, 2, 28);
    const month = drinkingDate.toLocaleString('en-US', { month: 'long' });
    const day = drinkingDate.toLocaleString('en-US', { day: '2-digit' });
    const year = drinkingDate.getFullYear();

    return (
        <div className="drink-date">
            <div className="drink-date__month">{month}</div>
            <div className="drink-date__day">{day}</div>
            <div className="drink-date__year">{year}</div>
        </div>
    )
}

export default DrinkDate;