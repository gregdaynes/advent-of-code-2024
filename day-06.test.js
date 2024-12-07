import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from 'node:fs'
import { p1a } from './day-06.js'

test('day six', async t => {
  const input = readFileSync('06-sample-input.txt', 'utf8').trim();
  const inputFile = readFileSync('06-input.txt', 'utf8').trim();

  await t.test('part 1', async t => {
    await t.skip('part 1 sample data', () => {
      const results = p1a(input)
      assert.equal(results[0], 41)
    })

    await t.skip('part 1 actual data', () => {
      const results = p1a(inputFile)
      assert.equal(results[0], 5086)
    })
  })

  await t.test('part 2', async t => {
    await t.skip('part 2 sample data', () => {
      const results = p1a(input)
      assert.equal(results[1], 6)
    })

    await t.test('part 2 actual data', () => {
      const results = p1a(inputFile)
      assert.equal(results[1], 1770)
    })
  })
})
