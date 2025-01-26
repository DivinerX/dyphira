import api from "./api";
import type { TLeaderboard } from "@/types";

export const getLeaderboard = () => api.get<TLeaderboard[]>("/users/leadership");
