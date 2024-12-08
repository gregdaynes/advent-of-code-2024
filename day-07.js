export function p1a (input) {
  const rows = input.split('\n')
  const validTests = new Set()

  for (const row of rows) {
    let [testValue, sequence] = row.split(':')
    const values = sequence.trim().split(' ').map(BigInt)
    testValue = Number(testValue)

    const operators = generateOperators(values.length - 1)

    for (const operatorSet of operators) {
      const x = values.flatMap((v, i) => {
        if (operatorSet[i]) {
          return [v, operatorSet[i]]
        }

        return v
      })

      const y = x.reduce((acc, v) => {
        if (typeof v === 'bigint') {
          return eval(`${acc} ${v}`)
        }

        return `${acc} ${v}`
      }, '')

      if (testValue === y) {
        validTests.add(testValue)
      }
    }
  }

  const result = [...validTests].reduce((acc, value) => {
    return acc + value
  })

  return result
}

function generateOperators(count) {
  const chars = ['+', '*'];
  var max = Math.pow(2, count);
  const operators = []

  for (var i = 0; i < max; i++) {
    let s = []
    let x = i;

    while (s.length < count) {
      s.push(chars[x & 1]);
      x >>= 1;
    }

    operators.push(s)
  }

  return operators
}
