export function day1 (input) {
  const pairs = input.split('\n')

  const leftCollection = []
  const rightCollection = []

  for (const pair of pairs) {
    const [left, right] = pair.split('   ')
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

export function day1alt (input) {
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
