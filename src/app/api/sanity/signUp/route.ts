import sanityClient from "@/libs(LIBRARY)/sanity";
import {signUpHandler} from "next-auth-sanity";

export const POST = signUpHandler(sanityClient);