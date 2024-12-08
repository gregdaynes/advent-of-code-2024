import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { p1a } from "./day-07.js";

test("day seven", async (t) => {
  const input = readFileSync("07-sample-input.txt", "utf8").trim();
  const inputFile = readFileSync("07-input.txt", "utf8").trim();

  await t.test("part 1", async (t) => {
    await t.test("part 1 sample data", () => {
      const results = p1a(input);
      assert.equal(results, 3749);
    });

    await t.test("part 1 actual data", () => {
      const results = p1a(inputFile);
      assert.equal(results, 0);
    });
  });
});
