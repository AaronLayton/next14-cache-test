import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server"

export const GET = (req: NextRequest) => {
    const searchParams = req.nextUrl.searchParams;
    const url = searchParams.get('tag');

    if (url) {
        revalidateTag(url);
        return NextResponse.json(`Tag cleared: ${url}`);
    }

    return NextResponse.json(`Please enter a tag to clear the cache for`);
}