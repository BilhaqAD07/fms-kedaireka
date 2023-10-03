'use client'

import { type ReactNode, useContext } from 'react'
import Header from './Navigation/Header'
import MainSidebar from './Navigation/MainSidebar'
import { MenuContext } from '@/app/context/MenuContext'
import Head from 'next/head'

interface Props {
  children: ReactNode | ReactNode[]
  pageTitle: string
}

const BaseLayout = ({ children, pageTitle }: Props) => {
  // const [isOpen, setIsOpen] = useState(false)

  // console.log(isOpen)

  const { open } = useContext(MenuContext)
  return (
        <>
            <Head>
                <title>FIMS |
                    {' '}
                    {pageTitle}
                </title>
                <meta name="description" content="Fields And Instruments Management System" />
            </Head>
            <div className="dark:bg-primary_dark min-h-screen">
                <MainSidebar/>
                <div className={`${open ? 'max-lg:blur-xl pointer-events-none' : ''}`}>
                    <Header/>
                    <main className="lg:ml-72 pt-14 mt-10 px-4">{children}</main>
                </div>
            </div>
        </>
  )
}

export default BaseLayout
