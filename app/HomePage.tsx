"use client";

import Link from "next/link";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "./profile/[pid]/User";

export default function HomePage() {
    const [id, setId] = useState('')
    const router = useRouter()

    const openProfile = (e: any) => {
        e.preventDefault();
        if (!id) return

        router.push("/profile/" + id);
    };
    const changeId = (e: any) => {
        setId(e.target.value);
    };

    return (
        <div className="flex h-full items-center justify-center place-content-center">
            <form className="container flex flex-row w-max space-x-2" onSubmit={openProfile}>
                <input
                    placeholder="ID"
                    type="text"
                    name="username"
                    id="username"
                    className="input input-bordered"
                    onChange={changeId}
                />
                <button className="btn btn-outline">
                    <Link className="" href={`/profile/${id}`}>
                        {`Lookup`}
                    </Link>
                </button>
            </form>
        </div>
    );
}
