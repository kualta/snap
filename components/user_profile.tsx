export type User = {
    name: string,
}

export const UserProfile = ({ name }: User) => {
    return (
        <>
            <h1>{name}</h1>
        </>
    );
}