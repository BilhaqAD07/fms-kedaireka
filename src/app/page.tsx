'use client'
import {
  Container
} from '@mui/material'
import BaseLayout from '@/components/baseLayout'

const Home = () => {
  return (
        <BaseLayout pageTitle='Home'>
            <Container className="text-black drop-shadow bg-green-400 shadow-black dark:bg-white rounded-lg p-4">
                HELLOW WORLD
            </Container>
        </BaseLayout>
  )
}

export default Home
