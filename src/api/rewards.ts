import api from "./api";
import { ApiRequestConfig } from "./api.types";

export type FetchRewardsReturnType = {
  totalRewardsEarned: number;
  claimableRewards: number;
  referralEarnings: number;
};

export const fetchRewards = async (config?: ApiRequestConfig) => {
  return api.get<FetchRewardsReturnType>("/rewards", config);
};

export type ClaimRewardReturnType = {
  message: string;
  claimedAmount: number;
};

export const claimReward = async (publicKey: string, config?: ApiRequestConfig) => {
  return api.post<ClaimRewardReturnType>("/rewards/claim", { publicKey }, config);
};