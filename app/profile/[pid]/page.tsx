import ProfilePage from "./ProfilePage";

export default async function Page() {
    return <ProfilePage />;
}

export async function fetchUser(handle: string) {
    let response = await fetch("/api/get_user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(handle),
    });
    let user = await response.json();
    return user;
}
