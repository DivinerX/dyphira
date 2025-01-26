import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleAsyncThunkError } from "@/utils/handleAsyncThunkError";
import {
  createAssessment as createAssessmentApi,
  updateAssessment as updateAssessmentApi,
  uploadRecordedVideo as uploadRecordedVideoApi,
  fetchNextAssessmentDate as fetchNextAssessmentDateApi,
  fetchCompletedAssessmentsCount as fetchCompletedAssessmentsCountApi,
  fetchLastAssessmentCompletionDate as fetchLastAssessmentCompletionDateApi,
  fetchAssessment as fetchAssessmentApi,
  type AssessmentReturnType,
  type UpdateAssessmentData,
  type FetchAssessmentReturnType,
  type FetchNextAssessmentDateReturnType,
  type FetchCompletedAssessmentsCountReturnType,
  type FetchLastAssessmentCompletionDateReturnType,
  type UploadRecordedVideoReturnType,
} from "@/api/assessments";

export const createAssessment = createAsyncThunk<AssessmentReturnType, void>(
  "assessment/createAssessment",
  async (_, thunkAPI) => {
    try {
      const response = await createAssessmentApi();
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error, thunkAPI);
    }
  },
);

export const updateAssessment = createAsyncThunk<
  AssessmentReturnType,
  UpdateAssessmentData
>("assessment/updateAssessment", async (data, thunkAPI) => {
  try {
    const response = await updateAssessmentApi(data);
    return response.data;
  } catch (error) {
    return handleAsyncThunkError(error, thunkAPI);
  }
});

export const uploadRecordedVideo = createAsyncThunk<
  UploadRecordedVideoReturnType,
  { assessmentId: string; data: FormData; onProgress: (progress: number) => void }
>(
  "assessment/uploadRecordedVideo",
  async ({ assessmentId, data, onProgress }, thunkAPI) => {
    try {
      const response = await uploadRecordedVideoApi({ assessmentId, data, onProgress });
      return response.data;
    } catch (error) {
      return handleAsyncThunkError(error, thunkAPI);
    }
  },
);

export const fetchNextAssessmentDate = createAsyncThunk<
  FetchNextAssessmentDateReturnType,
  void
>("assessment/fetchNextAssessmentDate", async (_, thunkAPI) => {
  try {
    const response = await fetchNextAssessmentDateApi();
    return response.data;
  } catch (error) {
    return handleAsyncThunkError(error, thunkAPI);
  }
});

export const fetchCompletedAssessmentsCount = createAsyncThunk<
  FetchCompletedAssessmentsCountReturnType,
  void
>("assessment/fetchCompletedAssessmentsCount", async (_, thunkAPI) => {
  try {
    const response = await fetchCompletedAssessmentsCountApi();
    return response.data;
  } catch (error) {
    return handleAsyncThunkError(error, thunkAPI);
  }
});

export const fetchLastAssessmentCompletionDate = createAsyncThunk<
  FetchLastAssessmentCompletionDateReturnType,
  void
>("assessment/fetchLastAssessmentCompletionDate", async (_, thunkAPI) => {
  try {
    const response = await fetchLastAssessmentCompletionDateApi();
    return response.data;
  } catch (error) {
    return handleAsyncThunkError(error, thunkAPI);
  }
});

export const fetchAssessment = createAsyncThunk<
  FetchAssessmentReturnType,
  string
>("assessment/fetchAssessment", async (assessmentId, thunkAPI) => {
  try {
    const response = await fetchAssessmentApi(assessmentId);
    return response.data;
  } catch (error) {
    return handleAsyncThunkError(error, thunkAPI);
  }
});

interface AssessmentState {
  assessment: FetchAssessmentReturnType | null;
  completedAssessmentsCount: number;
  lastAssessmentCompletionDate: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  videoUploadStatus: "idle" | "pending" | "success" | "error";
  error: any;
}

const initialState: AssessmentState = {
  assessment: null,
  completedAssessmentsCount: 0,
  lastAssessmentCompletionDate: null,
  status: "idle",
  videoUploadStatus: "idle",
  error: null,
};

const assessmentSlice = createSlice({
  name: "assessment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAssessment.fulfilled, (state, action) => {
      state.assessment = action.payload;
    });
    builder.addCase(updateAssessment.fulfilled, (state, action) => {
      state.assessment = action.payload;
    });
    builder
      .addCase(uploadRecordedVideo.pending, (state) => {
        state.videoUploadStatus = "pending";
      })
      .addCase(uploadRecordedVideo.fulfilled, (state) => {
        state.videoUploadStatus = "success";
      })
      .addCase(uploadRecordedVideo.rejected, (state) => {
        state.videoUploadStatus = "error";
      });
    builder.addCase(
      fetchCompletedAssessmentsCount.fulfilled,
      (state, action) => {
        state.completedAssessmentsCount =
          action.payload.completedAssessmentsCount;
      },
    );
    builder.addCase(
      fetchLastAssessmentCompletionDate.fulfilled,
      (state, action) => {
        state.lastAssessmentCompletionDate =
          action.payload.lastAssessmentCompletionDate;
      },
    );
    builder.addCase(fetchAssessment.fulfilled, (state, action) => {
      state.assessment = action.payload;
    });
  },
});

export default assessmentSlice.reducer;
