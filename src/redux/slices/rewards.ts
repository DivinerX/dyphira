import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleAsyncThunkError } from "@/utils/handleAsyncThunkError";
import {
  fetchRewards as fetchRewardsApi,
  claimReward as claimRewardApi,
  type FetchRewardsReturnType,
  type ClaimRewardReturnType,
} from "@/api/rewards";

export const fetchRewards = createAsyncThunk<FetchRewardsReturnType, void>(
  "rewards/fetchRewards",
  async (_, thunkAPI) => {
    try {
      const response = await fetchRewardsApi();
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error, thunkAPI);
    }
  },
);

export const claimReward = createAsyncThunk<ClaimRewardReturnType, string>(
  "rewards/claimReward",
  async (publicKey, thunkAPI) => {
    try {
      const response = await claimRewardApi(publicKey);
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error, thunkAPI);
    }
  }
);

interface RewardsState {
  claimableRewards: number;
  totalRewardsEarned: number;
  referralEarnings: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  claimStatus: "idle" | "loading" | "succeeded" | "failed";
  claimError: string | null;
}

const initialState: RewardsState = {
  claimableRewards: 0,
  totalRewardsEarned: 0,
  referralEarnings: 0,
  status: "idle",
  error: null,
  claimStatus: "idle",
  claimError: null,
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRewards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRewards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.claimableRewards = action.payload.claimableRewards;
        state.totalRewardsEarned = action.payload.totalRewardsEarned;
        state.referralEarnings = action.payload.referralEarnings;
      })
      .addCase(fetchRewards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch rewards";
      })
      .addCase(claimReward.pending, (state) => {
        state.claimStatus = "loading";
      })
      .addCase(claimReward.fulfilled, (state, action) => {
        state.claimStatus = "succeeded";
        state.claimableRewards = action.payload.claimedAmount; // Reset claimable rewards after successful claim
      })
      .addCase(claimReward.rejected, (state, action) => {
        state.claimStatus = "failed";
        state.claimError = action.error.message || "Failed to claim rewards";
      });
  },
});

export default rewardsSlice.reducer;
