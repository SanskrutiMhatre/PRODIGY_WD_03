document.addEventListener('DOMContentLoaded', function () {
    const board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  
    let currentPlayer = 'X';
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
  
    cells.forEach(cell => {
      cell.addEventListener('click', handleClick);
    });
  
    function handleClick(event) {
      const row = parseInt(event.target.dataset.row);
      const col = parseInt(event.target.dataset.col);
  
      if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        event.target.textContent = currentPlayer;
  
        if (checkWin()) {
          message.textContent = `Player ${currentPlayer} wins!`;
          cells.forEach(cell => cell.removeEventListener('click', handleClick));
        } else if (checkDraw()) {
          message.textContent = 'It\'s a draw!';
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          message.textContent = `Player ${currentPlayer}'s turn`;
        }
      }
    }
  
    function checkWin() {
      // Check rows, columns, and diagonals for winning combinations
      for (let i = 0; i < 3; i++) {
        if (
          (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) ||
          (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i])
        ) {
          return true;
        }
      }
  
      if (
        (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
        (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0])
      ) {
        return true;
      }
  
      return false;
    }
  
    function checkDraw() {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === '') {
            return false;
          }
        }
      }
      return true;
    }
  });
  