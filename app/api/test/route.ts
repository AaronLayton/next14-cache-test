import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json(new Date());
}