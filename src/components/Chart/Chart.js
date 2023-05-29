import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    const days = props.valueData.map(day => day.value);
    const maxValue = Math.max(...days);

    return (
        <div className="chart">
            {props.valueData.map(day => {
                return <ChartBar key={day.day} value={day.value} maxValue={maxValue} label={day.day} />;
            })
            }
        </div>
    )
}

export default Chart;