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

  console.log(area, actor, obstructions)

  return 41
}

// record a map of
function parseInputToArray (input, actor, obstruction) {
  const actorCoord = []
  const obstructionCoords = []

  const matrix = input.split('\n').map((row, y) => {
    const xCoord = row.split('')

    xCoord.forEach((value, x) => {
      if (value === actor) {
        actorCoord.push([y, x])
      }

      if (value === obstruction) {
        obstructionCoords.push([y, x])
      }
    })

    return xCoord
  })

  return [matrix, actorCoord, obstructionCoords]
}
