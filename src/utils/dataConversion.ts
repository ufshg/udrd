import type { HistoryGraphProps } from "src/Components/HistoryGraph.tsx";
import type { UserSolvingHistory } from "src/@types/data.d.ts";

export const convertUserSolvingHistoryToHistoryGraphData = (
  history: UserSolvingHistory
): Pick<HistoryGraphProps, "data"> => {
  return {
    data: history.solved.map((solve) => ({
      x: solve.date,
      y: solve.tier, // Assuming prob_id is used to determine the tier
      id: solve.prob_id,
    })),
  };
};
