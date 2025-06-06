import { getUser } from "@/app/utils/auth";

export default async function AccountPage() {
    const user = await getUser();
    return (
        <div>
            <h1>My Account</h1>
            <h2>Chào bạn: {user.name}</h2>
        </div>
    );
}
