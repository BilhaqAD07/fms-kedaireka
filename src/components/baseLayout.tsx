import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
    children: ReactNode | ReactNode[];
}

const BaseLayout = ({children} : Props) => {
    return (
    <div className="layout flex h-screen gap-7">
        <Sidebar/>
        {children}
    </div>)
};

export default BaseLayout;