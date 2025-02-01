import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/api/api";
import { handleAsyncThunkError } from "@/utils/handleAsyncThunkError";

export const fetchUserReferrals = createAsyncThunk(
	"users/fetchUserReferrals",
	async (_, thunkAPI: any) => {
		try {
			const response = await api.get(`/users/referrals`);
			return response.data;
		} catch (error) {
			return handleAsyncThunkError(error, thunkAPI);
		}
	},
);

export const fetchUserClicks = createAsyncThunk(
	"users/fetchUserClicks",
	async (_, thunkAPI: any) => {
		try {
			const response = await api.get(`/users/clicks`);
			return response.data;
		} catch (error) {
			return handleAsyncThunkError(error, thunkAPI);
		}
	},
);

export const fetchUserAssessments = createAsyncThunk(
	"users/fetchUserAssessments",
	async (_, thunkAPI: any) => {
		const response = await api.get(`/assessments/rank-interview-performance`);
		return response.data;
	},
);

export const fetchAvgScoreList = createAsyncThunk(
	"users/fetchAvgScoreList",
	async (_, thunkAPI: any) => {
		const response = await api.get(`/assessments/average-score`);
		return response.data;
	},
);

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		click: { clicks: [] },
		assessments: [],
		avgScoreList: {
			confidence: 0,
			knowledgeability: 0,
			determination: 0,
			evangelism: 0,
			workEthic: 0,
			vision: 0,
			interests: 0,
			pastWorkQuality: 0,
			intelligence: 0,
			personality: 0,
			horsepower: 0,
			hustle: 0,
			curiosity: 0,
			focus: 0,
			ferocity: 0,
		},
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserReferrals.fulfilled, (state, action) => {
			state.user = action.payload;
		});
		builder.addCase(fetchUserClicks.fulfilled, (state, action) => {
			state.click = action.payload;
		});
		builder.addCase(fetchUserAssessments.fulfilled, (state, action) => {
			state.assessments = [...action.payload as any[]];
		});
		builder.addCase(fetchAvgScoreList.fulfilled, (state, action) => {
			// @ts-ignore
			state.avgScoreList = action.payload;
		});
	},
});

export default userSlice.reducer;