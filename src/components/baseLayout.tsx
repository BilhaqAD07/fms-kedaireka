'use client'

import { type ReactNode, useContext } from 'react'
import Header from './Navigation/Header'
import MainSidebar from './Navigation/MainSidebar'
import { MenuContext } from '@/app/context/MenuContext'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/app/redux/store'

interface Props {
  children: ReactNode | ReactNode[]
  pageTitle: string
}

const BaseLayout = ({ children, pageTitle }: Props) => {
  // const [isOpen, setIsOpen] = useState(false)

  // console.log(isOpen)

  const { open } = useContext(MenuContext)
  return (
        <Provider store={store}>
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
        </Provider>
  )
}

export default BaseLayout
