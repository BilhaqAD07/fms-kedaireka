"use client"

import { ReactNode, useContext, useState } from "react";
import Header from "./Navigation/Header";
import MainSidebar from "./Navigation/MainSidebar";
import { MenuContext } from "@/app/context/MenuContext";

interface Props {
    children: ReactNode | ReactNode[];
}

const BaseLayout = ({children} : Props) => {
    // const [isOpen, setIsOpen] = useState(false)

    // console.log(isOpen)

    
    const { open } = useContext(MenuContext);
    return (
        <div className="dark:bg-primary_dark min-h-screen">            
            <MainSidebar/>
            <div className={`${open ? 'max-lg:blur-xl pointer-events-none' : ''}`}>
                <Header/>
                <main className="lg:ml-72">{children}</main>
            </div>
        </div>
    )
};

export default BaseLayout;