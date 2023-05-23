import React from "react";
import DrinkItem from "./DrinkItem";
import './Drinks.css';
import Card from "../UI/Card";

const Drinks = () => {
    return (
        <Card className='drinks'>
            <DrinkItem />
        </Card>
    )
}

export default Drinks;