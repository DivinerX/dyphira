import api from "./api";
import { TSignupUser, TLoginUser, TUser } from "@/types";

export const signup = async (user: TSignupUser) => {
  return await api.post<TUser>("/auth/signup", user);
};

export const signin = async (user: TLoginUser) => {
  return await api.post<{ accessToken: string }>("/auth/signin", user);
};

export const getUser = async () => {
  return await api.get<TUser>("/auth/user");
};

