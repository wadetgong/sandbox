const { expect } = require('chai')
const minimizeRanges = require('./problem')

describe('WSI - zip codes algorithm', () => {
  it('consolidates a range that is completely captured by another range', () => {
    let range = [[25000, 35000], [20000, 40000], [22000, 38000]]
    expect(minimizeRanges(range)).to.deep.equal([[20000, 40000]])
  })

  it('consolidates ranges that overlap', () => {
    let range = [[25000, 35000], [30000, 40000], [35000, 60000]]
    expect(minimizeRanges(range)).to.deep.equal([[25000, 60000]])
  })

  it('leaves non-overlapping ranges as is', () => {
    let range = [[15000, 20000], [11000, 14000], [35000, 50000], [22000, 30000]]
    expect(minimizeRanges(range)).to.deep.equal([
      [11000, 14000], [15000, 20000], [22000, 30000], [35000, 50000]
    ])
  })

  it('accounts for all use cases', () => {
    let range = [
      [11000, 15000], [16000, 20000], [12000, 14000], [18000, 22000], [25000, 30000]
    ]
    expect(minimizeRanges(range)).to.deep.equal([
      [11000, 15000], [16000, 22000], [25000, 30000]
    ])
  })
})
