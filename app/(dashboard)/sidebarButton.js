"use client"

import { Button } from '@headlessui/react';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useGlobalContext } from './globalProvider';
import cx from '../utils/cx';

export default function SidebarButton(){
    const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

    return (
        <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <Bars3CenterLeftIcon className={cx('size-6 stroke-3', isSidebarOpen && "hidden")}/>
            <XMarkIcon className={cx('size-6 stroke-3', !isSidebarOpen && "hidden")}/>
        </Button>
    );
}