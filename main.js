function gameBoard(){
    const board = [];
    const row = 3;
    const column = 3;
  
  
    for(let i = 0; i < row; i++){
      board[i] = []
      for(let j = 0; j < column; j++){
        board[i][j] = null
      }
    }
    const getboard = () => board;

    const addMarkToBoard = (columIndex, rowIndex, mark) =>{
        if(columIndex >= 0 && columIndex < column && rowIndex >= 0 && rowIndex < row ){
          board[rowIndex][columIndex] = mark
        } else{
          console.log("invalid row or column")
        }
      }

    return{
      getboard,
      addMarkToBoard
    }
  }

  function gamecontrol(){
    playerOneName = "playerOne"
    playerTwoName = "playerTwo"
    const board = gameBoard();
    const player = [
      {
        name: playerOneName,
        mark: "X"
      },
      {
        name: playerTwoName,
        mark: "O"
      }
    ]

    let activePlayer = player[0]
    const switchTurn = () => {
      activePlayer = activePlayer === player[0] ? player[1] : player[0];
    };
    const getActivePlayer = () => activePlayer;

    const placeMark = (rowIndex, columIndex) => {
      board.addMarkToBoard(rowIndex, columIndex, getActivePlayer().mark);
      switchTurn();
      console.log(board.getboard())
      console.log(`${getActivePlayer().name} turn`)
  
    }
    return{
      placeMark,
      getActivePlayer,
    }
  };
  const game = gamecontrol();
  game.placeMark(0,0)
  

