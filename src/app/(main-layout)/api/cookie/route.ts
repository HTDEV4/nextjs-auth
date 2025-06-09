import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
    // Key 1 là truyền vào url, truyền vào body
    const key = req.nextUrl.searchParams.get("key");
    console.log(key);
    if (!key) {
        return NextResponse.json({
            success: false,
        });
    }

    const cookieStore = await cookies();
    cookieStore.delete(key);
    return NextResponse.json({
        success: true,
    });
}