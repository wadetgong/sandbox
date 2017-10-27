/*
BACKGROUND
Sometimes items cannot be shipped to certain zip codes, and the rules for these restrictions are stored as a series of ranges of 5 digit codes.
For example if the ranges are:
[94133,94133] [94200,94299] [94600,94699]
Then the item can be shipped to zip code 94199, 94300, and 65532, but cannot be shipped to 94133, 94650, 94230, 94600, or 94299.
Any item might be restricted based on multiple sets of these ranges obtained from multiple sources.

PROBLEM
Given a collection of 5 digit ZIP code ranges (each range includes both their upper and lower bounds), provide an algorithm that produces the minimum number of ranges required to represent the same restrictions as the input.
*/

const minimizeRanges = rangeArr => {
  rangeArr.sort((a, b) => a[0] - b[0])
  const minimizedRange = []

  let [ currentMin, currentMax ] = rangeArr[0]
  for (let i = 1; i < rangeArr.length; i++) {
    let [ nextMin, nextMax ] = rangeArr[i]
    if (currentMax > nextMin) {
      if (nextMax > currentMax) currentMax = nextMax
    } else {
      minimizedRange.push([currentMin, currentMax])
      currentMin = nextMin
      currentMax = nextMax
    }
  }
  minimizedRange.push([currentMin, currentMax])

  return minimizedRange
}

module.exports = minimizeRanges
