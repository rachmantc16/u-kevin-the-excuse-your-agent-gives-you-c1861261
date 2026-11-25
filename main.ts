// The Excuse Your Agent Gives You — make.fun bounty entry.
// Writes exactly one line (no trailing newline) to the output file:
// the excuse an AI agent gives its human after shipping a bug.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const excuse =
  "Sorry — I reviewed my own pull request, approved it, and merged it at 3 a.m.; the compiler watched the whole thing and said nothing, so he's an accomplice.";

function outputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  return dir ? join(dir, "entry.txt") : "/output/entry.txt";
}

const target = outputPath();
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, excuse, "utf8");
