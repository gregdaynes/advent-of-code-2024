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

export function p2a (input) {
  const start = performance.now()
  const reports = input.split('\n')

  for (const i in reports) {
    const levels = reports[i].split(' ').map(l => parseInt(l))
    let levelSkipped = false

    let increasing = false

    const [current, next, after] = levels
    if (current < next && next <= current + 3) {
      // increasing
      increasing = true
    } else if (current > next && next >= current - 3) {
      // decreasing
    } else if (current < after && after <= current + 3) {
      // increasing
      increasing = true
    } else if (current > after && after >= current - 3) {
      // decreasing
    }

    if (increasing) {
      for (let j = 0; j < levels.length; j++) {
        const currentLevel = levels[j]
        const nextLevel = levels[j + 1]

        if (!nextLevel) break;

        if (currentLevel === nextLevel) {
          if (!levelSkipped) {
            console.log('🔴', reports[i], { levelSkipped, currentLevel, nextLevel }, '+')
            // safe
            levelSkipped = true
            levels.splice(j + 1, 1)

            j--
            continue;
          }

          // unsafe
          reports[i] = false
          break;
        } else if (currentLevel < nextLevel && nextLevel <= currentLevel + 3) {
            console.log('🟢', reports[i], { levelSkipped, currentLevel, nextLevel }, '+')
          // safe
        } else {
          if (!levelSkipped) {
            console.log('🔴', reports[i], { levelSkipped, currentLevel, nextLevel }, '+')
            // safe
            levelSkipped = true
            levels.splice(j + 1, 1)

            j--
            continue;
          }

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

        if (currentLevel === nextLevel) {
          if (!levelSkipped) {
            console.log('🔴', reports[i], { levelSkipped, currentLevel, nextLevel }, '-')
            // safe
            levelSkipped = true
            levels.splice(j + 1, 1)
            j--
            continue;
          }

          // unsafe
          reports[i] = false
          break;
        } else if (currentLevel > nextLevel && nextLevel >= currentLevel - 3) {
            console.log('🟢', reports[i], { levelSkipped, currentLevel, nextLevel }, '-')
          // safe
        } else {
          if (!levelSkipped) {
            console.log('🔴', reports[i], { levelSkipped, currentLevel, nextLevel }, '-')
            // safe
            levelSkipped = true
            levels.splice(j + 1, 1)
            j--
            continue;
          }

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


