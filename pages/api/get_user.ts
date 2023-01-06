import type { NextApiRequest, NextApiResponse } from "next";
import Client from "twitter-api-sdk";
import { User } from "../../components/user";

export default async function (
    req: NextApiRequest,
    res: NextApiResponse<User | string>,
) {
    let client = new Client(`${process.env.TWITTER_BEARER}`);
    let username = req.body;

    if (!username) {
        res.status(400).json("Invalid username");
    }

    let { data } = await client.users.findUserByUsername(username, {
        "user.fields": ["created_at", "profile_image_url"],
    });

    if (!data) {
        console.error(`data is ${data}`);
        return;
    }

    let user: User = {
        name: data.name,
        username: data.username,
        id: data.id,
        following_count: data.public_metrics?.following_count,
        followers_count: data.public_metrics?.followers_count,
        created_at: data.created_at,
        profile_image_url: data.profile_image_url,
    };

    res.status(200).json(user);
}
