import test from "node:test"
import assert from "node:assert/strict"
import { p1a, p2a } from './day-02.js'
import { readFileSync } from 'node:fs'

test('day two', async t => {
  let input = `7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9`
  const inputFile = readFileSync('02-input.txt', 'utf8');

  await t.skip('part 1', async t => {
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
      const reports = p2a(input)

      assert.equal(reports[0], true)
      assert.equal(reports[1], false)
      assert.equal(reports[2], false)
      assert.equal(reports[3], true)
      assert.equal(reports[4], true)
      assert.equal(reports[5], true)
    })

    await t.skip('p2a sample data extended', () => {
      const reports = p2a(input + '\n35 37 38 41 43 41')

      assert.equal(reports[0], true)
      assert.equal(reports[1], false)
      assert.equal(reports[2], false)
      assert.equal(reports[3], true)
      assert.equal(reports[4], true)
      assert.equal(reports[5], true)
      assert.equal(reports[6], true)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '1 3 2 4 5'
      const reports = p2a(input)

      assert.equal(reports[0], true)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '86 86 87 90 90 91 93 93'
      const reports = p2a(input)

      assert.equal(reports[0], false)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '8 9 10 11\n48 46 47 49 51 54 56\n1 1 2 3 4 5\n1 2 3 4 5 5\n5 1 2 3 4 5\n1 4 3 2 1\n1 6 7 8 9\n1 2 3 4 3\n9 8 7 6 7\n7 10 8 10 11\n29 28 27 25 26 25 22 20'
      const reports = p2a(input)

      assert.equal(reports.filter(Boolean).length, 11)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '9 7 6 2 1'
      const reports = p2a(input)

      assert.equal(reports[0], false)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '9 7 5 2 1'
      const reports = p2a(input)

      assert.equal(reports[0], true)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '2 6 1'
      const reports = p2a(input)

      assert.equal(reports[0], true)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '2 1 3 5 8'
      const reports = p2a(input)

      assert.equal(reports[0], true)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '13 9 11 9 6'
      const reports = p2a(input)

      assert.equal(reports[0], true)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '48 44 45 44 41 39 36 34'
      const reports = p2a(input)

      assert.equal(reports[0], true)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '1 5 6'
      const reports = p2a(input)

      assert.equal(reports[0], true)
    })

    await t.skip('p2a sample data extended', () => {
      const input = '52 52 51 52 52'
      const reports = p2a(input)

      assert.equal(reports[0], false)
    })

    await t.test('p2a sample data extended', () => {
      const input = '8 6 4 4 1'
      const reports = p2a(input)

      assert.equal(reports[0], true)
    })

    await t.test('p2a sample data extended', () => {
      const input = '1 2 7 8 9'
      const reports = p2a(input)

      assert.equal(reports[0], false)
    })

    await t.skip('p2a actual data', () => {
      const reports = p2a(inputFile)
      console.log(reports.filter(Boolean))
      assert.equal(reports.filter(Boolean).length, 573)
    })
  })
})
