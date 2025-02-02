import { useCallback, useEffect, useState } from 'react'
import { TUser, TSignupUser, TLoginUser } from '@/types'
import { signup as signupApi, signin as signinApi, getUser as getUserApi } from '@/api/auth.api'
import storage from '@/utils/storage'
import { AuthContext } from './auth.context'
import axios, { AxiosError } from 'axios'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const loggedIn = !!storage.getAccessToken()

  const fetchCurrentUser = useCallback(async () => {
    const token = storage.getAccessToken();
    if (!token) return;

    setLoading(true);
    try {
      const res = await getUserApi();
      setUser(res.data);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          logout();
        }
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCurrentUser()
  }, [fetchCurrentUser])

  const register = async (user: TSignupUser) => {
    try {
      const response = await signupApi(user)
      setUser(response.data.user)
      storage.setAccessToken(response.data.accessToken)
      storage.setRefreshToken(response.data.refreshToken)
    } catch (error) {
      console.error("signup error", error)
      throw error
    }
  }

  const login = async (user: TLoginUser) => {
    console.log("login", user)
    try {
      const response = await signinApi(user)
      console.log("login response", response)
      if (response.data.accessToken) {
        storage.setAccessToken(response.data.accessToken)
      }
      await getUser()
    } catch (error) {
      console.error("login error", error)
      throw error
    }
  }

  const getUser = async () => {
    try {
      const response = await getUserApi()
      console.log(response)
      setUser(response.data)
    } catch (error) {
      console.error("getUser error", error)
      throw error
    }
  }

  const logout = () => {
    try {
      storage.clearTokens()
      setUser(null)
    } catch (error) {
      console.error("logout error", error)
      throw error
    }
  }

  return <AuthContext.Provider value={{ user, loggedIn, setUser, getUser, register, login, logout }}>{children}</AuthContext.Provider>
}
