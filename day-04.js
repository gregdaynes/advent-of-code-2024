function countValidWordsForCoord(input, [y,x]) {
  const matrix = [
    [[y,x], [y-1,x],   [y-2,x],   [y-3,x]  ], // verticalBackwards
    [[y,x], [y-1,x+1], [y-2,x+2], [y-3,x+3]], // upright
    [[y,x], [y,x+1],   [y,x+2],   [y,x+3]  ], // horizontal
    [[y,x], [y+1,x+1], [y+2,x+2], [y+3,x+3]], // downright
    [[y,x], [y+1,x],   [y+2,x],   [y+3,x]  ], // vertical
    [[y,x], [y+1,x-1], [y+2,x-2], [y+3,x-3]], // downleft
    [[y,x], [y,x-1],   [y,x-2],   [y,x-3]  ], // horizontalBackwards
    [[y,x], [y-1,x-1], [y-2,x-2], [y-3,x-3]], // upleft
  ]

  // returns count of valid words
  return matrix.reduce((acc, coords) =>
    acc += (wordFromCoords(input, coords) === 'XMAS' && 1), 0)
}

// returns a string of letters from coordinates, eg: XMAS
function wordFromCoords (input, coords) {
  // destructuring coord into [y, x] is slower than coord[0], coord[1] looups
  return coords.reduce((acc, coord) => acc + input[coord[0]]?.[coord[1]], '')
}

export function p1a (input) {
  const input2dArray = parseInputToArray(input)
  const map = findallLetterCoordiates(input2dArray, 'X')

  const count = map.reduce((acc, coord) => {
    return acc += countValidWordsForCoord(input2dArray, coord)
  }, 0)

  return count
}

export function p2a (input) {
  const input2dArray = parseInputToArray(input)
  const map = findallLetterCoordiates(input2dArray, 'A')

  let count = 0
  for (const [aY, aX] of map) {
    // tl tr br bl
    const quadrants = [
      [aY - 1, aX - 1],
      [aY - 1, aX + 1],
      [aY + 1, aX + 1],
      [aY + 1, aX - 1],
    ]

    const letters = quadrants.reduce((acc, coord) => {
      return acc + input2dArray[coord[0]]?.[coord[1]]
    }, '')

    switch (letters) {
      case 'MMSS':
      case 'MSSM':
      case 'SSMM':
      case 'SMMS':
        count++
      default:
        break;
    }
  }

  return count
}

// Helper functions ---

function parseInputToArray (input) {
  return input.split('\n').map(row => row.split(''))
}

function findallLetterCoordiates (input2dArray, letter) {
  const map = []

  for (const y in input2dArray) {
    for (const x in input2dArray[y]) {
      if (input2dArray[y][x] === letter) {
        map.push([Number(y), Number(x)])
      }
    }
  }

  return map
}
