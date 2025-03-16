import type { NextApiRequest, NextApiResponse } from "next";
import { fetchYoutubeVideos } from "./youtubeRequest";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const pageToken = req.query.pageToken ? req.query.pageToken.toString() : "";

  try {
    const data = await fetchYoutubeVideos(pageToken);
    const { items, nextPageToken, prevPageToken, pageInfo } = data;
    return res
      .status(200)
      .json({ items, nextPageToken, prevPageToken, pageInfo });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Error fetching videos", details: error.message });
  }
}
