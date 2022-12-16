export type User = {
    name: string,
    avatar: string,
}

export type UserHandle = {
    username: string,
}

export async function GetUserInfo(user: UserHandle): Promise<User> {
    const baseUrl = 'https://api.twitter.com/2/users/by/username/';
    const response = await fetch(baseUrl + user.username);
    const data = await response.json();

    console.log(data);

    return data as User
}

export const UserProfile = ({ name, avatar }: User) => {
    return <>
        <h1>{name}</h1>
    </>;
}