"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { ChartBarIcon, ChartPieIcon, ClipboardDocumentListIcon, Cog8ToothIcon, CubeIcon, DocumentChartBarIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useGlobalContext } from './globalProvider';

export default function Sidebar(){
    const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

    return (
        <>
            <aside className={cx("fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width", !isSidebarOpen && "hidden")}>
                <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col flex-1 pt-5 pb-4 px-3 overflow-y-auto space-y-1 divide-y divide-gray-200 dark:divide-gray-700">
                        <ul className="pb-2 space-y-2">
                            <li>
                                <Link href="/" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                    <ChartPieIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                                    <span className="ml-3">Dasbor</span>
                                </Link>
                            </li>
                            <li>
                                <Disclosure>
                                    <DisclosureButton className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                        <CubeIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Produk</span>
                                        <ChevronDownIcon className="size-6 group-data-[open]:rotate-180"/>
                                    </DisclosureButton>
                                    <DisclosurePanel>
                                        <ul className="py-2 space-y-2">
                                            <li>
                                                <span className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Opsi 1</span>
                                            </li>
                                            <li>
                                                <span className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Opsi 2</span>
                                            </li>
                                        </ul>
                                    </DisclosurePanel>
                                </Disclosure>
                            </li>
                            <li>
                                <Disclosure>
                                    <DisclosureButton className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                        <ClipboardDocumentListIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Inventori</span>
                                        <ChevronDownIcon className="size-6 group-data-[open]:rotate-180"/>
                                    </DisclosureButton>
                                    <DisclosurePanel>
                                        <ul className="py-2 space-y-2">
                                            <li>
                                                <span className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Opsi 1</span>
                                            </li>
                                            <li>
                                                <span className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Opsi 2</span>
                                            </li>
                                        </ul>
                                    </DisclosurePanel>
                                </Disclosure>
                            </li>
                            <li>
                                <Disclosure>
                                    <DisclosureButton className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                        <DocumentChartBarIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Laporan</span>
                                        <ChevronDownIcon className="size-6 group-data-[open]:rotate-180"/>
                                    </DisclosureButton>
                                    <DisclosurePanel>
                                        <ul className="py-2 space-y-2">
                                            <li>
                                                <span className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Opsi 1</span>
                                            </li>
                                            <li>
                                                <span className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Opsi 2</span>
                                            </li>
                                        </ul>
                                    </DisclosurePanel>
                                </Disclosure>
                            </li>
                            <li>
                                <Disclosure>
                                    <DisclosureButton className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                        <ChartBarIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Analisa</span>
                                        <ChevronDownIcon className="size-6 group-data-[open]:rotate-180"/>
                                    </DisclosureButton>
                                    <DisclosurePanel>
                                        <ul className="py-2 space-y-2">
                                            <li>
                                                <span className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Opsi 1</span>
                                            </li>
                                            <li>
                                                <span className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Opsi 2</span>
                                            </li>
                                        </ul>
                                    </DisclosurePanel>
                                </Disclosure>
                            </li>
                        </ul>
                        <div className="pt-2 space-y-2">
                            <Link href="/settings" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 ">
                                <Cog8ToothIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                                <span className="ml-3" sidebar-toggle-item="">Pengaturan</span>
                            </Link>
                            <Link href="/issues" target="_blank" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                <InformationCircleIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                                <span className="ml-3" sidebar-toggle-item="">Bantuan</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>
            <div onClick={() => setIsSidebarOpen(false)} className={cx("fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90", !isSidebarOpen && "hidden")}></div>
        </>
    );
}

function cx(...args) {
    return args
      .flat()
      .filter(x => typeof x === 'string')
      .join(' ')
      .trim()
}