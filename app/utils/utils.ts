import { unstable_cache } from "next/cache";

export const getTeamBookmarks = (teamId: string) => {
    return unstable_cache(async (teamId) => {
        return new Date();
    }, [`team-bookmarks-${teamId}`])(teamId);
}