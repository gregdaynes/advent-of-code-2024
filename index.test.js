import test from "node:test"
import assert from "node:assert/strict"
import { day1, day1alt } from './index.js'

test('day one', async (t) => {
  const input = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`

  await t.test('left 1 and right 3 have a distance of 2', () => {
    const distanceAccumulator = day1(input)
    assert.equal(distanceAccumulator, 11)
  })

  await t.test('left 1 and right 3 have a distance of 2', () => {
    const distanceAccumulator = day1alt(input)
    assert.equal(distanceAccumulator, 11)
  })
})
