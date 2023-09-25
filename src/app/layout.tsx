import "@/app/globals.css"
import { Open_Sans } from "next/font/google"
import Providers from "./provider";
import MenuContextProvider from "./context/MenuContext";
import BaseLayout from "@/components/baseLayout";

export const metadata = {
  title: 'FMS KEDAIREKA',
  description: 'Fields and Instruments Management',
}

const font = Open_Sans({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <MenuContextProvider>
            <BaseLayout>{children}</BaseLayout>
          </MenuContextProvider>
        </Providers>
      </body>
    </html>
  )
}
