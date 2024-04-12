"use client"; 
import useSidebarModal from "@/app/hooks/useSidebarModal";
import { IoIosPeople, IoMdBook, IoMdBusiness, IoMdClose, IoMdHeart, IoMdHome, IoMdPeople } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { useState } from "react";


const SideBar = () => {
    const sidebarModal = useSidebarModal();

    const categories = [
        {
            label: "Home",
            href: "/home",
            Icon: IoMdHome,
        },
        {
            label: "Politics",
            href: "/politics",
            Icon: IoIosPeople,
        },
        {
            label: "Health",
            href: "/health",
            Icon: IoMdHeart,
        },
        {
            label: "Psychology",
            href: "/psychology",
            Icon: IoMdPeople,
        },
        {
            label: "Spirituality",
            href: "/spirituality",
            Icon: IoMdBook,
        },
        {
            label: "Career",
            href: "/career",
            Icon: IoMdBusiness,
        },
    ];

    if(sidebarModal.isOpen){
        return (
            <div className={`w-full h-full fixed bg-[rgba(0, 0, 0, 0.26)] z-10`}>
                <div className={`${sidebarModal.isOpen ? 'translate-x-0' : '-translate-x-full'} duration-150 bg-white border-r border-l-gray-300 fixed w-[200px] md:w-[300px] px-2 z-20 h-full py-4 space-y-3`}>
                    <div className="flex flex-row items-center w-full justify-between text-md">
                        <span className="text-zinc-900 font-semibold">Browse Categories</span>
                        <div onClick={sidebarModal.onClose} className="hover:opacity-60 cursor-pointer">
                            <IoMdClose size={20} />
                        </div>
                    </div>
                    <div
                        className="
                space-y-1
                "
                    >
                        {categories.map((item, index) => (
                            <div key={index} className="w-full text-zinc-800 hover:text-zinc-900 transition flex space-x-1 items-center cursor-pointer font-normal hover:bg-slate-100">
                                <div>{<item.Icon size={20} />}</div>
                                <div>{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    else{
        return null;
    }
   
};

export default SideBar;
