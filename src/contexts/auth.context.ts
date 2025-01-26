import { createContext } from 'react'
import { TAuthContext } from '@/types'

export const AuthContext = createContext<TAuthContext>({
  loggedIn: false,
  user: null,
  setUser: () => {},
  getUser: () => Promise.resolve(),
  register: () => Promise.resolve(),
  login: () => Promise.resolve(),
  logout: () => {},
})
