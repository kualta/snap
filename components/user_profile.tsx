export type User = {
    name: string,
}

export const UserProfile = (user: User) => {
    return (
        <>
            <h1>Name: {user.name}</h1>
        </>
    );
}