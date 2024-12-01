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

