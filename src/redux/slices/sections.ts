import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleAsyncThunkError } from "@/utils/handleAsyncThunkError";
import {
  fetchSections as fetchSectionsApi,
  fetchSectionsQuestions as fetchSectionsQuestionsApi,
  type FetchSectionsReturnType,
  type FetchSectionsQuestionsReturnType,
} from "@/api/sections";

export const fetchSections = createAsyncThunk<FetchSectionsReturnType, void>(
  "sections/fetchSections",
  async (_, thunkAPI) => {
    try {
      const response = await fetchSectionsApi();
      const sortedSections = response.data?.sort((a, b) => a.order - b.order);
      return sortedSections;
    } catch (error) {
      return handleAsyncThunkError(error, thunkAPI);
    }
  },
);

export const fetchSectionQuestions = createAsyncThunk<
  FetchSectionsQuestionsReturnType,
  string
>(
  "sections/fetchSectionQuestions",
  async (sectionId, thunkAPI) => {
    try {
      const response = await fetchSectionsQuestionsApi(sectionId);
      const sortedQuestions = response.data?.sort((a, b) => a.order - b.order);
      return sortedQuestions;
    } catch (error) {
      return handleAsyncThunkError(error, thunkAPI);
    }
  },
);

interface SectionsState {
  sections: FetchSectionsReturnType;
  questions: FetchSectionsQuestionsReturnType;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SectionsState = {
  sections: [],
  questions: [],
  status: "idle",
  error: null,
};

const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSections.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSections.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sections = action.payload;
      })
      .addCase(fetchSections.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch sections";
      })
      .addCase(fetchSectionQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
      });
  },
});

export default sectionsSlice.reducer;
