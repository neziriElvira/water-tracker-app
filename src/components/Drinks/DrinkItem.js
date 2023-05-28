import React from "react";
import './DrinkItem.css';
import DrinkDate from "./DrinkDate";
import Card from "../UI/Card";
const DrinkItem = (props) => {


    return (
        <li>
            <Card className="drink-item">
                <DrinkDate date={props.date} />
                <div className="drink-item__description">
                    <h2>{props.title}</h2>
                </div>
            </Card>
        </li>
    );
}

export default DrinkItem;