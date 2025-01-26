import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleAsyncThunkError } from "@/utils/handleAsyncThunkError";
import { fetchSectionQuestions } from "./sections";
import {
  createAnswer as createAnswerApi,
  updateAnswer as updateAnswerApi,
  type CreateAnswerData,
  type CreateAnswerReturnType,
  type UpdateAnswerData,
  type UpdateAnswerReturnType,
} from "@/api/answers";

export const createAnswer = createAsyncThunk<
  CreateAnswerReturnType,
  CreateAnswerData
>("chat/createAnswer", async (data, thunkAPI) => {
  try {
    const response = await createAnswerApi(data);
    return response.data;
  } catch (error) {
    return handleAsyncThunkError(error, thunkAPI);
  }
});

export const updateAnswer = createAsyncThunk<
  UpdateAnswerReturnType & { answerText: string },
  UpdateAnswerData
>("chat/updateAnswer", async (data, thunkAPI) => {
  try {
    const response = await updateAnswerApi(data);
    return { ...response.data, answerText: data.text };
  } catch (error) {
    return handleAsyncThunkError(error, thunkAPI);
  }
});

interface Message {
  _id: string;
  type: "question" | "answer";
  text: string;
  questionId?: string;
  answerId?: string;
}

interface ChatState {
  messages: Message[];
  answer: Partial<CreateAnswerReturnType>;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ChatState = {
  messages: [],
  answer: {},
  status: "idle",
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.messages.push({
        type: "question",
        ...action.payload,
      });
    },
    addAnswer: (state, action) => {
      state.messages.push({
        type: "answer",
        ...action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAnswer.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createAnswer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.answer = action.payload;
      })
      .addCase(createAnswer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to create answer";
      })
      .addCase(updateAnswer.fulfilled, (state, action) => {
        const answerText = action.payload.answerText;
        if (answerText) {
          state.messages.push({
            type: "answer",
            ...action.payload,
            text: answerText,
          });
        }
      })
      .addCase(fetchSectionQuestions.fulfilled, (state, action) => {
        if (action.payload.length > 0) {
          state.messages = [{ type: "question", ...action.payload[0] }];
        }
      });
  },
});

export const { addQuestion, addAnswer } = chatSlice.actions;
export default chatSlice.reducer;
