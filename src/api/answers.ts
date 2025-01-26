import api from "./api";
import { ApiRequestConfig } from "./api.types";

export type FetchAnswersReturnType = {
  _id: string;
  text: string;
  questionId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}[];

export const fetchAnswers = async (config?: ApiRequestConfig) => {
  return api.get<FetchAnswersReturnType>("/answers", config);
};

export type CreateAnswerData = {
  assessmentId?: string;
  sectionId?: string;
  videoStartTimestamp?: number;
  text?: string;
  questionId: string;
};

export type CreateAnswerReturnType = {
  _id: string;
  text: string;
  questionId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export const createAnswer = async (
  data: CreateAnswerData,
  config?: ApiRequestConfig,
) => {
  return api.post<CreateAnswerReturnType>("/answers", data, config);
};

export type UpdateAnswerData = {
  answerId: string;
  text: string;
};

export type UpdateAnswerReturnType = CreateAnswerReturnType;

export const updateAnswer = async (
  { answerId, ...data }: UpdateAnswerData,
  config?: ApiRequestConfig,
) => {
  return api.patch<UpdateAnswerReturnType>(
    `/answers/${answerId}`,
    data,
    config,
  );
};
