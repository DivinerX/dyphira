import api from "./api";
import type { TLeaderboard } from "@/types";

export const getLeaderboard = (period: "24h" | "7d" | "30d" | "all", sortBy: "xp" | "points") => api.get<TLeaderboard[]>("/users/leadership", { params: { period, sortBy } });
