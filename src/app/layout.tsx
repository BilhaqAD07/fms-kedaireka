import '@/app/globals.css'
import { Open_Sans } from 'next/font/google'
import Providers from './provider'
import MenuContextProvider from './context/MenuContext'
// import BaseLayout from '@/components/baseLayout'

const font = Open_Sans({
  subsets: ['latin']
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <MenuContextProvider>
            <main>{children}</main>
          </MenuContextProvider>
        </Providers>
      </body>
    </html>
  )
}
