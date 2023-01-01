// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Client from 'twitter-api-sdk';

type User = {
  name: string
}

export default async function (req: NextApiRequest, res: NextApiResponse<User>) {
  let client = new Client(`${process.env.TWITTER_BEARER}`);

  let username = JSON.parse(req.body);
  let { data } = await client.users.findUserByUsername(username);

  res.status(200).json({ name: data?.name } as User)
}
