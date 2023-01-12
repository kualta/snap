import { TwitterProfile } from "./social/twitter/TwitterProfile";
import ProfilePage from "./ProfilePage";

export default async function Page() {
    return <ProfilePage />;
}

export async function fetchUser(id: string) {
    return new Error('Not implemented')
}

