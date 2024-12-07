export function p1a (input) {
  const [area, actor, obstructions] = parseInputToArray(input, '^', '#')
  let directionVector = [-1,0]
  let ledger = new Set() // value: y,x
  let max = [area.length, area[0].length]

  toCollision(obstructions, actor, directionVector, ledger, max)

  return [ledger.size, 6]
}

export function p2a (input) {
  const [area, actor, obstructions] = parseInputToArray(input, '^', '#')
  let directionVector = [0,-1]
  const ledger = new Set() // value: y,x
  const loopLedger = new Set() // value: y,x
  let max = [area.length, area[0].length]

  toCollision(obstructions, actor, directionVector, ledger, max, loopLedger)
  console.log([...loopLedger])

  // [6, 0]

  return [ledger.size, 6]
}

// -------------------------------------------------------------

function toCollision(obstructions, start, vector, ledger, max, loopLedger) {
  let blocked = false
  let cursor = start

  while(blocked == false) {
    const nextCursor = applyVector(vector, cursor)
    blocked = isBlocked(obstructions, nextCursor)

    loopCheck(obstructions, cursor, vector, ledger, max, loopLedger)

    if (!blocked) {
      ledger.add(`${cursor[0]},${cursor[1]}`)
      cursor = nextCursor
    }

    if (cursor[0] < 0 || cursor[0] >= max[0] || cursor[1] < 0 || cursor[1] >= max[1]) {
      return
    }
  }

  if (blocked) {
    // rotate vector 90 degrees and return
    vector = rotateRight(vector)
  }

  return toCollision(obstructions, cursor, vector, ledger, max, loopLedger)
}

// -------------------------------------------------------------

function loopCheck(obstructions, start, vector, ledger, max, loopLedger, count = 0, origin, possibleBlock) {
  console.log(`----- LEG ${count} ----`)

  if (count === 0) {
    origin = [...start]
    possibleBlock  = applyVector(vector, start)
    obstructions.push(possibleBlock)
    console.log('🏡', origin)
  }

  if (count >= 5) {
    return false
  }

  let blocked = false
  let cursor = start


  while(blocked == false) {
    const nextCursor = applyVector(vector, cursor)
    blocked = isBlocked(obstructions, nextCursor)

    if (blocked) {
      console.log('🚫', nextCursor)
    }

    console.log(origin, nextCursor)

    if (nextCursor[0] === origin[0] && nextCursor[1] === origin[1]) {
      console.log('✅ loop')
      loopLedger.add(`${possibleBlock[0]},${possibleBlock[1]}`)
      return
    }

    if (!blocked) {
      cursor = nextCursor
    }

    if (cursor[0] < 0 || cursor[0] >= max[0] || cursor[1] < 0 || cursor[1] >= max[1]) {
      console.log('❌ bounds')
      return
    }
  }

  if (blocked) {
    console.log('🔄', vector)
    // rotate vector 90 degrees and return
    vector = rotateRight(vector)
  }

  return loopCheck(obstructions, cursor, vector, ledger, max, loopLedger, count += 1, origin, possibleBlock)
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
