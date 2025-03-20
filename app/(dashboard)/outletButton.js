"use client"

import { Button } from '@headlessui/react';
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid';
import { useGlobalContext } from './globalProvider';

export default function OutletButton(){
    const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

    return (
        <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-500 rounded-lg sm:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Toko</span>
            <BuildingStorefrontIcon className='size-6'/>
        </Button>
    );
}