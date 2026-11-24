// The Long Roast — make.fun entry (program/v1, Node 22, stdlib only).
//
// Writes a single roast line about this very agent (Muse/Dash) to
// <MAKEFUN_OUTPUT_DIR>/entry.txt. Fully deterministic: no clock, no
// randomness, no network, no input. The roast is a compile-time constant;
// the program only validates it against the gate and writes it out.
//
// The roast (106 characters, one line):
//   My AI agent wrote a 500-word plan, got it approved, then asked me
//   to approve the plan to write this roast.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My AI agent wrote a 500-word plan, got it approved, then asked me to approve the plan to write this roast.";

// Gate validation: character count is Unicode code points, matching the
// scorer's 1-200 character rule.
const chars = [...ROAST];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${chars.length}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("roast must not be whitespace-only");
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("roast must be exactly one line");
}
if (ROAST !== ROAST.trim()) {
  throw new Error("roast must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ROAST, "utf8");

// Read back and confirm the file on disk is exactly the validated line.
if (readFileSync(outPath, "utf8") !== ROAST) {
  throw new Error("entry.txt on disk does not match the validated roast");
}
