import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ArrowDownIcon, ArrowLongUpIcon, ArrowUpIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Chart from "./chart";
import DateRange from "../components/dateRange";

export default function Home(){
    return (
        <div className="px-4 pt-6">
            <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                {/* Sales Widget */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">Rp. 453.850</span>
                            <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Penjualan minggu ini</h3>
                        </div>
                        <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                            12.5%
                            <ArrowLongUpIcon className="w-5 h-5"/>
                        </div>
                    </div>
                    <Chart/>
                    <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                        <Popover>
                            <PopoverButton className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                7 hari terakhir
                                <ChevronDownIcon className="w-4 h-4 ml-2 stroke-2" />
                            </PopoverButton>
                            <PopoverPanel transition anchor="top start" className="text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                                        Mar 16, 2025 - Mar 22, 2025
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Kemarin</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Hari ini</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">7 hari terakhir</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">30 hari terakhir</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">90 hari terakhir</a>
                                    </li>
                                </ul>
                            </PopoverPanel>
                        </Popover>
                        <div className="flex-shrink-0">
                            <Link href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-sky-700 sm:text-sm hover:bg-gray-100 dark:text-sky-500 dark:hover:bg-gray-700">
                                Laporan Penjualan
                                <ChevronRightIcon className="w-4 h-4 ml-1 stroke-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Statistics Widget */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Statistik bulan ini</h3>
                    <div className="border-t border-gray-200 dark:border-gray-600">
                        <div className="pt-4">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            <div>
                                                <p className="font-medium text-gray-900 truncate dark:text-white">Apron</p>
                                                <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                                    <ArrowUpIcon className="w-4 h-4"/>
                                                    2.5% 
                                                    <span className="ml-2 text-gray-500">vs bulan lalu</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            Rp. 445.467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            <div>
                                                <p className="font-medium text-gray-900 truncate dark:text-white">Pot</p>
                                                <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                                                    <ArrowDownIcon className="w-4 h-4"/>
                                                    1.35% 
                                                    <span className="ml-2 text-gray-500">vs bulan lalu</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            Rp. 201.869
                                        </div>
                                    </div>
                                </li>     
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                        <Popover>
                            <PopoverButton className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                7 hari terakhir
                                <ChevronDownIcon className="w-4 h-4 ml-2 stroke-2" />
                            </PopoverButton>
                            <PopoverPanel transition anchor="top start" className="text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                                        Mar 16, 2025 - Mar 22, 2025
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Kemarin</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Hari ini</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">7 hari terakhir</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">30 hari terakhir</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">90 hari terakhir</a>
                                    </li>
                                </ul>
                            </PopoverPanel>
                        </Popover>
                        <div className="flex-shrink-0">
                            <Link href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-sky-700 sm:text-sm hover:bg-gray-100 dark:text-sky-500 dark:hover:bg-gray-700">
                                Laporan Lengkap
                                <ChevronRightIcon className="w-4 h-4 ml-1 stroke-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
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
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Pendapatan</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">Rp. 23.400</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <ArrowUpIcon className="w-4 h-4"/>
                                3,4% 
                            </span>
                            vs bulan lalu
                        </p>
                    </div>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Pengeluaran</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">Rp. 23.400</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-red-600 dark:text-red-500">
                                <ArrowUpIcon className="w-4 h-4"/>
                                3,4% 
                            </span>
                            vs bulan lalu
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="items-center justify-between lg:flex">
                    <div className="mb-4 lg:mb-0">
                        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Transaksi</h3>
                        <span className="text-base font-normal text-gray-500 dark:text-gray-400">Daftar transaksi terbaru</span>
                    </div>
                    <div className="items-center sm:flex">
                        <DateRange/>
                    </div>
                </div>
                <div className="flex flex-col mt-6">
                    <div className="overflow-x-auto rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden shadow sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Transaksi
                                            </th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Tanggal &amp; Waktu
                                            </th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Jumlah barang
                                            </th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Harga dibayar
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800">
                                        <tr>
                                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                Pembelian <span className="font-semibold">Apron</span>
                                            </td>
                                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Mar 20, 2025
                                            </td>
                                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                1
                                            </td>
                                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Rp. 10.000
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50 dark:bg-gray-700">
                                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                Pembelian <span className="font-semibold">Apron</span>
                                            </td>
                                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Mar 19, 2025
                                            </td>
                                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                1
                                            </td>
                                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Rp. 10.000
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-3 sm:pt-6">
                    <Popover>
                        <PopoverButton className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            7 hari terakhir
                            <ChevronDownIcon className="w-4 h-4 ml-2 stroke-2" />
                        </PopoverButton>
                        <PopoverPanel transition anchor="top start" className="text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                            <div className="px-4 py-3" role="none">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                                    Mar 16, 2025 - Mar 22, 2025
                                </p>
                            </div>
                            <ul className="py-1" role="none">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Kemarin</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Hari ini</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">7 hari terakhir</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">30 hari terakhir</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">90 hari terakhir</a>
                                </li>
                            </ul>
                        </PopoverPanel>
                    </Popover>
                    <div className="flex-shrink-0">
                        <Link href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-sky-700 sm:text-sm hover:bg-gray-100 dark:text-sky-500 dark:hover:bg-gray-700">
                            Laporan Transaksi
                            <ChevronRightIcon className="w-4 h-4 ml-1 stroke-2"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}