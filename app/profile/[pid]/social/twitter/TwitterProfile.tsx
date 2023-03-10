import Image from "next/image";
import { SocialProfile } from "../SocialProfile";

export class TwitterProfile implements SocialProfile {
    constructor(username: string) {
        this.username = username
    }

    render(): JSX.Element {
        return <TwitterProfileCard {...this} />
    }

    public async fetch(): Promise<TwitterProfile> {
        let fetchData = async () => {
            return await fetchTwitterProfile(this.username);
        };
        return fetchData();
    }

    username: string;
    name?: string;
    id?: string;
    following_count?: number;
    followers_count?: number;
    created_at?: string;
    profile_image_url?: string;
};

export function TwitterProfileCard(profile: TwitterProfile) {
    return (
        <div className="card w-96 bg-base-100 rounded-xl">
            <div className="card-title px-10 pt-10">
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-offset-base-100 ring-offset-2">
                        <Image
                            src={profile.profile_image_url || ''}
                            width="100"
                            height="100"
                            alt={"profile image"} />
                    </div>
                </div>
                <h1 className="px-7">{profile.name}</h1>
            </div>
            <div className="card-body text-right">
                <table>
                    <tbody>
                        <tr>
                            <th>username:</th>
                            <td>{profile.username}</td>
                        </tr>
                        <tr>
                            <th>id:</th>
                            <td>{profile.id}</td>
                        </tr>
                        <tr>
                            <th>created:</th>
                            <td>{profile.created_at}</td>
                        </tr>
                        <tr>
                            <th>followers:</th>
                            <td>{profile.followers_count}</td>
                        </tr>
                        <tr>
                            <th>following:</th>
                            <td>{profile.following_count}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export async function fetchTwitterProfile(handle: string): Promise<TwitterProfile> {
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

