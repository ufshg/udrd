import { TierRange } from "./tier";

export type UserSolvingHistory = {
  user_id: string;
  solved: Array<{
    prob_id: number;
    tier: TierRange;
    date: Date;
  }>;
};
