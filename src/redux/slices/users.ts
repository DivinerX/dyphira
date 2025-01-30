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

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
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
	},
});

export default userSlice.reducer;