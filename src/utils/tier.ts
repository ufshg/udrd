import type { TierRange } from "../@types/tier";

export const convertNumTier = (value: TierRange) => {
  const color = ["B", "S", "G", "P", "D", "R"][Math.floor(value / 5)];
  const num = Math.floor(value % 5) + 1;
  return color + num;
};
