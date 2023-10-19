'use client'
import React from 'react'
import BaseLayout from '@/components/baseLayout'
import { Container } from '@mui/material'
import Dashboard from '@/components/Dashboard'

const Home = () => {
  return (
        <BaseLayout pageTitle='home'>
            <Container>
              <div className="flex">
                <Dashboard/>
              </div>
            </Container>
        </BaseLayout>
  )
}

export default Home
