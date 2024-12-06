export function p1a (input) {
  // actor is represented by ^
  // obstructions represented by #
  // when actor's next move would be into an obstruction turn to right
  // repeat until actor leaves area
  // return number of moves actor has made

  // 0) parse input into 2d array - maybe shortcut and record position of all obstructions
  // 1) get the actor position
  // 2) get the direction vector of the actor
  // 3) get position of object in vector path or bounds
  // 3b) if bounds, add all spaces to total and return
  // 4) record number of DISTINCT positions
  // 5) rotate direction vector
  // 6) repeat

  const [area, actor, obstructions] = parseInputToArray(input, '^', '#')
  let directionVector = [-1,0]
  let ledger = new Set() // value: y,x
  let max = [area.length, area[0].length]

  console.log(actor, obstructions, max)

  toCollision(obstructions, actor, directionVector, ledger, max)
  console.log(ledger)

  return 41
}

// record a map of
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

function toCollision(obstructions, start, vector, ledger, max) {
  let blocked = false
  let cursor = start
  let end = false

  while (blocked === false) {
    const nextCursor = applyVector(vector, cursor)
    console.log({ cursor, nextCursor })

    blocked = isBlocked(obstructions, nextCursor)
    if (blocked) {
      console.log(nextCursor, 'is blocked')
    }

    if (!blocked) {
      cursor = nextCursor
      ledger.add(`${cursor[0]},${cursor[1]}`)
    }

    if (cursor[0] < 0 || cursor[0] > max[0] || cursor[1] < 0 || cursor[1] > max[1]) {
      console.log({ cursor })
      end = true;
      break;
    }
  }

  if (end) {
    console.log('fin')
    return;
  }

  // rotate vector 90 degrees and return
  vector = rotateRight(vector)
  console.log('rotate')

  console.log('do it again')
  toCollision(obstructions, cursor, vector, ledger, max)
}

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
