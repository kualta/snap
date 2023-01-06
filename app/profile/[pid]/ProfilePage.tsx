"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "../../../components/user";
import { UserProfile } from "../../../components/user_profile";
import { fetchUser } from "./page";

export default function Page() {
    const [user, setUser] = useState({} as User);
    const pathname = usePathname();
    const handle = pathname?.split("/").pop();

    useEffect(() => {
        if (!handle) {
            console.log(`Invalid handle: ${handle}`);
            return;
        }

        let fetchData = async () => {
            let user = await fetchUser(handle);
            setUser(user);
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <div className="">
            <main className="">
                <h2>User profile</h2>
                <UserProfile {...user} />
                <Link href={"/"}>{`< Back Home`}</Link>
            </main>
        </div>
    );
}
