export function p1a (input, part2 = false) {
  const rows = [0,
    ...input.split('\n').map(row => row.split(/[^\d]+/).map(Number))]

  const options = [add, multiply]
  if (part2) {
    options.push(combine)
  }

  return rows.reduce((acc, row) =>
    acc += applyOperations(options, ...row))
}

function applyOperations (opts, test, head, next, ...rest) {
  // early exit if previous operation result exceeds test
  if (head > test) {
    return 0
  }

  // if no more numbers to apply check gainst head
  if (!next) {
    return head === test ? head : 0
  }

  for (const fn of opts) {
    if (applyOperations(opts, test, fn(head, next), ...rest)) {
      return test
    }
  }

  return 0
}

function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

function combine(a, b) {
  return Number(a + '' + b)
}
