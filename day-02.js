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

  function isValid (a, b) {
    if (a < b && b <= a + 3) return true
    if (a > b && b >= a - 3) return true
    return false
  }

  for (const report in reports) {
    const levels = reports[report].split(' ').map(Number)
    let safe = true

    let arrays = [levels]

    for (const i in levels) {
      const levelsClone = [...levels]
      levelsClone.splice(i, 1)
      arrays.push(levelsClone)
    }

    arrays = arrays.map(levels => {
      let levelsInvalid = 0

      for (let i = 0; i < levels.length; i++) {
        if (!levels[i + 1]) continue;
        const valid = isValid(levels[i], levels[i+1])

        if (!valid) {
          levelsInvalid += 1
          break;
        }
      }

      let incStable = true
      for (let i = 0; i < levels.length; i++) {
        const c = levels[i]
        const n = levels[i + 1]
        if (!n) continue;

        if (c < n && n <= c + 3) {

        } else {
          incStable = false
        }
      }

      let decStable = true
      for (let i = 0; i < levels.length; i++) {
        const c = levels[i]
        const n = levels[i + 1]
        if (!n) continue;

        if (c > n && n >= c - 3) {

        } else {
          decStable = false
        }
      }

      if (!incStable && !decStable) {
        levelsInvalid += 1
      }

      return levelsInvalid === 0
    })

    //we need at least 1 pass
    if (arrays.filter(Boolean).length === 0) {
      safe = false
    }

    reports[report] = safe
  }

  return reports.reduce((acc, item) => {
    if (item === true) return acc + 1
    return acc
  }, 0)
}
