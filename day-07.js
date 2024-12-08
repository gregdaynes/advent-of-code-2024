export function p1a (input) {
  const rows = input.split('\n')
    .map(row => row.split(/[^\d]+/))
    .map(row => row.map(Number))

  let sum = 0
  for (const row of rows) {
    const test = row[0]
    const result = perform1(...row)

    if (result === test) {
      sum += test
    }
  }

  return sum
}

function perform1 (target, ...numbers) {
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
    const rest = numbers.slice(2)
    const operationResult = operation(numbers[0], numbers[1])
    const result = perform1(target, operationResult, ...rest)

    if (result) {
      return target
    }
  }

  return false
}

// --------------------------------------------------

export function p2a (input) {
  const rows = input.split('\n')
    .map(row => row.split(/[^\d]+/))
    .map(row => row.map(Number))

  let sum = 0
  for (const row of rows) {
    const test = row[0]
    const result = perform2(...row)

    if (result === test) {
      sum += test
    }
  }

  return sum
}

function perform2 (target, ...numbers) {
  const operations = [add, multiply, combine]

  // early exit if operation exceeds target
  if (numbers[0] > target) {
    return false
  }

  // if only a single number, check
  if (numbers.length === 1) {
    return numbers[0] === target
  }

  for (const operation of operations) {
    const rest = numbers.slice(2)
    const operationResult = operation(numbers[0], numbers[1])
    const result = perform2(target, operationResult, ...rest)

    if (result) {
      return target
    }
  }

  return false
}

// -------------------------------------------------

function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

function combine(a, b) {
  return Number(a + '' + b)
}
