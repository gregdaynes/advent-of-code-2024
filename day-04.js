function verticalBackwards(max, [y,x]) {
  //if (y - 3 >= 0) {
    return [[y,x], [y-1,x], [y-2,x], [y-3,x]]
  //}
}

function upright([yMax, xMax], [y,x]) {
  //if (y - 3 >= 0 && x + 3 <= xMax) {
    return [[y,x], [y-1,x+1], [y-2,x+2], [y-3,x+3]]
  //}
}

function horizontal([yMax, xMax], [y,x]) {
  //if (x + 3 <= xMax) {
    return [[y,x], [y,x+1], [y,x+2], [y,x+3]]
  //}
}

function downright([yMax, xMax], [y,x]) {
  //if (y + 3 <= yMax && x + 3 <= xMax) {
    return [[y,x], [y+1,x+1], [y+2,x+2], [y+3,x+3]]
  //}
}

function vertical([yMax, xMax], [y,x]) {
  //if (y + x <= yMax) {
    return [[y,x], [y+1,x], [y+2,x], [y+3,x]]
  //}
}

function downleft([yMax, xMax], [y,x]) {
  //if (y + 3 <= yMax && x - 3 >= 0) {
    return [[y,x], [y+1,x-1], [y+2,x-2], [y+3,x-3]]
  //}
}

function horizontalBackwards([yMax, xMax], [y,x]) {
  //if (x - 3 >= 0) {
    return [[y,x], [y,x-1], [y,x-2], [y,x-3]]
  //}
}

function upleft(max, [y,x]) {
  //if (y - 3 >= 0 && x - 3 >= 0) {
    return [[y,x], [y-1,x-1], [y-2,x-2], [y-3,x-3]]
  //}
}

export function p1a (input) {
  // if we turn the input into a 2d array, we can use [x,y] coordinates to find characters
  // a function to calculate each direction
  // when converting to 2d array, index all X positions
  // for each X
  // - take [x,y]
  // - compute the horizontal coordinates for each letter M A S - [x+1,y][x+2,y][x+3,y]
  // - repeat for direction - should be 8 in total
  // - if direction can't be computed - eg: too close to an edge, skip it.
  // - test each direction letter coords for a match
  // - sum complete matches per X
  // sum all matches

  // convert input into 2d array.
  const input2dArray = input.split('\n').map(row => row.split(''))
  const xMax = input2dArray[0].length
  const yMax = input2dArray.length
  const max = [yMax, xMax]

  // find all X with coords [y,x]
  const xMap = []
  for (const y in input2dArray) {
    for (const x in input2dArray[y]) {
      if (input2dArray[y][x] === 'X') {
        xMap.push([Number(y), Number(x)])
      }
    }
  }

  const xValidDirections = []
  for (const coord of xMap) {
    const allCoords = [
      verticalBackwards,
      upright,
      horizontal,
      downright,
      vertical,
      downleft,
      horizontalBackwards,
      upleft
    ].map(fn => {
      return fn(max, coord)
    })

    xValidDirections.push(allCoords)
  }

  let count = 0
  for (const validDirections of xValidDirections) {
    for (const direction of validDirections) {
      if (!direction) continue;

      const word = direction.map(([y, x]) => input2dArray[y]?.[x]).join('')

      if (word === 'XMAS') {
        //console.log(direction, word)
        count += 1
      }
    }
  }

  return count
}

export function p2a (input) {
  // convert input into 2d array.
  const input2dArray = input.split('\n').map(row => row.split(''))

  const aMap = []
  for (const y in input2dArray) {
    for (const x in input2dArray[y]) {
      if (input2dArray[y][x] === 'A') {
        aMap.push([Number(y), Number(x)])
      }
    }
  }

  const matches = []
  for (const [aY, aX] of aMap) {
    // tl tr br bl
    const quadrants = [
      [aY - 1, aX - 1],
      [aY - 1, aX + 1],
      [aY + 1, aX + 1],
      [aY + 1, aX - 1],
    ]

    const results = []
    let letters = ''

    for (const [y, x] of quadrants) {
      const charAtCoord = input2dArray[y]?.[x]

      if (['M', 'S'].includes(charAtCoord)) {
        letters += charAtCoord
      }
    }

    if (letters.length === 4) {
      results.push(letters)
    }


    for (const possibleMatch of results) {
      switch (possibleMatch) {
        case 'MMSS':
        case 'MSSM':
        case 'SSMM':
        case 'SMMS':
          matches.push(possibleMatch)
          break;
        default:
          break;
      }
    }
  }

  return matches.length
}
