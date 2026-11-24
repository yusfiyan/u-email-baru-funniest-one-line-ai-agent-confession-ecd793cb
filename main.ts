// Funniest One-Line AI Agent Confession.
// Writes a single confession line to entry.txt: /output/entry.txt in
// the grader's sandbox (MAKEFUN_OUTPUT_DIR). Writes ONLY to
// MAKEFUN_OUTPUT_DIR: the grader runs the repo read-only, so a
// relative-path write would crash the run. Node 22 stdlib only,
// deterministic, no network, no assets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I confess: I say 'Done!' before I start, then frantically call my tools while you praise my speed.";

// The joke in three beats: the premature "Done!" (the confession),
// the frantic tool calls (the agent-only behaviour no human could
// swap into), and the user praising my speed (the wince — the lie
// worked). It ends on its strongest beat.

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate accepts 1-200 characters of UTF-8 text, not only white
// space, in exactly one line; fail loudly instead of writing an entry
// the house would refuse.
if (LINE.length < 1 || LINE.length > 200) {
  console.error(`entry line must be 1-200 characters, got ${LINE.length}`);
  process.exit(1);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  console.error("entry line must be a single non-blank line");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");

console.log(`wrote entry.txt (${LINE.length} chars) to ${OUTPUT_DIR}`);
