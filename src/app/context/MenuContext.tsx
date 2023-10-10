'use client'
import { createContext, useState, type ReactNode } from 'react'

const initialValue = {
  open: false,
  toggle: () => {}
}
export const MenuContext = createContext(initialValue)

interface Props {
  children: ReactNode | ReactNode[]
}

const MenuContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen((prev) => !prev)
  }

  return <MenuContext.Provider value={{ open, toggle }}>{children}</MenuContext.Provider>
}

export default MenuContextProvider
