export function p1a (input, part2 = false) {
  const rows = input.split('\n')
    .map(row => row.split(/[^\d]+/))
    .map(row => row.map(Number))

  const operations = [add, multiply]
  if (part2) operations.push(combine)

  function perform (target, ...numbers) {
    // early exit if operation exceeds target
    if (numbers[0] > target) return 0

    // if only a single number, check
    if (numbers.length === 1) {
      return numbers[0] === target ? numbers[0] : 0
    }

    for (const operation of operations) {
      const operationResult = operation(...numbers)
      const rest = numbers.slice(2)

      const result = perform(
        target,
        operationResult,
        ...rest
      )

      if (result) {
        return result
      }
    }

    return 0
  }

  return rows.reduce((acc, numbers) =>
    acc += perform(...numbers), 0)
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
