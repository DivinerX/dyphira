import api from "./api";
import { TSignupUser, TLoginUser, TUser, TRegisterResponse } from "@/types";

export const signup = async (user: TSignupUser) => {
  return await api.post<TRegisterResponse>("/users", user);
};

export const signin = async (user: TLoginUser) => {
  return await api.post<{ accessToken: string }>("/auth", user);
};

export const getUser = async () => {
  return await api.get<TUser>("/users/me");
};

