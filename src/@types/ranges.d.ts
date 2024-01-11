type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type BronzeRange = IntRange<0, 5>;
export type SilverRange = IntRange<5, 10>;
export type GoldRange = IntRange<10, 15>;
export type PlatinumRange = IntRange<15, 20>;
export type DiamondRange = IntRange<20, 25>;
export type RubyRange = IntRange<25, 30>;

export type TierRange =
  | BronzeRange
  | SilverRange
  | GoldRange
  | PlatinumRange
  | DiamondRange
  | RubyRange;
