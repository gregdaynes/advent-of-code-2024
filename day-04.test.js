import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from 'node:fs'
import { p1a } from './day-04.js'

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

  await t.test('part 1', async t => {
    await t.test('part 1 sample data', () => {
      // find all the occurrances of XMAS
      // horizontal vertical, diagonal, backwards, overlaping

      // if we turn the input into a 2d array, we can use [x,y] coordinates to find characters
      // a function to calculate each direction
      // when converting to 2d array, index all X positions
      // for each X
      // - take [x,y]
      // - compute the horizontal coordinates for each letter M A S - [x+1,y][x+2,y][x+3,y]
      // - repeat for direction - should be 8 in total
      // - if direction can't be computed - eg: too close to an edge, skip it.
      // - test each direction letter coords for a match
      // - sum complete matches per X
      // sum all matches

      const results = p1a(input)
      assert.equal(results, 18)
    })

    await t.test('part 1 actual data', () => {
      const results = p1a(inputFile)
      assert.equal(results, 2583)
    })
  })
})
