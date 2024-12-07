
export function p1a (input) {
  const [area, actor, obstructions] = parseInputToArray(input, '^', '#')
  let directionVector = [-1,0]
  let ledger = new Set() // value: y,x
  let max = [area.length, area[0].length]

  toCollision(obstructions, actor, directionVector, max, ledger)

  // the ledger contains all the paths the guard traverses
  // if we loop over the paths, and place an obstacle at each point
  // then run the collision detection
  // we should limit time number of operations in each collision test if we reach some limit it's likely a loop causing obstruction

  let steps
  let loopLedger = new Set()
  let count = 0
  for (const point of ledger) {
    steps = 0
    const possibleObstructions = [...obstructions, point.split(',').map(Number)]

    count += toCollision(possibleObstructions, actor, directionVector, max, loopLedger, steps)
    console.log(count)
  }

  return [ledger.size, count]
}

// -------------------------------------------------------------

function toCollision(obstructions, start, vector, max, ledger, steps, exit = false) {
  let blocked = false
  let cursor = start

  while(blocked == false && exit === false) {
    if (steps >= 10000) {
      exit = true
      break;
    }

    const nextCursor = applyVector(vector, cursor)
    blocked = isBlocked(obstructions, nextCursor)

    if (!blocked) {
      ledger.add(`${cursor[0]},${cursor[1]}`)
      cursor = nextCursor
    }

    if (cursor[0] < 0 || cursor[0] >= max[0] || cursor[1] < 0 || cursor[1] >= max[1]) {
      return 0
    }

    steps += 1
  }

  if (exit) {
    return 1
  }

  if (blocked) {
    // rotate vector 90 degrees and return
    vector = rotateRight(vector)
  }

  return toCollision(obstructions, cursor, vector, max, ledger, steps, exit)
}


//-----------------------------------------------------------------

function applyVector([vY, vX], [cY, cX]) {
  return [vY + cY, vX + cX]
}

function rotateRight([vY, vX]) {
  return [vX, -vY]
}

function isBlocked(obstructions, [cY, cX]) {
  let result = false

  for (const [oY, oX] of obstructions) {
    if (cY === oY && cX === oX) {
      result = true
      break
    }
  }

  return result
}

function parseInputToArray (input, actor, obstruction) {
  let actorCoord
  const obstructionCoords = []

  const matrix = input.split('\n').map((row, y) => {
    const xCoord = row.split('')

    xCoord.forEach((value, x) => {
      if (value === actor) {
        actorCoord = [y, x]
      }

      if (value === obstruction) {
        obstructionCoords.push([y, x])
      }
    })

    return xCoord
  })

  return [matrix, actorCoord, obstructionCoords]
}
