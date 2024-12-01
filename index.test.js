import test from "node:test"
import assert from "node:assert/strict"
import { day1pt1, day1pt1alt } from './index.js'
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
})
