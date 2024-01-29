import Link from "next/link"
import {BsFillSendFill} from "react-icons/bs"
import {BsTelephoneOutbound} from "react-icons/bs"
import {BiMessageDetail} from "react-icons/bi"

const Footer = () => {
  return (
    <footer className="mt-16">
        <div className="container mx-auto px-4">
            <Link href="/" className="font-black text-tertiary-dark">
                CHAKTEK
            </Link>

            <h4 className="font-semibold text-[40px] py-6">CONTACT</h4>
            <div className="flex flex-wrap gap-16 items-center justify-between">
                <div className="flex-1">
                    <p>123 ROAD</p>
                    <div className="flex items-center py-4">
                        <BsFillSendFill/>
                        <p className="ml-2">CHAKTEKCODE</p>
                    </div>
                    <div className="flex items-center">
                        <BsTelephoneOutbound/>
                        <p className="ml-2">000-000-000</p>
                    </div>
                    <div className="flex items-center pt-4">
                        <BiMessageDetail/>
                        <p className="ml-2">CHAKTEKCODE</p>
                    </div>
                </div>
                <div className="flex-1 md: text-right">
                    <p className="pb-4">OUR STORY</p>
                    <p className="pb-4">GET INTOUCH</p>
                    <p className="pb-4">OUR PRIVACY COMMITMENT</p>
                    <p className="pb-4">TERMS OF SERVICE</p>
                    <p>CUSTOMER ASSISTANCE</p>
                </div>
                <div className="flex-1 md:text-right">
                    <p className="pb-4">DINING EXPERIENCE</p>
                    <p className="pb-4">WELLNESS</p>
                    <p className="pb-4">FITNESS</p>
                    <p className="pb-4">SPORTS</p>
                    <p>EVENTS</p>
                </div>
            </div>
        </div>
        <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"/>
    </footer>
  )
}

export default Footer