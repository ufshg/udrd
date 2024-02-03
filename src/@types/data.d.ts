import { TierRange } from "./tier";

export type UserSolvingHistory = {
  user_id: number;
  solved: Array<{
    prob_id: number;
    tier: TierRange;
    date: Date;
  }>;
};
