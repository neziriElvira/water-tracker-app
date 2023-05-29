import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    return (
        <div className="chart">
            {props.valueData.map(day => {
                return <ChartBar value={day.value} maxValue={null} label={day.label} />;
            })
            }
        </div>
    )
}

export default Chart;