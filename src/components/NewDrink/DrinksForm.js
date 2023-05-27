import React, { useState } from "react";
import './DrinksForm.css';

const DrinksForm = (props) => {

    const [item, setItems] = useState(props.items);
    const [drinkAmount, setDrinkAmount] = useState('');

    const clickHandler = (event) => {
        event.preventDefault();
        setDrinkAmount(parseFloat(event.target.value));
        console.log(drinkAmount);
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form>
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
                    <input type='date' min='2019-01-01' max='2022-12-31' />
                </div>
                <div className='new-drink__actions'>
                    <button type='button'>Cancel</button>
                    <button type='submit' onSubmit={submitHandler}>Drink</button>
                </div>
            </div>
        </form>
    )
};

export default DrinksForm;