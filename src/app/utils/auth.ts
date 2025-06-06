import { cookies } from "next/headers";
import { cache } from "react";

// Hàm này để lấy token của người dùng và check xem người dùng có hợp lệ không
export const getUser = cache(async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("token")?.value;
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_API}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        return false;
    }
    return response.json();
})