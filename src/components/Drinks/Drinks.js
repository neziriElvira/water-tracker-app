import React, { useState } from "react";
import './Drinks.css';
import Card from "../UI/Card";
import DrinksFilter from "./DrinksFiler";
import DrinksList from "./DrinksList";
import DrinksChart from "./DrinksChart";

const Drinks = (props) => {

    const [selectedMonth, setSelectedMonth] = useState('Jun');

    const filteredMonthHendler = (month) => {
        setSelectedMonth(month);
        console.log(selectedMonth);
    }

    const filteredDrinks = props.items.filter(month => {
        return month.date.toLocaleString('en-US', { month: 'short' }) === selectedMonth;
    });

    return (
        <Card className='drinks'>
            <DrinksFilter month={selectedMonth} onFilteredMonth={filteredMonthHendler} />
            <DrinksChart drinks={filteredDrinks} />
            <DrinksList items={filteredDrinks} />
        </Card>
    )
}

export default Drinks;