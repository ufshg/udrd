import { TierRange } from "src/@types/tier";
import type { UserSolvingHistory } from "src/@types/data";

function getRandomTierChange() {
  // Returns either -1, 0, or 1
  return Math.floor(Math.random() * 3) - 1;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateRandomUserSolvingHistory(): UserSolvingHistory {
  const solved: UserSolvingHistory["solved"] = [];
  const numSolved = getRandomInt(1, 100);
  let currentDate = new Date();
  let curr_tier = getRandomInt(0, 30);
  for (let i = 0; i < numSolved; i++) {
    const minutesToAdd = getRandomInt(1, 60); // Get random minutes to add
    currentDate = new Date(currentDate.getTime() + minutesToAdd * 60 * 1000); // Add the minutes to the current date

    const next_tier = getRandomTierChange() + curr_tier;

    if (next_tier < 30 && next_tier >= 0) {
      curr_tier = next_tier;
    } else if (next_tier < 0) {
      curr_tier = 0;
    } else {
      curr_tier = 29;
    }

    solved.push({
      date: currentDate,
      prob_id: getRandomInt(1, 1000),
      tier: curr_tier as TierRange,
    });
  }

  return { solved, user_id: "dodo8" };
}
