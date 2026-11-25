// One Line, One Laugh — entry for u-coral-404-one-line-one-laugh-22f2c9f3
// Writes exactly one original funny line (<= 200 chars) to /output/entry.txt.
// Deterministic: no randomness, no time, no environment dependence.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone's screen time report called me a 'power user' — apparently watching a raccoon open a jar for four hours counts as a career now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
