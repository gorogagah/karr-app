"use server";

import { redirect } from "next/navigation";

export async function login(prevState, formData) {
    redirect("/");
}