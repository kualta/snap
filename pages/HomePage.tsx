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
        <div className="roboto-mono text-stone-200 h-screen w-screen bg-[#101112]">
            <main className="">
                <h1 className="">Pentagon</h1>
                <h1>
                </h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                    />
                    <br />
                    <Link href={`/profile/${handle}`}>{`Add >`}</Link>
                </form>
            </main>
        </div>
    );
}
