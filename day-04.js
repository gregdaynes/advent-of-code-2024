export function p1a (input) {
  const input2dArray = parseInputToArray(input)
  const map = findallLetterCoordiates(input2dArray, 'X')

  const validWords = []
  for (const coord of map) {
    const validWord = [
      verticalBackwards,
      upright,
      horizontal,
      downright,
      vertical,
      downleft,
      horizontalBackwards,
      upleft
    ].map(fn => fn(input2dArray, coord))
    .filter(Boolean)

    validWords.push(validWord)
  }

  return validWords.flat().length
}

export function p2a (input) {
  const input2dArray = parseInputToArray(input)
  const map = findallLetterCoordiates(input2dArray, 'A')

  const matches = []
  for (const [aY, aX] of map) {
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
        default:
          break;
      }
    }
  }

  return matches.length
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

function verticalBackwards(input, [y,x]) {
  const lookups = [[y,x], [y-1,x], [y-2,x], [y-3,x]]

  let word = ''
  for (const [y, x] of lookups) {
    word += input[y]?.[x]
  }

  if (word === 'XMAS') {
    return word
  }
}

function upright(input, [y,x]) {
  const lookups = [[y,x], [y-1,x+1], [y-2,x+2], [y-3,x+3]]

  let word = ''
  for (const [y, x] of lookups) {
    word += input[y]?.[x]
  }

  if (word === 'XMAS') {
    return word
  }
}

function horizontal(input, [y,x]) {
  const lookups = [[y,x], [y,x+1], [y,x+2], [y,x+3]]

  let word = ''
  for (const [y, x] of lookups) {
    word += input[y]?.[x]
  }

  if (word === 'XMAS') {
    return word
  }
}

function downright(input, [y,x]) {
  const lookups = [[y,x], [y+1,x+1], [y+2,x+2], [y+3,x+3]]

  let word = ''
  for (const [y, x] of lookups) {
    word += input[y]?.[x]
  }

  if (word === 'XMAS') {
    return word
  }
}

function vertical(input, [y,x]) {
  const lookups = [[y,x], [y+1,x], [y+2,x], [y+3,x]]

  let word = ''
  for (const [y, x] of lookups) {
    word += input[y]?.[x]
  }

  if (word === 'XMAS') {
    return word
  }
}

function downleft(input, [y,x]) {
  const lookups = [[y,x], [y+1,x-1], [y+2,x-2], [y+3,x-3]]

  let word = ''
  for (const [y, x] of lookups) {
    word += input[y]?.[x]
  }

  if (word === 'XMAS') {
    return word
  }
}

function horizontalBackwards(input, [y,x]) {
  const lookups = [[y,x], [y,x-1], [y,x-2], [y,x-3]]

  let word = ''
  for (const [y, x] of lookups) {
    word += input[y]?.[x]
  }

  if (word === 'XMAS') {
    return word
  }
}

function upleft(input, [y,x]) {
  const lookups = [[y,x], [y-1,x-1], [y-2,x-2], [y-3,x-3]]

  let word = ''
  for (const [y, x] of lookups) {
    word += input[y]?.[x]
  }

  if (word === 'XMAS') {
    return word
  }
}
