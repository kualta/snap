import Image from "next/image";

export type User = {
    name: string;
    username: string;
    id: string;
    following_count: number | undefined;
    followers_count: number | undefined;
    created_at: string | undefined;
    profile_image_url: string | undefined;
};

export const UserProfile = (user: User) => {
    if (!user.profile_image_url) return null;

    return (
        <>
            <Image
                src={user.profile_image_url}
                width="100"
                height="100"
                alt={"profile image"}
            />
            <h1>name: {user.name}</h1>
            <h1>username: {user.username}</h1>
            <h1>id: {user.id}</h1>
            <h1>account created at: {user.created_at}</h1>
            <h1>followers: {user.followers_count || "null"}</h1>
            <h1>following: {user.following_count || "null"}</h1>
        </>
    );
};
