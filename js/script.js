function gameCell() {
  this.filled=false;
  this.mark=false;
};

var gameBoard = [[new gameCell(), new gameCell(), new gameCell()],
                 [new gameCell(), new gameCell(), new gameCell()],
                 [new gameCell(), new gameCell(), new gameCell()]];
var player = true;
var winningMark;

function changeToX(space){
  if (space === 'topLeft') {
    if(!gameBoard[0][0].filled)
    {
      gameBoard[0][0].mark = player;
      if (player) {
        document.getElementById(space).innerHTML = '<img src="./img/X.png">';
      } else {
        document.getElementById(space).innerHTML = '<img src="./img/O.png">';
      }
      gameBoard[0][0].filled = true;
      player = !player;
    }
  } else if (space === 'topMiddle') {
    if(!gameBoard[0][1].filled)
    {
      gameBoard[0][1].mark = player;
      if (player) {
        document.getElementById(space).innerHTML = '<img src="./img/X.png">';
      } else {
        document.getElementById(space).innerHTML = '<img src="./img/O.png">';
      }
      gameBoard[0][1].filled = true;
      player = !player;
    }
  } else if (space === 'topRight') {
    if(!gameBoard[0][2].filled)
    {
      gameBoard[0][2].mark = player;
      if (player) {
        document.getElementById(space).innerHTML = '<img src="./img/X.png">';
      } else {
        document.getElementById(space).innerHTML = '<img src="./img/O.png">';
      }
      gameBoard[0][2].filled = true;
      player = !player;
    }
  } else if (space === 'middleLeft') {
    if(!gameBoard[1][0].filled)
    {
      gameBoard[1][0].mark = player;
      if (player) {
        document.getElementById(space).innerHTML = '<img src="./img/X.png">';
      } else {
        document.getElementById(space).innerHTML = '<img src="./img/O.png">';
      }
      gameBoard[1][0].filled = true;
      player = !player;
    }
  } else if (space === 'middleMiddle') {
    if(!gameBoard[1][1].filled)
    {
      gameBoard[1][1].mark = player;
      if (player) {
        document.getElementById(space).innerHTML = '<img src="./img/X.png">';
      } else {
        document.getElementById(space).innerHTML = '<img src="./img/O.png">';
      }
      gameBoard[1][1].filled = true;
      player = !player;
    }
  } else if (space === 'middleRight') {
    if(!gameBoard[1][2].filled)
    {
      gameBoard[1][2].mark = player;
      if (player) {
        document.getElementById(space).innerHTML = '<img src="./img/X.png">';
      } else {
        document.getElementById(space).innerHTML = '<img src="./img/O.png">';
      }
      gameBoard[1][2].filled = true;
      player = !player;
    }
  } else if (space === 'bottomLeft') {
    if(!gameBoard[2][0].filled)
    {
      gameBoard[2][0].mark = player;
      if (player) {
        document.getElementById(space).innerHTML = '<img src="./img/X.png">';
      } else {
        document.getElementById(space).innerHTML = '<img src="./img/O.png">';
      }
      gameBoard[2][0].filled = true;
      player = !player;
    }
  } else if (space === 'bottomMiddle') {
    if(!gameBoard[2][1].filled)
    {
      gameBoard[2][1].mark = player;
      if (player) {
        document.getElementById(space).innerHTML = '<img src="./img/X.png">';
      } else {
        document.getElementById(space).innerHTML = '<img src="./img/O.png">';
      }
      gameBoard[2][1].filled = true;
      player = !player;
    }
  } else if (space === 'bottomRight') {
    if(!gameBoard[2][2].filled)
    {
      gameBoard[2][2].mark = player;
      if (player) {
        document.getElementById(space).innerHTML = '<img src="./img/X.png">';
      } else {
        document.getElementById(space).innerHTML = '<img src="./img/O.png">';
      }
      gameBoard[2][2].filled = true;
      player = !player;
    }
  }

  if(checkGameOver()) {
    document.getElementById("notes").innerHTML = winningMark + "'s WIN!!!!";
    gameOver();
  }
}

function checkGameOver() {
  for (i=0; i<3; i++) {
      if (gameBoard[i][0].mark && gameBoard[i][1].mark && gameBoard[i][2].mark) {
        if ((gameBoard[i][0].filled === true) && (gameBoard[i][1].filled === true) && (gameBoard[i][2].filled === true))
        {
          winningMark="X";
          return true;
        }
      }
      else if (!gameBoard[i][0].mark && !gameBoard[i][1].mark && !gameBoard[i][2].mark) {
        if ((gameBoard[i][0].filled === true) && (gameBoard[i][1].filled === true) && (gameBoard[i][2].filled === true))
        {
          winningMark="O";
          return true;
        }
      }
      else if (gameBoard[0][i].mark && gameBoard[1][i].mark && gameBoard[2][i].mark) {
        if ((gameBoard[0][i].filled === true) && (gameBoard[1][i].filled === true) && (gameBoard[2][i].filled === true))
        {
          winningMark="X";
          return true;
        }
      }
      else if (!gameBoard[0][i].mark && !gameBoard[1][i].mark && !gameBoard[2][i].mark) {
        if ((gameBoard[0][i].filled === true) && (gameBoard[1][i].filled === true) && (gameBoard[2][i].filled === true))
        {
          winningMark="O";
          return true;
        }
      }
  }

  if (gameBoard[0][0].mark && gameBoard[1][1].mark && gameBoard[2][2].mark) {
    if ((gameBoard[0][0].filled === true) && (gameBoard[1][1].filled === true) && (gameBoard[2][2].filled === true))
    {
      winningMark="X";
      return true;
    }
  }
  else if (!gameBoard[0][0].mark && !gameBoard[1][1].mark && !gameBoard[2][2].mark) {
    if ((gameBoard[0][0].filled === true) && (gameBoard[1][1].filled === true) && (gameBoard[2][2].filled === true))
    {
      winningMark="O";
      return true;
    }
  }

  if (gameBoard[0][2].mark && gameBoard[1][1].mark && gameBoard[2][0].mark) {
    if ((gameBoard[0][2].filled === true) && (gameBoard[1][1].filled === true) && (gameBoard[2][0].filled === true))
    {
      winningMark="X";
      return true;
    }
  }
  else if (!gameBoard[0][2].mark && !gameBoard[1][1].mark && !gameBoard[2][0].mark) {
    if ((gameBoard[0][2].filled === true) && (gameBoard[1][1].filled === true) && (gameBoard[2][0].filled === true))
    {
      winningMark="O";
      return true;
    }
  }
  return undefined;
}

function gameOver() {
  document.getElementById('topLeft').removeAttribute("onclick");
  document.getElementById('topMiddle').removeAttribute("onclick");
  document.getElementById('topRight').removeAttribute("onclick");
  document.getElementById('middleLeft').removeAttribute("onclick");
  document.getElementById('middleMiddle').removeAttribute("onclick");
  document.getElementById('middleRight').removeAttribute("onclick");
  document.getElementById('bottomLeft').removeAttribute("onclick");
  document.getElementById('bottomMiddle').removeAttribute("onclick");
  document.getElementById('bottomRight').removeAttribute("onclick");
}

function clearBoard() {
  location.reload();
}
