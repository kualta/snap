"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SocialProfile } from "./SocialProfile";
import { TwitterProfile } from "./TwitterProfile";
import UserProfile, { User } from "./UserProfile";

export default function UserProfilePage() {
    const [user, setUser] = useState(new User('Mathew'));
    const pathname = usePathname();
    const id = pathname?.split("/").pop();

    //
    // TODO: Fetch user by id
    // 

    user.profiles.push(new TwitterProfile('lectromoe'))

    return (
        <>
            <UserProfile {...user} />
            <Link className="btn btn-outline" href={"/"}>
                {`< Back Home`}
            </Link>
        </>
    );
}
