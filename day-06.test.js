import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from 'node:fs'
import { p1a } from './day-06.js'

test('day four', async t => {
  const input = readFileSync('06-sample-input.txt', 'utf8').trim();
  const inputFile = readFileSync('06-input.txt', 'utf8').trim();

  await t.test('part 1', async t => {
    await t.test('part 1 sample data', () => {
      const results = p1a(input)
      assert.equal(results, 41)
    })

    await t.test('part 1 actual data', () => {
      const results = p1a(inputFile)
      assert.equal(results, 5086)
    })
  })
})
