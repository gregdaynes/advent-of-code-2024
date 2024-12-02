import test from "node:test"
import assert from "node:assert/strict"
import { p1a } from './day-02.js'
import { readFileSync } from 'node:fs'

test('day two', async t => {
  let input = `7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9`
  const inputFile = readFileSync('02-input.txt', 'utf8');

  await t.test('part 1', async t => {
    await t.test('p1a sample data', () => {
      const reports = p1a(input)

      assert.equal(reports[0], '7 6 4 2 1')
      assert.equal(reports[1], false)
      assert.equal(reports[2], false)
      assert.equal(reports[3], false)
      assert.equal(reports[4], false)
      assert.equal(reports[5], '1 3 6 7 9')
      assert.equal(reports.filter(Boolean).length, 2)
    })

    await t.test('p1a sample data extended', () => {
      input = input + '\n35 37 38 41 43 41'
      const reports = p1a(input)

      assert.equal(reports[0], '7 6 4 2 1')
      assert.equal(reports[1], false)
      assert.equal(reports[2], false)
      assert.equal(reports[3], false)
      assert.equal(reports[4], false)
      assert.equal(reports[5], '1 3 6 7 9')
      assert.equal(reports[6], false)
      assert.equal(reports.filter(Boolean).length, 2)
    })

    await t.test('p1a actual data', () => {
      const reports = p1a(inputFile)
      assert.equal(reports.filter(Boolean).length, 524)
    })
  })
})
