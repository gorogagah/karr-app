"use client"

import { Button, Field, Fieldset, Input, Label, Legend } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DateRange from "./dateRange";
import { useState } from "react";
import cx from "@/app/utils/cx";
import { ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Purchase(){
    const supplies = [
        {
            id: 0,
            name: "Apron",
            category: "Ala Carte",
            date: "21 Maret 2023",
            createdBy: "Firza",
            amount: "2",
        },
        {
            id: 1,
            name: "Apron",
            category: "Ala Carte",
            date: "21 Maret 2023",
            createdBy: "Firza",
            amount: "2",
        },
        {
            id: 2,
            name: "Apron",
            category: "Ala Carte",
            date: "21 Maret 2023",
            createdBy: "Firza",
            amount: "2",
        },
    ];

    const [drawer, setDrawer] = useState({
        isAddOpen: false,
        isUpdateOpen: false,
        isDeleteOpen: false,
    });

    function openAddDrawer(){
        setDrawer({isAddOpen: true});
        document.querySelector("body").classList.add("overflow-hidden");
    }

    function openUpdateDrawer(){
        setDrawer({isUpdateOpen: true});
        document.querySelector("body").classList.add("overflow-hidden");
    }

    function openDeleteDrawer(){
        setDrawer({isDeleteOpen: true});
        document.querySelector("body").classList.add("overflow-hidden");
    }

    function closeDrawer(){
        setDrawer({
            isAddOpen: false,
            isUpdateOpen: false,
            isDeleteOpen: false,
        });

        document.querySelector("body").classList.remove("overflow-hidden");
    }

    return (
        <>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <div className="mb-4">
                        <nav className="flex mb-5">
                            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                                <li className="inline-flex items-center">
                                    <Link href="/" className="inline-flex items-center text-gray-700 hover:text-sky-600 dark:text-gray-300 dark:hover:text-white">
                                        <HomeIcon className="w-5 h-5 mr-2.5"/> Beranda
                                    </Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="w-6 h-6 text-gray-400"/>
                                        <Link href="/inventori" className="ml-1 text-gray-700 hover:text-sky-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Inventori</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="w-6 h-6 text-gray-400"/>
                                        <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500">Penambahan Stok</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Penambahan Stok</h1>
                    </div>
                    <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                        <div className="flex items-center mb-4 sm:mb-0">
                            <form className="sm:pr-3" action="#" method="GET">
                                <Field className="relative w-full">
                                    <Label htmlFor="purchase-search" className="sr-only">Cari</Label>
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                                    </div>
                                    <Input type="text" name="cari" id="purchase-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="Cari stok"/>
                                </Field>
                            </form>
                            <DateRange/>
                        </div>
                        <Button onClick={openAddDrawer} className="cursor-pointer text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">Tambah stok</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Nama Stok
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Tanggal
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Dibuat Oleh
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Jumlah
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {supplies.map((s) => (
                                        <tr key={s.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <div className="text-base font-semibold text-gray-900 dark:text-white">{s.name}</div>
                                                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{s.category}</div>
                                            </td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{s.date}</td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{s.createdBy}</td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{s.amount}</td>
                                            <td className="p-4 space-x-2 whitespace-nowrap">
                                                <Button onClick={openUpdateDrawer} className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                                    <PencilSquareIcon className="w-4 h-4 mr-2"/>
                                                    Ubah
                                                </Button>
                                                <Button onClick={openDeleteDrawer} className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                                    <TrashIcon className="w-4 h-4 mr-2"/>
                                                    Hapus barang
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}                                                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center mb-4 sm:mb-0">
                    <Link href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <ChevronLeftIcon className="w-7 h-7"/>
                    </Link>
                    <Link href="#" className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <ChevronRightIcon className="w-7 h-7"/>
                    </Link>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-20</span> of <span className="font-semibold text-gray-900 dark:text-white">2290</span></span>
                </div>
                <div className="flex items-center space-x-3">
                    <Link href="#" className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                        <ChevronLeftIcon className="w-5 h-5 mr-1 -ml-1"/>
                        Sebelumnya
                    </Link>
                    <Link href="#" className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                        Berikutnya
                        <ChevronRightIcon className="w-5 h-5 ml-1 -mr-1"/>
                    </Link>
                </div>
            </div>
            <div onClick={closeDrawer} className={cx("bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30", !(drawer.isAddOpen || drawer.isUpdateOpen || drawer.isDeleteOpen) && "hidden")}></div>
            <Fieldset className={cx("fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none", !drawer.isAddOpen && "hidden")}>
                <Legend className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Tambah Stok</Legend>
                <Button onClick={closeDrawer} className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <XMarkIcon className="w-5 h-5 stroke-3"/>
                    <span className="sr-only">Tutup</span>
                </Button>
                <form action="#" className="space-y-4">
                    <Field>
                        <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Stok</Label>
                        <Input type="text" name="nama" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="Tulis nama stok" required/>
                    </Field>
                    <Field>
                        <Label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jumlah</Label>
                        <Input type="number" name="jumlah" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="1" min={1} required/>
                    </Field>
                    <div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
                        <Button type="submit" className="cursor-pointer text-white w-full justify-center bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                            Tambah stok
                        </Button>
                        <Button onClick={closeDrawer} className="cursor-pointer inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            <XMarkIcon className="w-5 h-5 -ml-1 sm:mr-1 stroke-2"/>
                            Batal
                        </Button>
                    </div>
                </form>
            </Fieldset>
            <Fieldset className={cx("fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none", !drawer.isUpdateOpen && "hidden")}>
                <Legend className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Tambah Stok</Legend>
                <Button onClick={closeDrawer} className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <XMarkIcon className="w-5 h-5 stroke-3"/>
                    <span className="sr-only">Tutup</span>
                </Button>
                <form action="#" className="space-y-4">
                    <Field>
                        <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Stok</Label>
                        <Input type="text" name="nama" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="Tulis nama stok" value="Apron" required/>
                    </Field>
                    <Field>
                        <Label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jumlah</Label>
                        <Input type="number" name="jumlah" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="1" min={1} value={2} required/>
                    </Field>
                    <div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
                        <Button type="submit" className="cursor-pointer text-white w-full justify-center bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                            Ubah stok
                        </Button>
                        <Button className="cursor-pointer w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            <TrashIcon className="w-5 h-5 mr-1 -ml-1"/>
                            Hapus
                        </Button>
                    </div>
                </form>
            </Fieldset>
            <div className={cx("fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none", !drawer.isDeleteOpen && "hidden")}>
                <h5 className="inline-flex items-center text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Hapus barang</h5>
                <Button onClick={closeDrawer} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <XMarkIcon className="w-5 h-5 stroke-3"/>
                    <span className="sr-only">Tutup</span>
                </Button>
                <ExclamationCircleIcon className="w-10 h-10 mt-8 mb-4 text-red-600 stroke-2"/>
                <h3 className="mb-6 text-lg text-gray-500 dark:text-gray-400">Apakah anda yakin ingin menghapus barang ini?</h3>
                <Link href="#" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-900">
                    Ya, aku yakin
                </Link>
                <Link href="#" className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" data-drawer-hide="drawer-delete-product-default">
                    Tidak, batal
                </Link>
            </div>
        </>
    );
}