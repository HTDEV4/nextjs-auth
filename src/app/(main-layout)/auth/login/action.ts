"use server"

import { cookies } from "next/headers";
import { FormState } from "./Form";


export const handleLogin = async (prevState: FormState, formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_API}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        return {
            success: false,
            message: "Login failed",
        }
    }

    const data = await response.json();
    const cookieStore = await cookies();
    cookieStore.set("token", data.access_token, {
        httpOnly: true,
        path: "/",
        maxAge: 86400,
    });

    return {
        success: true,
        message: "Login successful",
        data,
    };
};