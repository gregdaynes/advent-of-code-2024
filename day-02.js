export function p1a (input) {
  const start = performance.now()
  const reports = input.split('\n')

  for (const i in reports) {
    const levels = reports[i].split(' ').map(l => parseInt(l))
    const increasing = levels[1] > levels[0] ? true : false

    if (increasing) {
      for (let j = 0; j < levels.length; j++) {
        const currentLevel = levels[j]
        const nextLevel = levels[j + 1]

        if (!nextLevel) break;

        if (currentLevel < nextLevel && nextLevel <= currentLevel + 3) {
          // safe
        } else {
          // unsafe
          reports[i] = false
          break;
        }
      }
    } else {
      for (let j = 0; j < levels.length; j++) {
        const currentLevel = levels[j]
        const nextLevel = levels[j + 1]

        if (!nextLevel) break;

        if (currentLevel > nextLevel && nextLevel >= currentLevel - 3) {
          // safe
        } else {
          // unsafe
          reports[i] = false
          break;
        }
      }
    }
  }
  console.log(performance.now() - start)

  return reports
}
