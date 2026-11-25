// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "To: Ibu\n" +
  "i told you i was too busy to come home for lebaran. the truth is i'd lost my job and i didn't want you to see it. i spent the holiday alone in my room.";

// Self-check the gate before writing: UTF-8 text, 1-260 chars, exactly two
// parts (a To: line plus one message line), message at most 200 chars.
const lines = ENTRY.split("\n");
if (ENTRY.length < 1 || ENTRY.length > 260) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-260`);
}
if (lines.length !== 2 || !lines[0].startsWith("To: ") || lines[1].length > 200) {
  throw new Error("entry must be exactly a To: line plus one message line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
