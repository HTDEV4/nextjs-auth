"use client"

import { useActionState, useEffect } from "react";
import { handleLogin } from "./action";
import { useRouter } from "next/navigation";

export type FormState = {
    message: string;
    success: boolean;
    data?: {
        [key: string]: string;
    };
}

const initialState: FormState = {
    message: "",
    success: false,
}

export default function Form() {
    const [state, formActionState, isPending] = useActionState(handleLogin, initialState);

    const router = useRouter();
    useEffect(() => {
        if (state.success) {
            const user = state.data.user;
            if (user.role == "admin") {
                return router.push(`/admin`);
            }
            router.push(`/`);
        }
    }, [state, router]);

    return (
        <div>
            {state.message && (
                <div
                    className={`px-4 py-3 rounded mb-3 border ${state.success === true
                        ? 'bg-green-100 border-green-400 text-green-700'
                        : 'bg-red-100 border-red-400 text-red-700'
                        }`}
                    role="alert"
                >
                    <strong className="font-bold">{state.message}</strong>
                    {/* <br />
                    <span className="block sm:inline">
                        {state.success === true
                            ? 'Đăng nhập thành công!'
                            : 'Tài khoản hoặc mật khẩu không đúng!'}
                    </span> */}
                </div>
            )}


            <form className="space-y-4 sm:space-y-6" action={formActionState}>
                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                            placeholder="Nhập email của bạn..."
                            required
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mật khẩu
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                            placeholder="Nhập mật khẩu..."
                            required
                        />
                    </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 text-sm">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="ml-2 text-gray-600">Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200 text-center sm:text-right">
                        Quên mật khẩu?
                    </a>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2.5 sm:py-3 px-4 text-sm sm:text-base rounded-lg sm:rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    disabled={isPending}
                >
                    Đăng nhập
                </button>
            </form>
        </div>
    );
}
