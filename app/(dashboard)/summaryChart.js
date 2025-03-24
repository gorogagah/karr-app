"use client"

import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const options = {
    scales: {
        x: {
            grid: {
                drawBorder: false,
                display: false,
            },
            ticks: {
                display: false,
            }
        },
        y: {
            grid: {
                drawBorder: false,
                display: false,
            },
            ticks: {
                display: false,
            }
        },
    },
};

const labels = ['16 Mar', '17 Mar', '18 Mar', '19 Mar', '20 Mar', '21 Mar', '22 Mar'];

const data = {
    labels,
    datasets: [{
        barPercentage: 1,
        categoryPercentage: 1,
        barThickness: 16,
        data: [170, 180, 164, 145, 194, 170, 155],
    }],
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
ChartJS.defaults.elements.bar.backgroundColor = "#0ea5e9";
ChartJS.defaults.elements.bar.borderRadius = 4;

export default function SummaryChart(){
    return (
        <div className="grid w-full grid-cols-1 gap-4 my-4 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="w-full">
                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Produk terjual</h3>
                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                            <ArrowUpIcon className="w-4 h-4"/> 12.5% 
                        </span>
                        vs bulan lalu
                    </p>
                </div>
                <div class="w-full" className="min-h-[155px]">
                    <Bar options={options} data={data}/>
                </div>
            </div>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="w-full">
                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Users</h3>
                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                        </svg>
                        3,4% 
                        </span>
                        Since last month
                    </p>
                </div>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="w-full">
                    <h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Audience by age</h3>
                    <div className="flex items-center mb-2">
                        <div className="w-16 text-sm font-medium dark:text-white">50+</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-sky-600 h-2.5 rounded-full dark:bg-sky-500" style={{width: "18%"}}></div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-16 text-sm font-medium dark:text-white">40+</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-sky-600 h-2.5 rounded-full dark:bg-sky-500" style={{width: "15%"}}></div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-16 text-sm font-medium dark:text-white">30+</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-sky-600 h-2.5 rounded-full dark:bg-sky-500" style={{width: "60%"}}></div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-16 text-sm font-medium dark:text-white">20+</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-sky-600 h-2.5 rounded-full dark:bg-sky-500" style={{width: "30%"}}></div>
                        </div>
                    </div>
                </div>
                <div id="traffic-channels-chart" className="w-full"></div>
            </div>
        </div>
    );
}