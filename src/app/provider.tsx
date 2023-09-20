'use client'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { Props } from 'next/script'

const Providers = ({ children } : Props) => {
    const [mounted, setMounted] = useState(false)
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

  return (
    <ThemeProvider attribute='class'>
        {children}
    </ThemeProvider>
  )
}

export default Providers