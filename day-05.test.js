import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from 'node:fs'
import { p1a } from './day-05.js'

test('day four', async t => {
  const input = readFileSync('05-sample-input.txt', 'utf8').trim();
  const inputFile = readFileSync('05-input.txt', 'utf8').trim();

  await t.test('part 1', async t => {
    await t.test('part 1 sample data', () => {
      const results = p1a(input)
      assert.equal(results[0], 143)
    })

    await t.test('part 1 actual data', () => {
      const results = p1a(inputFile)
      assert.equal(results[0], 4996)
    })
  })

  await t.test('part 2', async t => {
    await t.test('part 2 sample data', () => {
      const results = p1a(input)
      assert.equal(results[1], 123)
    })

    await t.test('part 2 actual data', () => {
      const results = p1a(inputFile)
      assert.equal(results[1], 6311)
    })
  })
})
