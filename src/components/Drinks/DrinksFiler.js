import React from "react";
import './DrinksFiler.css'

const DrinksFilter = (props) => {

    const changeHandler = (e) => {
        e.preventDefault();
        props.onFilteredMonth(e.target.value);
    }

    return (
        <div className='drinks-filter'>
            <div className='drinks-filter__control'>
                <label>Filter by month</label>
                <select value={props.month} onChange={changeHandler}>
                    <option value='01'>January</option>
                    <option value='02'>February</option>
                    <option value='03'>March</option>
                    <option value='04'>April</option>
                    <option value='05'>May</option>
                    <option value='06'>June</option>
                    <option value='07'>July</option>
                    <option value='08'>August</option>
                    <option value='09'>September</option>
                    <option value='10'>Octomber</option>
                    <option value='11'>Novomber</option>
                    <option value='12'>December</option>
                </select>
            </div>
        </div>
    )
}

export default DrinksFilter;