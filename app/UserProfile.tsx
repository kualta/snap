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

export default function UserProfile(user: User) {
    if (!user.profile_image_url) return null;

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
                <div className="card-title px-10 pt-10">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-offset-base-100 ring-offset-2">
                            <Image
                                src={user.profile_image_url}
                                width="100"
                                height="100"
                                alt={"profile image"}
                            />
                        </div>
                    </div>
                    <h1 className="px-7">{user.name}'s Profile</h1>
                </div>
                <div className="card-body text-right">
                    <table>
                        <tbody>
                            <tr>
                                <th>username:</th>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <th>id:</th>
                                <td>{user.id}</td>
                            </tr>
                            <tr>
                                <th>created:</th>
                                <td>{user.created_at}</td>
                            </tr>
                            <tr>
                                <th>followers:</th>
                                <td>{user.followers_count}</td>
                            </tr>
                            <tr>
                                <th>following:</th>
                                <td>{user.following_count}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
