import { getRoomReviews } from "@/libs(LIBRARY)/apis";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: {id: string}}){
    const roomId = params.id;

    try {
        const roomReviews = await getRoomReviews(roomId);
        return NextResponse.json(roomReviews, {status: 200, statusText: "SUCCESSFUL"});
    } catch (error) {
        console.log("GETTING THE REVIEW HAS FAILED", error);
        return new NextResponse("UNABLE TO FETCH", {status: 400});
        
    }
}