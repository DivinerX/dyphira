import api from "./api";
import { ApiRequestConfig } from "./api.types";

export type FetchSectionsReturnType = Array<{
  _id: string;
  title: string;
  description?: string;
  order: number;
}>;

export const fetchSections = async (config?: ApiRequestConfig) => {
  return api.get<FetchSectionsReturnType>(`/sections`, config);
};

export type FetchSectionsQuestionsReturnType = Array<{
  _id: string;
  text: string;
  order: number;
  sectionId: string;
}>;

export const fetchSectionsQuestions = async (
  sectionId: string,
  config?: ApiRequestConfig,
) => {
  return api.get<FetchSectionsQuestionsReturnType>(
    `/sections/${sectionId}/questions`,
    config,
  );
};
