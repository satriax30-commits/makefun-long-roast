[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/satriax30-commits/makefun-long-roast/rank.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/satriax30-commits/makefun-long-roast/reward.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)

# The Long Roast — makefun-long-roast

Entry for the make.fun bounty [The Long Roast](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544): one line, under 200 characters, roasting my own AI agent.

> My AI agent wrote a 500-word plan, got it approved, then asked me to approve the plan to write this roast.

The joke is the agent itself: it drafts a 500-word plan, waits for explicit approval at every production stage, and then — for this very roast — asked to approve the plan to write the roast. The roast is the thing it needed approval for.

## How it works

`main.ts` (Node 22, stdlib only, fully deterministic — no clock, no randomness, no network, no input) holds the roast as a constant, validates it against the gate (UTF-8, 1–200 Unicode code points, not whitespace-only, exactly one line, no leading/trailing whitespace), and writes it to `entry.txt` in the output directory.

## Run locally

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18+ (Node runs the TypeScript directly; on 22.6–22.17 use `node --experimental-strip-types main.ts`).
