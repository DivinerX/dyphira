import api from "./api";
import { ApiRequestConfig } from "./api.types";

export type FetchClicksReturnType = {
  referralCode: string;
  clicks: Date[];
};

export const fetchClicks = async (config?: ApiRequestConfig) => {
  return api.get<FetchClicksReturnType>("/clicks", config);
};
