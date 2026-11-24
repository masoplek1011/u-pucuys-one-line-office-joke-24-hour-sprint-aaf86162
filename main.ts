import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke: the focus-time block itself is what summons the meeting.
const joke =
  "My calendar says I'm in focus time until 6 p.m., which is exactly why my boss scheduled a 'quick sync' for 5:59.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
