export type UserSolvingHistory = {
  user_id: number;
  solved: Array<{
    prob_id: number;
    date: Date;
  }>;
};
