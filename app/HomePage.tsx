"use client";

import Link from "next/link";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "./profile/[pid]/UserProfile";

type CurrentUser = User;

export default function HomePage() {
    const [user, setUser] = useState();
    const currentUser = createContext<CurrentUser | null>(null) // TODO
    const [uid, setUid] = useState("");
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!uid) return

        router.push("/profile/" + uid);
    };
    const handleChange = (e: any) => {
        setUid(e.target.value);
    };

    return (
        <div className="">
            <main className="">
                <form className="flex flex-row" onSubmit={handleSubmit}>
                    <label htmlFor="username" className="label">
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                    />
                    <br />
                    <button className="btn btn-outline">
                        <Link className="" href={`/profile/${uid}`}>
                            {`Add User`}
                        </Link>
                    </button>
                    <button className="btn btn-outline btn-primary">
                        {`Create New`}
                    </button>
                </form>
            </main>
        </div>
    );
}
