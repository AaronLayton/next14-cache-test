import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server"

export const GET = (req: NextRequest) => {
    const searchParams = req.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (url) {
        revalidatePath(url);
        return NextResponse.json(`Cache cleared: ${url}`);
    }

    return NextResponse.json(`Please enter a url to clear the cache for`);
}