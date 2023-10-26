import { getTeamBookmarks } from "@/app/utils/utils";
import { NextResponse } from "next/server"

export const dynamic = 'force-static'
export const revalidate = 'force-cache'

export const GET = async () => {
    // const team1Bookmarks = await getTeamBookmarks("1");
    // const team2Bookmarks = await getTeamBookmarks("2");
    // const team3Bookmarks = await getTeamBookmarks("3");
    // const team4Bookmarks = await getTeamBookmarks("4");

    const currentTimestamp = new Date();

    return NextResponse.json({
        currentTimestamp,
        // team1Bookmarks,
        // team2Bookmarks,
        // team3Bookmarks,
        // team4Bookmarks
    });
}