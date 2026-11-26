// Roast the Smart Fridge: One Line, Best Laugh Wins
// make.fun bounty u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
//
// Writes a single roast line (<=160 chars) to /output/entry.txt.
// Deterministic: no timestamps, no randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast: the smart fridge's ice maker drops cubes at 3 a.m. and then
// blinks as if the noise were my fault. Deadpan, one concrete behaviour,
// sting at the end. 128 characters.
const LINE =
  "My smart fridge drops ice cubes at 3 a.m. like it is throwing cutlery down the stairs, then blinks at me as if that was my idea.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Runtime gate: the sealed scorer requires UTF-8 text of 1-160 characters,
// not only white space, in a single line. Fail loudly instead of shipping
// an invalid entry.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`Roast line must be 1-160 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("Roast line must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Roast line must be a single line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUT_FILE}`);
