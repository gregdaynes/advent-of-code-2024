export function p1a (input) {
  // plan
  // ----
  //
  // prepare the rules and updates
  // - split input on `\n\n`, first part are the rules, second is updates
  // - split and sort the rules into buckets
  //   maybe an object where the key is the page number, and the value is an array of following page numbers, sorting probably doesn't really matter
  // - split the updates into rows
  // - split the updates rows into array of page numbers
  //
  // evaluate each update dataset
  // - for each update page number
  // - get index of page number
  // - get following pages from rules object using page number
  // - for each following page from rules, check against the updates
  // - if the index of the following page is before the index of the current number, the update is bad, and can early exit.
  //
  // With the sample dataset, 75,29,13 have 6 applicable rules, which means 18 operations for the update.
  //
  // From the update rows that are valid against rules, find the middle page number - something like Math.floor(length / 2)

  let [rules, updates] = input.split('\n\n')

  rules = rules.split('\n').reduce((acc, entry) => {
    const [page, follower] = entry.split('|')

    if (!acc[page]) acc[page] = []
    acc[page].push(Number(follower))

    return acc
  }, {})

  updates = updates.split('\n').map(update => update.split(',').map(Number))

  // evaluation

  const validUpdates = []
  const invalidUpdates = []

  for (const update of updates) {
    const result = validate(update, rules)
    if (result !== true) {
      invalidUpdates.push(update)
      continue;
    }

    validUpdates.push(update)
  }

  const validUpdateMiddlePageScore = validUpdates.reduce((acc, update) => {
    const mid = Math.floor(update.length / 2)
    return acc += update[mid]
  }, 0)

  // -- part 2

  // Now we have to sort the invalid updates
  // We can extract the validator function to use on both steps
  // with a validator in place, when a rule fails, we can return the index of the number that the page should be before
  // and then update the update ordering by moving the page to returned index - 1
  // then rerun the validator, and repeat as necessary

  const correctedUpdates = []
  for (const update of invalidUpdates) {
    let isValid = false;
    let updateClone = [...update]

    let i = 0
    while (!isValid) {
      const result = validate(updateClone, rules)

      if (result !== true) {
        moveArrayItem(updateClone, result.pageIndex, result.followerIndex)
        continue;
      }

      isValid = true
    }

    correctedUpdates.push(updateClone)
  }

  const correctedUpdateMiddlePageScore = correctedUpdates.reduce((acc, update) => {
    const mid = Math.floor(update.length / 2)
    return acc += update[mid]
  }, 0)

  return [validUpdateMiddlePageScore, correctedUpdateMiddlePageScore]
}

function moveArrayItem (array, from,to) {
  array.splice(to, 0, array.splice(from, 1)[0])
}

function validate (update, rules) {
  let result = true;

  update:
  for (let pageIndex in update) {
    if (result !== true) break update
    pageIndex = Number(pageIndex)

    const pageNumber = update[pageIndex]
    const applicableRules = rules[pageNumber]

    if (!applicableRules || !applicableRules.length) continue update;

    follower:
    for (const follower of applicableRules) {
      const followerIndex = update.indexOf(follower)

      // follower doesn't exist in update, ignore
      if (followerIndex === -1) continue follower

      // invalid update, exit
      if (followerIndex < pageIndex) {
        //console.log({
        //  update: '❌',
        //  pageNumber,
        //  pageIndex,
        //  applicableRules,
        //  followerIndex,
        //  follower,
        //})
        result = { pageNumber, pageIndex, followerIndex }
        break update
      }
    }
  }

  return result
}
