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

export type TSignupUser = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  referralId?: string;
}

export type TLoginUser = {
  email: string;
  password: string;
}

export type TUser = {
  _id: string;
  username: string;
  email: string;
  referralId: string;
}

export type TUserState = {
  user: TUser | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export type TAuthContext = {
  loggedIn: boolean;
  user: TUser | null;
  setUser: (user: TUser | null) => void;
  getUser: () => Promise<void>;
  register: (user: TSignupUser) => Promise<void>;
  login: (user: TLoginUser) => Promise<void>;
  logout: () => void;
};

export type TRegisterResponse = {
  status: number;
  message: string;
  user: TUser;
}

export type TLoginResponse = {
  status: number;
  message: string;
  accessToken: string;
}
