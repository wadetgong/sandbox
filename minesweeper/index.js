console.log('asdf')

class Board {
  constructor() {
    this.board = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]
    this.playerTurn = 'X'
  }

  addMove(x, y) {
    this.board[x][y] = this.playerTurn
    this.playerTurn = 'X'
      ? 'O'
      : 'X'
  }

  print() {
    console.log(this.board.map(row => row.join(' | ')).join('\n'))
  }

}
const test = new Board()
test.addMove(0, 1)
test.print()
