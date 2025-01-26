import api from "./api";
import { ApiRequestConfig } from "./api.types";

export type AssessmentReturnType = {
  _id: string;
  userId: string;
  status: "in-progress" | "timeout" | "completed" | "abandoned";
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
};

export const createAssessment = async (config?: ApiRequestConfig) => {
  return api.post<AssessmentReturnType>("/assessments", {}, config);
};

export type UpdateAssessmentData = {
  assessmentId: string;
  completedAt?: string;
  status: "timeout" | "completed" | "abandoned";
};

export type UpdateAssessmentReturnType = AssessmentReturnType;

export const updateAssessment = async (
  { assessmentId, ...data }: UpdateAssessmentData,
  config?: ApiRequestConfig,
) => {
  return api.patch<UpdateAssessmentReturnType>(
    `/assessments/${assessmentId}`,
    data,
    config,
  );
};

export type UploadRecordedVideoData = {
  assessmentId: string;
  data: FormData;
  onProgress: (progress: number) => void;
};

export type UploadRecordedVideoReturnType = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination?: string;
  filename?: string;
  path?: string;
};

export const uploadRecordedVideo = async (
  { assessmentId, data, onProgress }: UploadRecordedVideoData,
  config?: ApiRequestConfig,
) => {
  console.log(data)
  return api.post<UploadRecordedVideoReturnType>(
    `/assessments/${assessmentId}/upload-video`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const progress: number = (progressEvent.progress || 0);
          onProgress(progress);
        }
      },
      ...config,
    },
  );
};

export type FetchNextAssessmentDateReturnType = {
  nextAssessmentDate: string;
};

export const fetchNextAssessmentDate = async (config?: ApiRequestConfig) => {
  return api.get<FetchNextAssessmentDateReturnType>(
    "/assessments/next-date",
    config,
  );
};

export type FetchCompletedAssessmentsCountReturnType = {
  completedAssessmentsCount: number;
};

export const fetchCompletedAssessmentsCount = async (
  config?: ApiRequestConfig,
) => {
  return await api.get<FetchCompletedAssessmentsCountReturnType>(
    "/assessments/completed-count",
    config,
  );
};

export type FetchLastAssessmentCompletionDateReturnType = {
  lastAssessmentCompletionDate: string;
};

export const fetchLastAssessmentCompletionDate = async (
  config?: ApiRequestConfig,
) => {
  return api.get<FetchLastAssessmentCompletionDateReturnType>(
    "/assessments/last-completion-date",
    config,
  );
};

export type FetchAssessmentReturnType = AssessmentReturnType & {
  videoUrl?: string;
};

export const fetchAssessment = async (
  assessmentId: string,
  config?: ApiRequestConfig,
) => {
  return api.get<FetchAssessmentReturnType>(
    `/assessments/${assessmentId}`,
    config,
  );
};
