export type TLeaderboard = {
  _id: string;
  username: string;
  twitterId: string;
  twitterScore: number;
  xp: number;
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
  confirmPassword?: string;
  referralCode?: string;
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
  fund?: any;
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
  accessToken: string;
  refreshToken: string;
  user: TUser;
}

export type TLoginResponse = {
  status: number;
  message: string;
  accessToken: string;
}

export type TRegisterError = {
  username?: string;
  email?: string;
  password?: string;
  referralCode?: string;
}

export type TLoginError = {
  email?: string;
  password?: string;
  attempts: boolean;
}

export type TAssessmentScore = {
  confidence: number;
  knowledgeability: number;
  determination: number;
  evangelism: number;
  workEthic: number;
  vision: number;
  interests: number;
  pastWorkQuality: number;
  intelligence: number;
  personality: number;
  horsepower: number;
  hustle: number;
  curiosity: number;
  focus: number;
  ferocity: number;
}