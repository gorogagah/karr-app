"use client"

import { Button, Field, Fieldset, Input, Label, Legend } from '@headlessui/react';
import { useRouter } from 'next/router';

export function Form(){
    function handleSubmit(event) {
        event.preventDefault();
     
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');
     
        console.log(username, password);
        useRouter().push('/');
    }

    return (
        <Fieldset onSubmit={handleSubmit} className={"w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800"}>
            <Legend className={"text-2xl font-bold text-gray-900 dark:text-white"}>Sign in to continue</Legend>
            <Field>
                <Label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Your username</Label>
                <Input className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"} name='username' placeholder='user' required/>
            </Field>
            <Field>
                <Label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Your password</Label>
                <Input className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"} type='password' name='password' placeholder='••••••••' required/>
            </Field>
            <Button className={"cursor-pointer w-full px-5 py-3 text-base font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 sm:w-auto dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"} type='submit'>Login to your account</Button>
        </Fieldset>
    );
}