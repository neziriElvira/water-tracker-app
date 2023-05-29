import React from "react";
import Chart from "../Chart/Chart";

const DrinksChart = props => {

    const days = [
        { day: '1', value: 0 },
        { day: '2', value: 0 },
        { day: '3', value: 0 },
        { day: '4', value: 0 },
        { day: '5', value: 0 },
        { day: '6', value: 0 },
        { day: '7', value: 0 },
        { day: '8', value: 0 },
        { day: '9', value: 0 },
        { day: '10', value: 0 },
        { day: '11', value: 0 },
        { day: '12', value: 0 },
        { day: '13', value: 0 },
        { day: '14', value: 0 },
        { day: '15', value: 0 },
        { day: '16', value: 0 },
        { day: '17', value: 0 },
        { day: '18', value: 0 },
        { day: '19', value: 0 },
        { day: '20', value: 0 },
        { day: '21', value: 0 },
        { day: '22', value: 0 },
        { day: '23', value: 0 },
        { day: '24', value: 0 },
        { day: '25', value: 0 },
        { day: '26', value: 0 },
        { day: '27', value: 0 },
        { day: '28', value: 0 },
        { day: '29', value: 0 },
        { day: '30', value: 0 },
        { day: '31', value: 0 },
    ];

    for (const drink of props.drinks) {
        const drinkDay = drink.date.getDate();
        days[drinkDay].value += drink.amount;
    }


    return (
        <div>
            <Chart valueData={days} />
        </div>
    )
};

export default DrinksChart;