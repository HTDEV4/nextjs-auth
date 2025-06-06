import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./app/utils/auth";

export const middleware = async (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;
    // Kiểm tra để lấy token
    const accessToken = request.cookies.get('token')?.value;
    if (!accessToken) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // Gọi lên server api để verify token ==> Yêu cầu back-end xây dựng
    const user = await getUser();
    if (!user) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    const role = user.role;
    if (pathname.startsWith("/admin") && role != "admin") {
        return NextResponse.redirect(new URL("/forbidden", request.url));
    }
};

// >>> Thiết lập đường dẫn cần được bảo vệ
export const config = {
    matcher: [
        "/admin/:path*",
        "/my-account/:path*"
    ],
};
