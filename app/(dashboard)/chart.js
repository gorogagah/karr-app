"use client"

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

const options = {
    scales: {
        x: {
            grid: {
                drawBorder: false,
                display: false,
            },
        },
        y: {
            grid: {
                color: "rgb(55, 65, 81)",
            }
        },
    },
};

const labels = ['16 Mar', '17 Mar', '18 Mar', '19 Mar', '20 Mar', '21 Mar', '22 Mar'];

const data = {
    labels,
    datasets: [{
        data: [63560, 62180, 61560, 65260, 63560, 62560, 66160],
    }],
};

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);
ChartJS.defaults.color = "rgb(156, 163, 175)";
ChartJS.defaults.font.size = "14px";
ChartJS.defaults.elements.point.radius = 4;
ChartJS.defaults.elements.point.backgroundColor = "#0ea5e9";
ChartJS.defaults.elements.point.borderWidth = 2;
ChartJS.defaults.elements.point.borderColor = "#fff";
ChartJS.defaults.elements.point.hoverRadius = 8;
ChartJS.defaults.elements.point.hoverBorderWidth = 2;
ChartJS.defaults.elements.line.tension = 0.25;
ChartJS.defaults.elements.line.borderColor = "#0ea5e9";

export default function Chart(){
    return (
        <div className="min-h-[435px]">
            <Line options={options} data={data} />
        </div>
    );
}