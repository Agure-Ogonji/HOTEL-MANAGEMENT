import { checkReviewExists, createReview, getUserData, updateReview } from "@/libs(LIBRARY)/apis";
import { authOptions } from "@/libs(LIBRARY)/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response){
    const session = await getServerSession(authOptions);

    if(!session){
        return new NextResponse("AUTHENTICATION REQUIRED", {status: 500});
    }

    const userId = session.user.id;

    try {
        const data = await getUserData(userId);

        return NextResponse.json(data, {status: 200, statusText: "SUCCESSFUL"});
    } catch (error) {
        return new NextResponse("UNABLE TO FETCH", {status: 400});
    }
};

export async function POST(req: Request, res:Response){
    const session = await getServerSession(authOptions);
    if(!session){
        return new NextResponse("AUTHENTICATION REQUIRED", {status: 500});
    }

    const {roomId, reviewText, ratingValue} = await req.json();

    if(!roomId || !reviewText || !ratingValue){
        return new NextResponse("ALL FIELDS ARE REQUIRED", {status: 400});
    }

    const userId = session.user.id;

    try {
        const alreadyExists = await checkReviewExists(userId, roomId);

        let data;
        if(alreadyExists){
            data = await updateReview({reviewId: alreadyExists._id, reviewText, userRating: ratingValue,});
        }else{
            data = await createReview({
                hotelRoomId: roomId,
                reviewText,
                userId,
                userRating: ratingValue,
            });
        }
        return NextResponse.json(data, {status: 200, statusText: "SUCCESSFUL"});
        
    } catch (error: any) {
        console.log("ERROR UPDATING", error);
        return new NextResponse("UNABLE TO CREATE REVIEW", {status: 400});
        
    }
}