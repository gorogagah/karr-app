"use client"

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "../lib/actions/auth";
import { Field, Input, Label } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/16/solid";

const initialState = { message: "" };

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button className={"cursor-pointer w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-primary-600 focus:ring-4 focus:ring-primary-100 sm:w-auto dark:bg-primary-400 dark:hover:bg-primary-500 dark:focus:ring-primary-600 disabled:cursor-default disabled:bg-gray-500"} type='submit' disabled={pending}>
            Login to your account
        </button>
    );
}

export default function Form() {
    const [state, formAction] = useActionState(login, initialState);

    return (
        <form action={formAction} className={"w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800"}>
            <h2 className={"text-2xl font-bold text-gray-900 dark:text-white"}>Sign in to continue</h2>
            {state?.message && <div className="flex items-center bg-red-100 text-red-900 text-sm rounded-lg p-2.5">
                <XCircleIcon className="text-red-500 h-4 mr-2.5" />
                {state?.message}
            </div>}
            <Field>
                <Label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Your username</Label>
                <Input className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-2 focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"} name='username' placeholder='user' required />
            </Field>
            <Field>
                <Label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Your password</Label>
                <Input className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-2 focus:outline-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"} type='password' name='password' placeholder='••••••••' required />
            </Field>
            <SubmitButton />
        </form>
    );
}