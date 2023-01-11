"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const [handle, setHandle] = useState("");
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push("/profile/" + handle);
    };
    const handleChange = (e: any) => {
        setHandle(e.target.value);
    };

    return (
        <div className="">
            <main className="">
                <h1 className="">Snap</h1>

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
                    <Link
                        className="btn btn-outline"
                        href={`/profile/${handle}`}
                    >
                        {`Add User`}
                    </Link>
                </form>
            </main>
        </div>
    );
}
