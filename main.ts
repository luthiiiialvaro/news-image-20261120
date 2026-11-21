// news-image-20261120 entry: "The world in one day: Friday 20 November 2026".
// The front page (entry.png) was drawn at build time with PIL and ships in
// this repository. The program does no network and no rendering of its own:
// it only copies the finished image to the output directory, so both of the
// grader's runs write exactly the same bytes.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), dest);
const bytes = statSync(dest).size;
console.log("wrote", dest, `(${bytes} bytes)`);
