import { Button, Field, Input, Label } from '@headlessui/react';
import Image from 'next/image';
import Link from "next/link";
import { redirect } from 'next/navigation';

export default function Login(){
    async function login(formData) {
        "use server"

        const username = formData.get("username");
        const password = formData.get("password");

        console.log(username, password);
        redirect("/");
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen pt:mt-0">
            <Link href="/" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
                <Image src="/logo.svg" className="mr-4" width={118} height={44} alt="KARR Logo"/>
            </Link>
            <form action={login} className={"w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800"}>
                <h2 className={"text-2xl font-bold text-gray-900 dark:text-white"}>Sign in to continue</h2>
                <Field>
                    <Label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Your username</Label>
                    <Input className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"} name='username' placeholder='user' required/>
                </Field>
                <Field>
                    <Label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Your password</Label>
                    <Input className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"} type='password' name='password' placeholder='••••••••' required/>
                </Field>
                <Button className={"cursor-pointer w-full px-5 py-3 text-base font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 sm:w-auto dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"} type='submit'>Login to your account</Button>
            </form>
        </div>
    );
}