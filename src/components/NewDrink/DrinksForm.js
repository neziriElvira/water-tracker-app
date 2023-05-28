import React, { useState } from "react";
import './DrinksForm.css';

const DrinksForm = (props) => {

    const [item, setItems] = useState(props.items);
    const [drinkAmount, setDrinkAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const clickHandler = (event) => {
        event.preventDefault();
        setDrinkAmount(parseFloat(event.target.value));
        //   console.log(event.target);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const userInput = {
            drink: drinkAmount,
            date: new Date(enteredDate)
        };
        props.onAddDrink(userInput);
        console.log(userInput);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-drink_controls">
                <div className='new-drink__control'>
                    <button onClick={clickHandler} value={item[0].amount}>{item[0].text}</button>
                </div>
                <div className='new-drink__control'>
                    <button onClick={clickHandler} value={item[1].amount}>{item[1].text}</button>
                </div>
                <div className='new-drink__control'>
                    <button onClick={clickHandler} value={item[2].amount}>{item[2].text}</button>
                </div>
                <div className='new-drink__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
                <div className='new-drink__actions'>
                    <button type='button'>Cancel</button>
                    <button type='submit' >Drink</button>
                </div>
            </div>
        </form>
    )
};

export default DrinksForm;