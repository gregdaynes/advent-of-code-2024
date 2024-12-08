export function p1a (input) {
  const rows = input.split('\n')
    .map(row => row.split(/[^\d]+/))
    .map(row => row.map(Number))

  let sum = 0
  for (const row of rows) {
    const x = perform(...row)

    if (x === row[0]) {
      sum += row[0]
    }
  }

  return sum
}

function perform (target, ...numbers) {
  const operations = [add, multiply]

  // early exit if operation exceeds target
  if (numbers[0] > target) {
    return false
  }

  // if only a single number, check
  if (numbers.length === 1) {
    return numbers[0] === target
  }

  for (const operation of operations) {
    const result = operation(numbers[0], numbers[1])
    const recurse = perform(target, result, ...numbers.slice(2))

    if (recurse) {
      return target
    }
  }

  return false
}

function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}
