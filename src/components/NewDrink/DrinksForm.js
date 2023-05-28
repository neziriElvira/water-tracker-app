import React, { useState } from "react";
import './DrinksForm.css';

const DrinksForm = (props) => {

    const [enteredText, setEnteredText] = useState('');
    const [drinkAmount, setDrinkAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const clickHandler = (event) => {
        event.preventDefault();
        setDrinkAmount(parseFloat(event.target.value));
        if (event.target.value === '250') {
            setEnteredText('Glass of 250ml');
        } else if (event.target.value === '500') {
            setEnteredText('glass of 500ml');
        } else if (event.target.value === '700') {
            setEnteredText('glass of 700ml');
        }
        //   console.log(event.target);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const userInput = {
            text: enteredText,
            amount: drinkAmount,
            date: new Date(enteredDate)
        };
        props.onAddDrink(userInput);
        console.log(userInput);
    }

    const cancelClickHandler = () => {
        props.onCancelClick();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-drink_controls">
                <div className='new-drink__control'>
                    <button onClick={clickHandler} value='250'>glass of 250</button>
                </div>
                <div className='new-drink__control'>
                    <button onClick={clickHandler} value='500'>glass of 500</button>
                </div>
                <div className='new-drink__control'>
                    <button onClick={clickHandler} value='700'>glass of 700</button>
                </div>
                <div className='new-drink__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
                <div className='new-drink__actions'>
                    <button type='button' onClick={cancelClickHandler}>Cancel</button>
                    <button type='submit' >Drink</button>
                </div>
            </div>
        </form>
    )
};

export default DrinksForm;