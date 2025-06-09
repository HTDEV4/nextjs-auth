import { getUser } from "@/app/utils/auth";
import Link from "next/link";

export default async function AccountPage() {
    const user = await getUser();
    return (
        <div>
            <h1>My Account</h1>
            <h2>Chào bạn: {user.name}</h2>
            <h2 className="w-60 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium">
                <Link href={`/auth/logout`}>Đăng xuất</Link>
            </h2>
        </div>
    );
}
