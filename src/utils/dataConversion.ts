import type { HistoryGraphProps } from "src/Components/HistoryGraph.tsx";
import type { UserSolvingHistory } from "src/@types/data.d.ts";

export const convertUserSolvingHistoryToHistoryGraphData = (
  history: UserSolvingHistory
): HistoryGraphProps["data"] => {
  return history.solved.map((solve) => ({
    x: solve.date,
    y: solve.tier,
    id: solve.prob_id,
  }));
};
