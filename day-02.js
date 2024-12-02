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
  const reports = input.split('\n')

  function isValid (a, b) {
    if (a < b && b <= a + 3) return true // valid ascend
    if (a > b && b >= a - 3) return true // valid decend
    return false
  }

  for (const report in reports) {
    console.log('======================')
    console.log(`report ${report}:`, reports[report])
    const levels = reports[report].split(' ').map(Number)

    let skipped
    let safe = true

    // intentionally skip first and last
    for (let i = 1; i < levels.length - 1; i++) {
      console.log({ p: levels[i - 1], c: levels[i], n: levels[i+1] })

      const p = i - 1
      const c = i
      const n = i + 1

      if (skipped) {
        if (skipped === p) {
          console.log('p previously skipped')
        }

        if (skipped === c) {
          console.log('c previously skipped')

        }

        if (skipped === n) {
          console.log('n previously skipped')
        }
      }

      const previousCurrent = isValid(levels[i - 1], levels[i])
      const currentNext = isValid(levels[i], levels[i+1])
      const previousNext = isValid(levels[i - 1], levels[i+1])

      if (previousCurrent && currentNext) {
        console.log({ previousCurrent, currentNext, previousNext, skipped })
        console.log('🟢')

        continue;
      }

      if (!previousCurrent && !currentNext) {
        console.log({ previousCurrent, currentNext, previousNext, skipped })

        if (skipped === undefined) {
          skipped = i
          console.log('ccc', 'skipping', i)
          continue;
        }

        safe = false
        break;
      }

      if (!previousCurrent && !currentNext && previousNext) {
        console.log({ previousCurrent, currentNext, previousNext, skipped })

        if (skipped === undefined) {
          skipped = i
          console.log('aa', 'skipping', i)
          continue;
        }

        safe = false
        break;
      }

      if (!previousCurrent && currentNext && previousNext) {
        console.log({ previousCurrent, currentNext, previousNext, skipped })

        if (skipped === undefined) {
          skipped = i - 1
          console.log('bb', 'skipping', i - 1)
          continue;
        }


        safe = false
        break;
      }

      if (previousCurrent && !currentNext) {
         console.log({ previousCurrent, currentNext, previousNext, skipped })

        if (skipped === undefined) {
          skipped = i + 1
          console.log('xx', 'skipping', i + 1)
          continue;
        }

        safe = false
        break;
      }



      if (!previousCurrent && !previousNext) {
        console.log({ previousCurrent, currentNext, previousNext, skipped })

        if (skipped === undefined) {
          skipped = i - 1
          console.log('yy', 'skipping', i - 1)
          continue;
        }


        safe = false
        break;
      }

      if (!previousCurrent && !currentNext) {
        console.log({ previousCurrent, currentNext, previousNext, skipped })

        if (skipped === undefined) {
          skipped = i - 1
          console.log('zz', 'skipping', i - 1)
          continue;
        }

        safe = false
        break;
      }

      console.log('breakout', { previousCurrent, currentNext, previousNext, skipped })
    }

    if (safe === false) {
      console.log('unsafe')
      reports[report] = false
      continue;
    }


    let reportWithoutSkipped = reports[report].split(' ').map(Number)
    reportWithoutSkipped[skipped] = undefined
    reportWithoutSkipped = reportWithoutSkipped.filter(Boolean)
    console.log(reports[report], reportWithoutSkipped.filter(Boolean))

    let direction

    for (let i = 0; i < reportWithoutSkipped.length; i++) {
      const c = i;
      const n = i + 1;

      if (!n) {
        continue;
      }

      if (!direction) {
        direction = c < n ? 1 : -1
      }

      if (direction === 1 && c < n) continue
      if (direction === -1 && c > n) continue

      safe = false
      break;
    }

    console.log('xxxxxxxxxxxxxxxxxxxx')
    console.log('direction', direction, safe)

    reports[report] = safe
  }

  return reports
}


