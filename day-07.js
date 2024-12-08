export function p1a (input, part2 = false) {
  const rows = input.split('\n')
    .map(row => row.split(/[^\d]+/))
    .map(row => row.map(Number))

  const operations = [add, multiply]
  if (part2) operations.push(combine)

  return rows.reduce((acc, numbers) =>
    acc += perform(operations, ...numbers), 0)
}

function perform (operations, target, ...numbers) {
  // early exit if operation exceeds target
  if (numbers[0] > target) {
    return 0
  }

  // if only a single number, check
  if (numbers.length === 1) {
    return numbers[0] === target
  }

  for (const operation of operations) {
    const rest = numbers.slice(2)
    const operationResult = operation(numbers[0], numbers[1])
    const result = perform(operations, target, operationResult, ...rest)

    if (result) {
      return target
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
