export type User = {
    name: string;
    username: string;
    id: string;
    following_count: number | undefined;
    followers_count: number | undefined;
    created_at: string | undefined;
    profile_image_url: string | undefined;
};
