import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import SidebarProvider from "./SidebarContext";

interface Props {
    children: ReactNode | ReactNode[];
}

const BaseLayout = ({children} : Props) => {
    return (
    <div className="layout flex h-screen gap-7">
        <SidebarProvider>
            <Sidebar/>
            {children}
        </SidebarProvider>
    </div>)
};

export default BaseLayout;