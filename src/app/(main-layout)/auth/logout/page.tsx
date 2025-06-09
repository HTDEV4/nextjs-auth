"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const removeToken = async () => {
    const req = await fetch(`http://localhost:3000/api/cookie?key=token`, {
        method: "DELETE",
    });
    return req.json();
};

export default function LogoutPage() {
    // Xóa token trong cookie 
    // Xử lí call API logout ==> Yêu cầu back-end xử lý
    // Xóa trong này rất khó nên tạo 1 router handler.
    const router = useRouter();
    useEffect(() => {
        removeToken().then(() => {
            router.push("/auth/login");
        });;
    }, [router])
    return <h2>Đang đăng xuất...</h2>
}
