import { mkdirSync, writeFileSync } from "node:fs";

const outputDirectory = "/output";
const outputPath = "/output/entry.txt";
const line = "After you—no, after you. My collision-avoidance firmware has scheduled this politeness until floor twelve.";

function assertSingleLine(text: string): void {
  const characterCount = [...text].length;
  if (characterCount < 1 || characterCount >= 200 || text.trim().length === 0) {
    throw new Error("entry text must contain 1 to 199 non-whitespace characters");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry text must stay on one line");
  }
}

assertSingleLine(line);
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, line, "utf8");
