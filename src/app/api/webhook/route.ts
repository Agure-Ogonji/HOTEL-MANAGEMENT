import { createBooking, updateHotelRoom } from "@/libs(LIBRARY)/apis";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import 'reflect-metadata';

const checkout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
});

export async function POST(req: Request, res: Response){
    const reqBody = await req.text();
    const sig = req.headers.get("stripe-signature");

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event: Stripe.Event;

    try {
        if(!sig || !webhookSecret) return;
        event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
    } catch (error: any) {
        return new NextResponse(`WEBHOOK ERROR: ${error.message}`, {status: 500});
    }
    switch (event.type) {
        case checkout_session_completed:
            const session = event.data.object;
            // console.log("session =>", session);
            const {

                
                    // @ts-ignore
                metadata: {
                    adults,
                    checkinDate,
                    checkoutDate,
                    children,
                    hotelRoom,
                    numberOfDays,
                    user,
                    discount,
                    totalPrice,

                },
            } = session;

        await createBooking({adults: Number(adults), checkinDate, checkoutDate, children: Number(children), hotelRoom, numberOfDays: Number(numberOfDays), discount: Number(discount), totalPrice: Number(totalPrice), user,});

        await updateHotelRoom(hotelRoom);

        

        return NextResponse.json("BOOKING SUCCESSFUL", {
            status: 200,
            statusText: "BOOKING SUCCESSFUL",
        });

        default:
            console.log(`UNHANDLED EVENT TYPE ${event.type}`);
            break;
    }
    return NextResponse.json("EVENT RECEIVED", {
        status: 200,
        statusText: "EVENT RECEIVED",
    }); 
}