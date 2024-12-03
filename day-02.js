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
  //console.log(performance.now() - start)

  return reports
}

export function p2a (input) {
  const reports = input.split('\n')

  function isValid (levels) {
    let inc = true
    let dec = true

    for (let i = 0; i < levels.length - 1; i++) {
      const c = levels[i]
      const n = levels[i + 1]

      if (!(c < n && n <= c + 3)) {
        inc = false
      }

      if (!(c > n && n >= c - 3)) {
        dec = false
      }
    }

    if (inc || dec) return true

    return false
  }

  for (const report in reports) {
    const levels = reports[report].split(' ').map(Number)
    let safe = true

    let arrays = []
    for (const i in levels) {
      const levelsClone = [...levels]
      levelsClone.splice(i, 1)
      arrays.push(levelsClone)
    }

    arrays = arrays.map(isValid).filter(Boolean)

    //we need at least 1 valid set of levels
    if (!arrays.length) safe = false

    reports[report] = safe
  }

  // return made safe report count
  return reports.reduce((acc, item) => item ? acc + 1 : acc, 0)
}
