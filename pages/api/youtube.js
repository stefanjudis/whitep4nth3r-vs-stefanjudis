import { google } from "googleapis";

let googleAuth;

export default async (_, res) => {
  googleAuth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
  });

  const youtube = google.youtube({
    auth: googleAuth,
    version: "v3",
  });

  const whitep4nth3rResponse = await youtube.channels.list({
    id: "UCiGFO97qgxZEbbg43mZSeyg",
    part: "statistics",
  });

  const whitep4nth3r = whitep4nth3rResponse.data.items[0];

  const stefanJudisResponse = await youtube.channels.list({
    id: "UCLpT9xDn3WQ24wfVCkAZU6A",
    part: "statistics",
  });

  const stefanJudis = stefanJudisResponse.data.items[0];

  res.setHeader("Cache-Control", "public, s-maxage=120, stale-while-revalidate=60");

  return res.status(200).json({
    whitep4nth3r: {
      subscriberCount: whitep4nth3r.statistics.subscriberCount,
      viewCount: whitep4nth3r.statistics.viewCount,
    },
    stefanJudis: {
      subscriberCount: stefanJudis.statistics.subscriberCount,
      viewCount: stefanJudis.statistics.viewCount,
    },
  });
};
