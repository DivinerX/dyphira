export type TLeaderboard = {
  _id: string;
  username: string;
  twitterId: string;
  twitterScore: number;
  totalRewardEarned: number;
  overallScore: number;
};

export type TLeaderboardState = {
  leaderboard: TLeaderboard[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

