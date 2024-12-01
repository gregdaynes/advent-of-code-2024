export function day1pt1 (input) {
  const pairs = input.split('\n')

  const leftCollection = []
  const rightCollection = []

  for (const pair of pairs) {
    const [left, right] = pair.split('   ')
    if (!left || !right) continue

    leftCollection.push(left)
    rightCollection.push(right)
  }

  leftCollection.sort()
  rightCollection.sort()

  let distanceAcc = 0

  while(leftCollection.length) {
    distanceAcc += Math.abs(leftCollection.shift() - rightCollection.shift())
  }

  return distanceAcc
}

export function day1pt1alt (input) {
  const regex = /(?<left>\d+)\s+(?<right>\d+)/gm

  const Left = []
  const Right = []

  ;[...input.matchAll(regex)]
    .forEach(({  groups: { left, right } }) => {
      Left.push(left)
      Right.push(right)
    })

  Left.sort()
  Right.sort()

  let distanceAcc = 0

  for (const i in Left) {
    distanceAcc = distanceAcc + Math.abs(Left[i] - Right[i])
  }

  return distanceAcc
}

export function day1pt2 (input) {
  const regex = /(?<left>\d+)\s+(?<right>\d+)/gm

  const Left = []
  const Right = []

  ;[...input.matchAll(regex)]
    .forEach(({  groups: { left, right } }) => {
      Left.push(left)
      Right.push(right)
    })

  let similarity = 0

  for (const left of Left) {
    const occurrances = Right.filter((right) => left === right).length
    similarity += left * occurrances
  }

  return similarity
}

export function day1pt2alt (input) {
  const regex = /(?<left>\d+)\s+(?<right>\d+)/gm

  return [...input.matchAll(regex)]
    .reduce((acc, current, i) => {
      const [_, left] = current
      const rightMatch = new RegExp("\\d+\\W+(" + left + ")$", "gm")
      const count = [...input.matchAll(rightMatch)].length

      return acc + left * count
    }, 0)
}
