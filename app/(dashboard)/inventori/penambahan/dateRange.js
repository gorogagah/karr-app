"use client"

import { Button, Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DateRange(){
    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const years = [...Array((new Date()).getFullYear() - 2025 + 1).keys()].map(i => i + 2025);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    return (
        <>
            <div className="pr-3">
                <DatePicker 
                    selected={startDate}
                    showIcon 
                    toggleCalendarOnIconClick
                    onChange={(date) => setStartDate(date)} 
                    placeholderText="Dari"
                    icon={<CalendarDaysIcon className="w-5! h-5! text-gray-500! dark:text-gray-400! py-2.5! pl-3!"/>}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-10! p-2.5! dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    renderCustomHeader={({date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled}) => (
                        <div className="flex justify-between mb-2">
                            <Button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="cursor-pointer bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                <ArrowLeftIcon className="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white stroke-2"/>
                            </Button>
                            <div className="relative">
                                <Select value={months[date.getMonth()]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))} className="cursor-pointer appearance-none flex items-center text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 py-2.5 pl-5 pr-8 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                    {months.map((m) => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </Select>
                                <ChevronDownIcon className="pointer-events-none absolute top-3 right-3 w-4 h-4 ml-2 text-gray-800 dark:text-white" aria-hidden="true"/>
                            </div>
                            <div className="relative">
                                <Select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(value)} className="cursor-pointer appearance-none flex items-center text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 py-2.5 pl-5 pr-8 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                    {years.map((y) => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </Select>
                                <ChevronDownIcon className="pointer-events-none absolute top-3 right-3 w-4 h-4 ml-2 text-gray-800 dark:text-white" aria-hidden="true"/>
                            </div>
                            <Button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="cursor-pointer bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                <ArrowRightIcon className="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white stroke-2"/>
                            </Button>
                        </div>
                    )}
                    calendarClassName="flowbite"
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    maxDate={new Date()}
                    showDisabledMonthNavigation
                    shouldCloseOnSelect={false}
                />
            </div>
            <DatePicker 
                selected={endDate}
                showIcon 
                toggleCalendarOnIconClick
                onChange={(date) => setEndDate(date)} 
                placeholderText="Sampai"
                icon={<CalendarDaysIcon className="w-5! h-5! text-gray-500! dark:text-gray-400! py-2.5! pl-3!"/>}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-10! p-2.5! dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                renderCustomHeader={({date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled}) => (
                    <div className="flex justify-between mb-2">
                        <Button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="cursor-pointer bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <ArrowLeftIcon className="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white stroke-2"/>
                        </Button>
                        <div className="relative">
                            <Select value={months[date.getMonth()]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))} className="cursor-pointer appearance-none flex items-center text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 py-2.5 pl-5 pr-8 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                {months.map((m) => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            </Select>
                            <ChevronDownIcon className="pointer-events-none absolute top-3 right-3 w-4 h-4 ml-2 text-gray-800 dark:text-white" aria-hidden="true"/>
                        </div>
                        <div className="relative">
                            <Select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(value)} className="cursor-pointer appearance-none flex items-center text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 py-2.5 pl-5 pr-8 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                {years.map((y) => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </Select>
                            <ChevronDownIcon className="pointer-events-none absolute top-3 right-3 w-4 h-4 ml-2 text-gray-800 dark:text-white" aria-hidden="true"/>
                        </div>
                        <Button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="cursor-pointer bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <ArrowRightIcon className="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white stroke-2"/>
                        </Button>
                    </div>
                )}
                calendarClassName="flowbite"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                maxDate={new Date()}
                showDisabledMonthNavigation
                shouldCloseOnSelect={false}
            />
        </>
    );
}