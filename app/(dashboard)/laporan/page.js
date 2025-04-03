"use client"

import CustomTooltip from "@/app/utils/customTooltip";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { name: '1 Mar', Pendapatan: 200000, Pengeluaran: 800000, Keuntungan: 400000 },
    { name: '2 Mar', Pendapatan: 800000, Pengeluaran: 600000, Keuntungan: 200000 },
    { name: '3 Mar', Pendapatan: 900000, Pengeluaran: 500000, Keuntungan: 400000 },
    { name: '4 Mar', Pendapatan: 1500000, Pengeluaran: 1200000, Keuntungan: 300000 },
    { name: '5 Mar', Pendapatan: 1100000, Pengeluaran: 700000, Keuntungan: 400000 },
    { name: '6 Mar', Pendapatan: 1300000, Pengeluaran: 900000, Keuntungan: 400000 },
    { name: '7 Mar', Pendapatan: 1000000, Pengeluaran: 750000, Keuntungan: 250000 },
    { name: '8 Mar', Pendapatan: 1800000, Pengeluaran: 1100000, Keuntungan: 700000 },
    { name: '9 Mar', Pendapatan: 900000, Pengeluaran: 500000, Keuntungan: 400000 },
    { name: '10 Mar', Pendapatan: 1400000, Pengeluaran: 900000, Keuntungan: 500000 },
    { name: '11 Mar', Pendapatan: 1200000, Pengeluaran: 800000, Keuntungan: 400000 },
    { name: '12 Mar', Pendapatan: 1600000, Pengeluaran: 1200000, Keuntungan: 400000 },
    { name: '13 Mar', Pendapatan: 1000000, Pengeluaran: 600000, Keuntungan: 400000 },
    { name: '14 Mar', Pendapatan: 1300000, Pengeluaran: 1000000, Keuntungan: 300000 },
    { name: '15 Mar', Pendapatan: 1100000, Pengeluaran: 700000, Keuntungan: 400000 },
    { name: '16 Mar', Pendapatan: 1500000, Pengeluaran: 1200000, Keuntungan: 300000 },
    { name: '17 Mar', Pendapatan: 1200000, Pengeluaran: 900000, Keuntungan: 300000 },
    { name: '18 Mar', Pendapatan: 1400000, Pengeluaran: 1000000, Keuntungan: 400000 },
    { name: '19 Mar', Pendapatan: 1000000, Pengeluaran: 700000, Keuntungan: 300000 },
    { name: '20 Mar', Pendapatan: 1800000, Pengeluaran: 1300000, Keuntungan: 500000 },
    { name: '21 Mar', Pendapatan: 1500000, Pengeluaran: 1100000, Keuntungan: 400000 },
    { name: '22 Mar', Pendapatan: 900000, Pengeluaran: 600000, Keuntungan: 300000 },
    { name: '23 Mar', Pendapatan: 1200000, Pengeluaran: 900000, Keuntungan: 300000 },
    { name: '24 Mar', Pendapatan: 1000000, Pengeluaran: 750000, Keuntungan: 250000 },
    { name: '25 Mar', Pendapatan: 1700000, Pengeluaran: 1200000, Keuntungan: 500000 },
    { name: '26 Mar', Pendapatan: 1300000, Pengeluaran: 900000, Keuntungan: 400000 },
    { name: '27 Mar', Pendapatan: 1200000, Pengeluaran: 800000, Keuntungan: 400000 },
];

export default function Report() {
    const [opacity, setOpacity] = useState({
        Pendapatan: 1,
        Pengeluaran: 1,
        Keuntungan: 1,
    });

    const handleMouseEnterLegend = (o) => {
        const { dataKey } = o;

        let op = {
            Pendapatan: 0.3,
            Pengeluaran: 0.3,
            Keuntungan: 0.3,
        }

        op[dataKey] = 1;
        setOpacity(op);
    };

    const handleMouseLeaveLegend = (o) => {
        setOpacity({
            Pendapatan: 1,
            Pengeluaran: 1,
            Keuntungan: 1,
        });
    };

    return (
        <div className="px-4 pt-6">
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">Rp. 453.850</span>
                        <h3 className="flex text-base font-light text-gray-500 dark:text-gray-400">
                            <ArrowUpIcon className="text-green-500 dark:text-green-400 w-5 h-5" />
                            <span className="font-medium text-green-500 dark:text-green-400 mr-1.5">12.5%</span>
                            keuntungan bulan ini
                        </h3>
                    </div>
                    <Popover>
                        <PopoverButton className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Bulan ini
                            <ChevronDownIcon className="w-4 h-4 ml-2 stroke-2" />
                        </PopoverButton>
                        <PopoverPanel transition anchor="bottom end" className="text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                            <div className="px-4 py-3" role="none">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                                    Mar 01, 2025 - Mar 27, 2025
                                </p>
                            </div>
                            <ul className="py-1" role="none">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Bulan ini</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Bulan lalu</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Quarter 1</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Quarter 2</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Quarter 3</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Tahun ini</a>
                                </li>
                            </ul>
                        </PopoverPanel>
                    </Popover>
                </div>
                <ResponsiveContainer minHeight={435}>
                    <LineChart data={data} margin={{ top: 0, right: 24, left: 24, bottom: 24 }}>
                        <Line type="monotone" dataKey="Pendapatan" dot={{ fill: "#0ea5e9", stroke: "#fff", strokeWidth: 2, r: 5, opacity: opacity.Pendapatan }} activeDot={{ fill: "#0ea5e9", stroke: "#fff", strokeWidth: 2, r: 7 }} stroke="#0ea5e9" strokeWidth={3} strokeOpacity={opacity.Pendapatan} />
                        <Line type="monotone" dataKey="Pengeluaran" dot={{ fill: "#f59e0b", stroke: "#fff", strokeWidth: 2, r: 5, opacity: opacity.Pengeluaran }} activeDot={{ fill: "#f59e0b", stroke: "#fff", strokeWidth: 2, r: 7 }} stroke="#f59e0b" strokeWidth={3} strokeOpacity={opacity.Pengeluaran} />
                        <Line type="monotone" dataKey="Keuntungan" dot={{ fill: "#10b981", stroke: "#fff", strokeWidth: 2, r: 5, opacity: opacity.Keuntungan }} activeDot={{ fill: "#10b981", stroke: "#fff", strokeWidth: 2, r: 7 }} stroke="#10b981" strokeWidth={3} strokeOpacity={opacity.Keuntungan} />
                        <CartesianGrid vertical={false} stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis domain={['dataMin - 100000', 'dataMax + 100000']} axisLine={false} tickLine={false} />
                        <Legend verticalAlign="bottom" iconSize={12} iconType="circle" formatter={(value, entry, index) => <span className="pl-4 mr-6 text-sm text-gray-500 dark:text-gray-400">{value}</span>} wrapperStyle={{ bottom: 8 }} onMouseEnter={handleMouseEnterLegend} onMouseLeave={handleMouseLeaveLegend} />
                        <Tooltip content={<CustomTooltip />} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 my-4 xl:grid-cols-2 2xl:grid-cols-3">
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Total pendapatan</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">Rp 32.800.000</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <ArrowUpIcon className="w-4 h-4" /> 12.5%
                            </span>
                            vs bulan lalu
                        </p>
                    </div>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Total pengeluaran</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">Rp 23.600.000</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <ArrowUpIcon className="w-4 h-4" />
                                3,4%
                            </span>
                            vs bulan lalu
                        </p>
                    </div>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Total keuntungan</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">Rp 10.200.000</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-red-600 dark:text-red-500">
                                <ArrowDownIcon className="w-4 h-4" />
                                3,4%
                            </span>
                            vs bulan lalu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}