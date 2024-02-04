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
      addMarkToBoard, 
      board,
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
      board.addMarkToBoard(columIndex, rowIndex, getActivePlayer().mark);
      switchTurn();
      console.log(board.getboard())
      console.log(`${getActivePlayer().name} turn`)
      const MarkXwinner = (function(){
        const currentboard = board.getboard();
        if(currentboard[1][1] === player[0].mark){
          if(currentboard[2][0] === player[0].mark && currentboard[0][2] === player[0].mark ||
          currentboard[0][0] === player[0].mark && currentboard[2][2] === player[0].mark ||
          currentboard[0][1] === player[0].mark && currentboard[2][1] === player[0].mark ||
          currentboard[1][0] === player[0].mark && currentboard[1][2] === player[0].mark){
            console.log(`${player[0].name} winns`)
            restartGame()
            getXscores();
          }
        }
        if(currentboard[0][0] === player[0].mark){
          if(currentboard[0][1] === player[0].mark && currentboard[0][2] === player[0].mark ||
            currentboard[1][0] === player[0].mark && currentboard[2][0] === player[0].mark ){
            console.log(`${player[0].name} winns`)
            console.log(`${player[0].name} winns`)
            restartGame()
            getXscores();
          }
        }
        if(currentboard[2][2] === player[0].mark){
          if(currentboard[2][2] === player[0].mark && currentboard[2][0] === player[0].mark ||
            currentboard[0][2] === player[0].mark && currentboard[1][2] === player[0].mark 
             ){
            console.log(`${player[0].name} winns`)
            console.log(`${player[0].name} winns`)
            restartGame()
            getXscores();
          }
        }
      
      })();
      const MarkOwinner = (function(){
        const currentboard = board.getboard();
        if(currentboard[1][1] === player[1].mark){
          if(currentboard[0][2] === player[1].mark && currentboard[2][0] === player[1].mark || currentboard[0][0] === player[1].mark && currentboard[2][2] === player[0].mark ||
          currentboard[0][1] === player[1].mark && currentboard[2][1] === player[1].mark ||
          currentboard[1][0] === player[1].mark && currentboard[1][2] === player[1].mark ||
          currentboard[0][0] === player[1].mark && currentboard[0][0] === player[1].mark ){
            console.log(`${player[1].name} winns`)
            restartGame();
            getOscores();
          }
        }
        if(currentboard[0][0] === player[1].mark){
          if(currentboard[0][1] === player[1].mark && currentboard[0][2] === player[1].mark ||
            currentboard[1][0] === player[1].mark && currentboard[2][0] === player[1].mark ){
            console.log(`${player[1].name} winns`)
            restartGame();
            getOscores();
          }
        }
        if(currentboard[2][2] === player[1].mark){
          if(currentboard[2][2] === player[1].mark && currentboard[2][0] === player[1].mark ||
            currentboard[0][2] === player[1].mark && currentboard[1][2] === player[1].mark 
             ){
            console.log(`${player[1].name} winns`)
            restartGame();
            getOscores();
          }
        }
      
      })();
    }
    return{
      placeMark,
      getActivePlayer,
      board,
      switchTurn,
    }
  };
  const game = gamecontrol();

  function rendergame(game) {
    const turn = document.querySelector('.playerturn');
    const boardDiv = document.querySelector('.board');

    function updateScreen() {
      const board = game.board.getboard();
      const activePlayer = game.getActivePlayer();

      boardDiv.innerHTML = ''; 

      board.forEach((row, rowIndex) => {
        row.forEach((mark, columnIndex) => {
          const box = document.createElement('div');
          box.classList.add('box');
          box.dataset.row = rowIndex;
          box.dataset.column = columnIndex;
          box.textContent = mark;

          box.addEventListener('click', () => {
            console.log(rowIndex)
            console.log(columnIndex)
            if(!mark){
              game.placeMark(rowIndex, columnIndex);
              updateScreen();
            }
          });

          boardDiv.appendChild(box);
        });
      });

      turn.textContent = `${activePlayer.name}'s turn`;
    }

    updateScreen();
  }
  rendergame(game);

  const restartGame = () => {
    const boxes = document.querySelectorAll('.box');

    const board = game.board.getboard();
    console.log(board)
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        board[i][j] = null;
      }
    }
    game.switchTurn();
    rendergame(game);
  };
  
  const getXscores = () => {
    const score1Span = document.getElementById("score1")
    score1Span.innerText++;
  }
  
  const getOscores = () => {
    const score2Span = document.getElementById("score2")
    score2Span.innerText++;
  }
  