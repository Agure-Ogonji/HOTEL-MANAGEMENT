import { getRoom } from "@/libs(LIBRARY)/apis";
import { authOptions } from "@/libs(LIBRARY)/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-08-16",
});


type RequestData = {
    checkinDate: string;
    checkoutDate: string;
    adults: number;
    children: number;
    numberOfDays: number;
    hotelRoomSlug: string;
}
export async function POST(req: Request, res: Response){
    const {checkinDate, adults, checkoutDate, children, hotelRoomSlug, numberOfDays, } : RequestData = await req.json();

    if(!checkinDate || !checkoutDate || !adults || !hotelRoomSlug || !numberOfDays){
        return new NextResponse("PLEASE ALL THE FIELDS ARE REQUIRED", {status: 400});
    }

    const origin = req.headers.get("ORIGIN");

    const session = await getServerSession(authOptions);

    if(!session){
        return new NextResponse("AUTHENTICATION IS REQUIRED!", {status: 400});
    }

    const userId = session.user.id;

    const formattedCheckoutDate = checkoutDate.split("T")[0];
    const formattedCheckinDate = checkinDate.split("T")[0];

    try {
        const room = await getRoom(hotelRoomSlug);

        const discountPrice = room.price - (room.price / 100) * room.discount;

        const totalPrice = discountPrice * numberOfDays;

        const stripeSession = await stripe.checkout.sessions.create({
            mode: "payment", line_items: [{
                quantity: 1,
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: room.name,
                        images: room.images.map(image => image.url),
                    },
                    unit_amount: parseInt((totalPrice * 100).toString()),
                },
            },],
            payment_method_types: ["card"],
            success_url: `${origin}/users/${userId}`,
            metadata: {
                adults,
                checkinDate: formattedCheckinDate,
                checkoutDate: formattedCheckoutDate,
                children,
                hotelRoom: room._id,
                numberOfDays,
                user: userId,
                discount: room.discount,
                totalPrice,
            },
        });

        return NextResponse.json(stripeSession, {status: 200, statusText: "PAYMENT SESSION CREATED",});
    } catch (error: any) {
        console.log("PAYMENT FAILED", error);
        return new NextResponse(error, {status: 500});
    }
}
