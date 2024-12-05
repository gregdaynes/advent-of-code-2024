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
}
