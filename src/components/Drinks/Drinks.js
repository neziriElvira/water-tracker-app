import React, { useState } from "react";
import DrinkItem from "./DrinkItem";
import './Drinks.css';
import Card from "../UI/Card";
import DrinksFilter from "./DrinksFiler";

const Drinks = (props) => {

    const [selectedMonth, setSelectedMonth] = useState('02');

    const filteredMonthHendler = (month) => {
        setSelectedMonth(month)

    }


    return (
        <Card className='drinks'>
            <DrinksFilter month={selectedMonth} onFilteredMonth={filteredMonthHendler} />
            <DrinkItem title={props.items[0].text} amount={props.items[0].amount} date={props.items[0].date} />
            <DrinkItem title={props.items[1].text} amount={props.items[1].amount} date={props.items[1].date} />
            <DrinkItem title={props.items[2].text} amount={props.items[2].amount} date={props.items[2].date} />
        </Card>
    )
}

export default Drinks;