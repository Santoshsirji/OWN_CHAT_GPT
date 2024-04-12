"use client";

import { IoMdMenu } from "react-icons/io";
import useSidebarModal from "@/app/hooks/useSidebarModal";
import Logo from "../Logo";

const Navbar = () => {
    const sidebarModal = useSidebarModal();

    return (
    <div
    className="
    w-full
    h-16
    fixed
    inset-0
    bg-white
    border-b
    border-gray-200
    "
    >
        <div
        className="
        flex
        flex-row
        items-center
        h-full
        py-2
        px-2
        sm:px-4
        md:px-6
        lg:px-8
        xl:px-10
        2xl:px-14
        "
        >
            <div
            className="
            flex
            items-center
            space-x-1
            "
            >
            <div
            className="
            flex
            flex-col
            items-center
            justify-center
            h-full
            cursor-pointer
            hover:bg-gray-50
            rounded-full
            p-1
            "
            onClick={sidebarModal.onOpen}
            >
            <IoMdMenu size={25}/>
            </div>
            <div
            className=""
            >
                <Logo/>
            </div>
            </div>
        </div>
    </div> );
}
 
export default Navbar;