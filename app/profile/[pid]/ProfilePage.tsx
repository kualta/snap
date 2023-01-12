"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TwitterProfile } from "./social/twitter/TwitterProfile";
import UserProfile, { User } from "./User";

export default function ProfilePage() {
    const pathname = usePathname()
    const id = pathname?.split("/").pop() || ''

    // TODO: Fetch user data by id
    const [user, setUser] = useState(new User(id))

    useEffect(() => {
        user.add_profile(new TwitterProfile('lectromoe'))
    }, [user])

    return (
        <div className="h-full flex flex-col items-center space-y-4 justify-center">

            <UserProfile {...user} />

            <Link className="btn btn-outline" href={"/"}>{`< Back Home`}</Link>
        </div>
    );
}
