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
  };

