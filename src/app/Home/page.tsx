import BaseLayout from '@/components/baseLayout'
import dynamic from 'next/dynamic'

const Canvas = dynamic(async () => await import('./components/canvas/canvas'), {
  ssr: false
})

const Home = () => {
  return (
        <BaseLayout pageTitle='Home'>
            <Canvas/>
        </BaseLayout>
  )
}

export default Home
