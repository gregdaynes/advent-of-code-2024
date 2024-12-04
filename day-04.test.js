import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from 'node:fs'

test('day four', async t => {
  let input =
    'MMMSXXMASM\n' +
    'MSAMXMSMSA\n' +
    'AMXSXMAAMM\n' +
    'MSAMASMSMX\n' +
    'XMASAMXAMM\n' +
    'XXAMMXXAMA\n' +
    'SMSMSASXSS\n' +
    'SAXAMASAAA\n' +
    'MAMMMXMMMM\n' +
    'MXMXAXMASX'.trim()
  const inputFile = readFileSync('04-input.txt', 'utf8').trim();

  await t.test('part 1', () => {
    // find all the occurrances of XMAS
    // horizontal vertical, diagonal, backwards, overlaping


  })
})
