"use client"

import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Field, Input, Label } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { ArrowLeftIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Cashier() {
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [isReceiptOpen, setIsReceiptOpen] = useState(false);

    return (
        <>
            <div className='flex flex-col h-screen'>
                <nav className="w-full bg-white flex items-center border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 py-3">
                    <Field className="grow mx-4">
                        <Label for="topbar-search" className="sr-only">Cari</Label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            </div>
                            <Input type="text" name="produk" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Cari produk" />
                        </div>
                    </Field>
                    <Link href="/" className="w-md">
                        <Image src="/logo.svg" className="h-8 w-auto ml-auto mr-3" width={118} height={44} alt="Karr Logo" />
                    </Link>
                </nav>
                <div className="grow flex overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <div className="w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
                        <main className="px-4 pt-6 grid gap-4 xl:grid-cols-3 2xl:grid-cols-4">
                            <div className="select-none cursor-pointer transition-shadow p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                                <p className="font-bold leading-none text-gray-900 dark:text-white">Apron</p>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Rp. 10.000</p>
                            </div>
                        </main>
                        <p className="my-10 text-sm text-center text-gray-500">
                            © 2019-2025 <a href="https://flowbite.com/" className="hover:underline" target="_blank">Flowbite.com</a>. All rights reserved.
                        </p>
                    </div>
                    <aside className="flex flex-col flex-shrink-0 w-md h-full font-normal border-l border-gray-200 bg-white p-3 dark:bg-gray-800 dark:border-gray-700">
                        <div className='grow overflow-y-auto'>
                            <div className="select-none mb-3 rounded-lg bg-gray-100 dark:bg-gray-700 w-full text-gray-900 dark:text-white py-2 px-3 flex items-center justify-between">
                                <div>
                                    <h5 className="text-sm">Apron</h5>
                                    <p className="text-xs">Rp. 10.000</p>
                                </div>
                                <div className='flex items-center'>
                                    <Button className="cursor-pointer p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500">
                                        <span className="sr-only">Kurang</span>
                                        <MinusIcon className='size-4' />
                                    </Button>
                                    <Input type="text" className="mx-2 size-10 bg-gray-50 rounded-lg text-sm text-center shadow dark:bg-gray-900 focus:outline-none focus:shadow-lg" />
                                    <Button className="cursor-pointer p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500">
                                        <span className="sr-only">Tambah</span>
                                        <PlusIcon className='size-4' />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full border-t border-gray-200 dark:border-gray-700'>
                            <div className='py-3 text-gray-900 dark:text-gray-200'>
                                <div className='flex justify-between text-sm mb-2'>
                                    <p>Pajak 10%</p>
                                    <p>Rp. 1.000</p>
                                </div>
                                <div className='flex justify-between text-base font-semibold'>
                                    <p>Total</p>
                                    <p>Rp. 11.000</p>
                                </div>
                            </div>
                            <Button onClick={() => setIsPaymentOpen(true)} className="w-full text-lg cursor-pointer text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">Lanjutkan</Button>
                        </div>
                    </aside>
                </div>
            </div>
            <Dialog open={isPaymentOpen} className="relative z-10 focus:outline-none" onClose={() => { }}>
                <DialogBackdrop className="fixed inset-0 bg-gray-900/50 dark:bg-gray-900/90" />
                <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <DialogPanel transition className="min-w-sm rounded-lg bg-white dark:bg-gray-800 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                        <div className='flex justify-between items-center border-b border-gray-200 px-5 py-3 dark:border-gray-700'>
                            <Button onClick={() => setIsPaymentOpen(false)} className="cursor-pointer flex items-center p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                <ArrowLeftIcon className="stroke-3 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                                <span className="ml-3">Batal</span>
                            </Button>
                            <p className='text-xl font-semibold text-gray-900 dark:text-gray-200'>Rp. 11.000</p>
                        </div>
                        <div className='px-5 py-3 text-gray-900 dark:text-gray-200'>
                            <div className="grid grid-cols-3 gap-2 p-2 mb-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                                <h1 className='font-semibold'>Tunai</h1>
                                <h1 className='font-semibold text-right'>Rp</h1>
                                <Input className="text-right bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm" />

                                <Button className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+2.000</Button>
                                <Button className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+5.000</Button>
                                <Button className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+10.000</Button>
                                <Button className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+20.000</Button>
                                <Button className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+50.000</Button>
                                <Button className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+100.000</Button>
                            </div>
                            <div className="flex justify-between font-semibold rounded-lg p-2 mb-2 bg-gray-100 dark:bg-gray-700">
                                <p>Kembalian</p>
                                <p>Rp. 9.000</p>
                            </div>
                            <Button onClick={() => {
                                setIsPaymentOpen(false);
                                setIsReceiptOpen(true);
                            }} className="w-full cursor-pointer text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-semibold rounded-lg py-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">Bayar</Button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
            <Dialog open={isReceiptOpen} className="relative z-10 focus:outline-none" onClose={() => { }}>
                <DialogBackdrop className="fixed inset-0 bg-gray-900/50 dark:bg-gray-900/90" />
                <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <DialogPanel transition className="w-96 p-6 rounded-lg bg-white text-gray-900 dark:text-gray-200 dark:bg-gray-800 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                        <h2 className="text-center text-xl font-semibold">SARSA</h2>
                        <div className="flex justify-between mt-4 text-xs">
                            <p>No: SARSA-1742991079</p>
                            <p>26/03/25, 19.11</p>
                        </div>
                        <hr className="my-2 text-gray-300 dark:text-gray-600" />
                        <table className="w-full text-xs">
                            <thead>
                                <tr>
                                    <th className="py-1 text-left">Produk</th>
                                    <th className="py-1 w-2/12 text-center">Jumlah</th>
                                    <th className="py-1 w-3/12 text-right">Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 text-left">
                                        Apron
                                        <br />
                                        Rp 10.000
                                    </td>
                                    <td className="py-2 text-center">1</td>
                                    <td className="py-2 text-right">Rp 10.000</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-between text-xs font-semibold">
                            <p>PAJAK 10%</p>
                            <p>Rp. 1.000</p>
                        </div>
                        <hr className="my-2 text-gray-300 dark:text-gray-600" />
                        <div className="flex justify-between font-semibold">
                            <p>TOTAL</p>
                            <p>Rp. 11.000</p>
                        </div>
                        <div className="flex justify-between text-xs font-semibold">
                            <p>PEMBAYARAN</p>
                            <p>Rp. 20.000</p>
                        </div>
                        <hr className="my-2 text-gray-300 dark:text-gray-600" />
                        <div className="flex justify-between text-xs font-semibold">
                            <p>KEMBALIAN</p>
                            <p>Rp. 9.000</p>
                        </div>
                        <Button onClick={() => setIsReceiptOpen(false)} className="mt-4 w-full cursor-pointer text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-semibold rounded-lg py-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">PRINT</Button>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}