import { TwitterProfile } from "./TwitterProfile";
import ProfilePage from "./UserProfilePage";

export default async function Page() {
    return <ProfilePage />;
}

export async function fetchUser(id: string) {
    // TODO
}

export async function fetchTwitterUser(handle: string): Promise<TwitterProfile> {
    let response = await fetch("/api/get_user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(handle),
    });
    let user = await response.json();
    return user as TwitterProfile;
}
