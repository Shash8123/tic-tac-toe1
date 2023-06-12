const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);
    Screen.addCommand('up', 'Move cursor up', () => this.cursor.up());
    Screen.addCommand('down', 'Move cursor down', () => this.cursor.down());
    Screen.addCommand('left', 'Move cursor left', () => this.cursor.left());
    Screen.addCommand('right', 'Move cursor right', () => this.cursor.right());


    // Add command for placing a move at the cursor's position
    Screen.addCommand('w', 'cursor up', () => this.up.bind(this));
    Screen.addCommand('s', 'cursor down', () => this.down.bind(this));
    Screen.addCommand('a', 'cursor left', () => this.left.bind(this));
    Screen.addCommand('d', 'cursor right', () => this.right.bind(this));
    Screen.addCommand('e', 'placrs move', () => this.placeMove.bind(this));

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    // Check rows
    for (let row = 0; row < grid.length; row++) {
      if (grid[row][0] === grid[row][1] && grid[row][0] === grid[row][2] && grid[row][0] !== ' ') {
        return grid[row][0];
      }
    }

    // Check columns
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[0][col] === grid[1][col] && grid[0][col] === grid[2][col] && grid[0][col] !== ' ') {
        return grid[0][col];
      }
    }

    // Check diagonals
    if (
      (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== ' ') ||
      (grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0] && grid[0][2] !== ' ')
    ) {
      return grid[1][1];
    }

    // Check for a tie
    if (TTT.isGridFull(grid)) {
      return 'T';
    }

    // No win or tie
    return false;
  }

  static isGridFull(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === ' ') {
          return false;
        }
      }
    }
    return true;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
