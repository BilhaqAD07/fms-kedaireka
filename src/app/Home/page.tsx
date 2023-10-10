'use client'
import BaseLayout from '@/components/baseLayout'
import dynamic from 'next/dynamic'
import SideBarRight from './SideBarRight/page'

const Canvas = dynamic(async () => await import('./components/canvas/canvas'), {
  ssr: false
})

const Home = () => {
  return (
        <BaseLayout pageTitle='Home'>
            <SideBarRight/>
            <Canvas/>
        </BaseLayout>
  )
}

export default Home
