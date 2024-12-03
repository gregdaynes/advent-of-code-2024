import test from "node:test"
import assert from "node:assert/strict"
import { p1a, p2a } from './day-02.js'
import { readFileSync } from 'node:fs'
import _ from 'lodash'

test('day two', async t => {
  let input = `7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9`
  const inputFile = readFileSync('02-input.txt', 'utf8').trim();

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
      const localInput = input + '\n35 37 38 41 43 41'
      const reports = p1a(localInput)

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

  await t.test('part 2', async t => {
    await t.test('p2a sample data', () => {
      assert.equal(p2a('7 6 4 2 1'), 1)
      assert.equal(p2a('1 2 7 8 9'), 0)
      assert.equal(p2a('9 7 6 2 1'), 0)
      assert.equal(p2a('1 3 2 4 5'), 1)
      assert.equal(p2a('8 6 4 4 1'), 1)
      assert.equal(p2a('1 3 6 7 9'), 1)
    })

    await t.test('p2a sample data extended', () => {
      assert.equal(p2a('1 1 1 1 1'), 0)
      assert.equal(p2a('1 1 2 3 4 5'), 1)
      assert.equal(p2a('1 2 3 2 1 2 3'), 0)
      assert.equal(p2a('1 2 3 4 3'), 1)
      assert.equal(p2a('1 2 3 4 5 5'), 1)
      assert.equal(p2a('1 2 3 4 5'), 1)
      assert.equal(p2a('1 2 3 4 9'), 1)
      assert.equal(p2a('1 2 3 9 5'), 1)
      assert.equal(p2a('1 2 7 8 9'), 0)
      assert.equal(p2a('1 2 9 4 5'), 1)
      assert.equal(p2a('1 4 3 2 1'), 1)
      assert.equal(p2a('1 5 6'), 1)
      assert.equal(p2a('1 6 7 8 9'), 1)
      assert.equal(p2a('1 9 3 4 5'), 1)
      assert.equal(p2a('12 10 13 16 19 21 22'), 1)
      assert.equal(p2a('13 9 11 9 6'), 1)
      assert.equal(p2a('16 13 15 13 12 11 9 6'), 1)
      assert.equal(p2a('2 1 3 5 8'), 1)
      assert.equal(p2a('2 6 1'), 1)
      assert.equal(p2a('29 28 27 25 26 25 22 20'), 1)
      assert.equal(p2a('35 37 38 41 43 41'), 1)
      assert.equal(p2a('36 39 41 43 44 41 44'), 0)
      assert.equal(p2a('39 39 41 44 51'), 0)
      assert.equal(p2a('40 41 43 44 47 46 47 49'), 1)
      assert.equal(p2a('48 44 45 44 41 39 36 34'), 1)
      assert.equal(p2a('48 46 47 49 51 54 56'), 1)
      assert.equal(p2a('5 1 2 3 4 5'), 1)
      assert.equal(p2a('52 52 51 52 52'), 0)
      assert.equal(p2a('57 56 57 59 60 63 64 65'), 1)
      assert.equal(p2a('65 62 65 66 63'), 0)
      assert.equal(p2a('7 10 8 10 11'), 1)
      assert.equal(p2a('8 6 4 4 1'), 1)
      assert.equal(p2a('8 9 10 11'), 1)
      assert.equal(p2a('86 86 87 90 90 91 93 93'), 0)
      assert.equal(p2a('9 2 3 4 5'), 1)
      assert.equal(p2a('9 7 5 2 1'), 1)
      assert.equal(p2a('9 7 6 2 1'), 0)
      assert.equal(p2a('9 8 7 6 7'), 1)
      assert.equal(p2a('91 92 95 93 94'), 1)
    })

    await t.test('p2a actual data', () => {
      const reports = p2a(inputFile)
      assert.equal(reports, 569)
    })
  })
})
