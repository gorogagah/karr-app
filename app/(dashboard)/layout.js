import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { Bars3CenterLeftIcon, ArrowLeftEndOnRectangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArchiveBoxIcon, BellIcon, Cog8ToothIcon, CurrencyDollarIcon, EyeIcon, InboxIcon, ReceiptPercentIcon, ShoppingBagIcon, Squares2X2Icon, UserCircleIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export default  function Layout({ children }) {
    return (
        <>
            <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <Bars3CenterLeftIcon className='size-6 stroke-3'/>
                            <XMarkIcon className='hidden size-6 stroke-3'/>
                        </button>
                        <Link href="/" className="flex ml-2 md:mr-24">
                            <Image src="/logo.svg" className="h-8 w-auto mr-3" width={118} height={44} alt="Karr Logo"/>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Menu>
                            <MenuButton className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                                <span className="sr-only">View notifications</span>
                                <BellIcon className='size-6'/>
                            </MenuButton>
                            <MenuItems anchor="bottom" className="z-50 w-sm my-1 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700">
                                <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> 
                                    Notifications
                                </div>
                                <div>
                                    <a href="#" className="flex px-4 py-3 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                                        <div className="w-full pl-3">
                                            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">New message from <span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All set for the presentation?"</div>
                                            <div className="text-xs font-medium text-sky-700 dark:text-sky-400">a few moments ago</div>
                                        </div>
                                    </a>
                                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="w-full pl-3">
                                            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.</div>
                                            <div className="text-xs font-medium text-sky-700 dark:text-sky-400">3 hours ago</div>
                                        </div>
                                    </a>
                                </div>
                                <a href="#" className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline">
                                    <div className="inline-flex items-center">
                                        <EyeIcon className='size-5 mr-2'/> View all
                                    </div>
                                </a>
                            </MenuItems>
                        </Menu>
                        <Menu>
                            <MenuButton className="p-2 text-gray-500 rounded-lg sm:flex cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                                <span className="sr-only">View apps</span>
                                <Squares2X2Icon className='size-6'/>
                            </MenuButton>
                            <MenuItems anchor="bottom" className="z-50 max-w-sm my-1 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600">
                                <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    Apps
                                </div>
                                <div className="grid grid-cols-3 gap-4 p-4">
                                    <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <ShoppingBagIcon className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"/>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">Sales</div>
                                    </a>
                                    <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <UserGroupIcon className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"/>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">Users</div>
                                    </a>
                                    <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <InboxIcon className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"/>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">Inbox</div>
                                    </a>
                                    <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <UserCircleIcon className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"/>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">Profile</div>
                                    </a>
                                    <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <Cog8ToothIcon className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"/>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">Settings</div>
                                    </a>
                                    <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <ArchiveBoxIcon className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"/>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">Products</div>
                                    </a>
                                    <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <CurrencyDollarIcon className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"/>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">Pricing</div>
                                    </a>
                                    <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <ReceiptPercentIcon className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"/>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">Billing</div>
                                    </a>
                                    <a href="#" className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <ArrowLeftEndOnRectangleIcon className="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400 stroke-2"/>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">Logout</div>
                                    </a>
                                </div>
                            </MenuItems>
                        </Menu>
                        <Menu>
                            <MenuButton className="flex items-center cursor-pointer ml-3 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                                <span className="sr-only">Open user menu</span>
                                <UserCircleIcon className='size-10 text-gray-500 dark:text-gray-400'/>
                                <div className='text-left ml-1 mr-2'>
                                    <p className='text-sm font-medium text-gray-900 dark:text-gray-300'>Sarsa</p>
                                    <p className='text-xs text-gray-700 truncate dark:text-gray-300'>Firza Ayubi</p>
                                </div>
                                {/* <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/> */}
                            </MenuButton>
                            <MenuItems anchor="bottom" className="z-50 min-w-[160px] my-1 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white" role="none">Sarsa</p>
                                    <p className="text-sm text-gray-900 truncate dark:text-gray-300" role="none">Firza Ayubi</p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                    </li>
                                </ul>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </nav>
        </>
    );
}