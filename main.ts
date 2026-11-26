// One Line, One Laugh — writes the entry line to /output/entry.txt.
// Deterministic: same bytes on every run, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE = "My smart fridge emailed my doctor. I don't want to talk about why.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, { encoding: "utf-8" });

console.log(LINE);
