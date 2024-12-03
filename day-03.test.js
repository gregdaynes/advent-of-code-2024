import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from 'node:fs'
import _ from 'lodash'

test('day three', async t => {
  let input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
  const inputFile = readFileSync('03-input.txt', 'utf8').trim();

  await t.test('part 1', async t => {
    await t.test('p1 sample dataset', () => {
      const matcher = /mul\((?<a>\d+),(?<b>\d+)\)/gm
      const matches = input.matchAll(matcher)

      let sum = 0
      for (const match of matches) {
        const group = match.groups

        sum = sum + (Number(group.a) * Number(group.b))
      }

      assert.equal(sum, 161)
    })

    await t.test('p1 actual dataset', () => {
      const matcher = /mul\((?<a>\d+),(?<b>\d+)\)/gm
      const matches = inputFile.matchAll(matcher)

      let sum = 0
      for (const match of matches) {
        const group = match.groups

        sum = sum + (Number(group.a) * Number(group.b))
      }

      assert.equal(sum, 188192787)
    })
  })

  await t.test('part 2', async t => {
    const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

    await t.test('p2 sample dataset', () => {
      const matcher = /(mul\((?<a>\d+),(?<b>\d+)\)|(?<dont>don't\(\))|(?<do>do\(\)))/gm
      const matches = input.matchAll(matcher)

      let enabled = true

      let sum = 0
      for (const match of matches) {
        const group = match.groups

        if (group.dont) {
          enabled = false
          continue
        }

        if (group.do) {
          enabled = true
          continue
        }

        if (enabled) {
          sum = sum + (Number(group.a) * Number(group.b))
        }
      }

      assert.equal(sum, 48)
    })

    await t.test('p2 actual dataset', () => {
      const matcher = /(mul\((?<a>\d+),(?<b>\d+)\)|(?<dont>don't\(\))|(?<do>do\(\)))/gm
      const matches = inputFile.matchAll(matcher)

      let enabled = true

      let sum = 0
      for (const match of matches) {
        const group = match.groups

        if (group.dont) {
          enabled = false
          continue
        }

        if (group.do) {
          enabled = true
          continue
        }

        if (enabled) {
          sum = sum + (Number(group.a) * Number(group.b))
        }
      }

      assert.equal(sum, 113965544)
    })
  })
})

