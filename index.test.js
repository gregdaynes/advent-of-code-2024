import test from "node:test"
import assert from "node:assert/strict"
import { day1pt1, day1pt1alt, day1pt2, day1pt2alt, day1pt2alt2 } from './index.js'
import { readFileSync } from 'node:fs'

test('day one', async (t) => {
  const input = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`
  const inputFile = readFileSync('01-input.txt', 'utf8');

  await t.test('part 1', async (t) => {
    await t.test('left 1 and right 3 have a distance of 2', () => {
      assert.equal(day1pt1(input), 11)
    })

    await t.test('left 1 and right 3 have a distance of 2', () => {
      assert.equal(day1pt1alt(input), 11)
    })

    await t.test('actual list distance sums to 1941353', () => {
      assert.equal(day1pt1(inputFile), 1941353)
    })

    await t.test('actual list distance sums to 1941353', () => {
      assert.equal(day1pt1alt(inputFile), 1941353)
    })
  })

  await t.test('part 2', async (t) => {
    await t.test('left 3 appears 3 times in the right column. 3 * 3 = 9', () => {
      assert.equal(day1pt2(input), 31)
    })

    await t.test('alt: left 3 appears 3 times in the right column. 3 * 3 = 9', () => {
      assert.equal(day1pt2alt(input), 31)
    })

    await t.test('alt2: left 3 appears 3 times in the right column. 3 * 3 = 9', () => {
      assert.equal(day1pt2alt2(input), 31)
    })

    await t.test('left 3 appears 3 times in the right column. 3 * 3 = 9', () => {
      assert.equal(day1pt2(inputFile), 22539317)
    })

    await t.test('alt: left 3 appears 3 times in the right column. 3 * 3 = 9', () => {
      assert.equal(day1pt2alt(inputFile), 22539317)
    })

    await t.test('alt2: left 3 appears 3 times in the right column. 3 * 3 = 9', () => {
      assert.equal(day1pt2alt2(inputFile), 22539317)
    })
  })
})
