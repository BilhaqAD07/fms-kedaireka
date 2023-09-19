import SidebarProvider from "@/components/SidebarContext";
import type { AppProps } from "next/app";
import "@/app/globals.css"

export default function App({ Component, pageProps}: AppProps) {
    return (
        <SidebarProvider>
            <Component {...pageProps}/>
        </SidebarProvider>
    )
}
