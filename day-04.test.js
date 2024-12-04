import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from 'node:fs'
import { p1a, p2a } from './day-04.js'

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
      const results = p1a(input)
      assert.equal(results, 18)
    })

    await t.test('part 1 actual data', () => {
      const results = p1a(inputFile)
      assert.equal(results, 2583)
    })
  })

  await t.test('part 2', async t => {
    await t.test('part 2 sample data', () => {
      const results = p2a(input)
      assert.equal(results, 9)
    })

    await t.test('part 2 actual data', () => {
      const results = p2a(inputFile)
      assert.equal(results, 1978)
    })
  })
})
