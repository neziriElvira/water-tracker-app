import React from "react";
import './DrinkItem.css';
import DrinkDate from "./DrinkDate";
import Card from "../UI/Card";
const DrinkItem = () => {


    const drinkTtitle = 'Glass';
    const drinkAmount = 1;

    return (
        <Card className="drink-item">
            <DrinkDate />
            <div className="drink-item__description">
                <h2>{drinkTtitle}</h2>
                <div className="drink-item__number">{drinkAmount}</div>
            </div>
        </Card>
    );
}

export default DrinkItem;