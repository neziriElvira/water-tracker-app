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
                    <option value='Jan'>January</option>
                    <option value='Feb'>February</option>
                    <option value='Mar'>March</option>
                    <option value='Apr'>April</option>
                    <option value='May'>May</option>
                    <option value='Jun'>June</option>
                    <option value='Jul'>July</option>
                    <option value='Aug'>August</option>
                    <option value='Sep'>September</option>
                    <option value='Oct'>Octomber</option>
                    <option value='Nov'>Novomber</option>
                    <option value='Dec'>December</option>
                </select>
            </div>
        </div>
    )
}

export default DrinksFilter;