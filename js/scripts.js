//business logic
function Player(mark, turn){
  this.mark = mark;
  this.turn = turn;
  this.taken = [];
}

var playerX = new Player("X", true);
var playerO = new Player("O", false);

function playerXTurn(){
  playerX.turn = true;
  playerO.turn = false;
}

function playerOTurn(){
  playerX.turn = false;
  playerO.turn = true;
}

function xWins(){
  $("#xwins").append("X wins! ");
  reset();
}

function oWins(){
  $("#owins").append("O wins! ");
  reset();
}

function reset(){
  $("#1").empty();
  $("#2").empty();
  $("#3").empty();
  $("#4").empty();
  $("#5").empty();
  $("#6").empty();
  $("#7").empty();
  $("#8").empty();
  $("#9").empty();

  playerX.taken = [];
  playerO.taken = [];
}

function won(){
  var temp = 0;
  if((playerX.taken.includes(1)) && (playerX.taken.includes(2)) && (playerX.taken.includes(3)) ||
     (playerX.taken.includes(4)) && (playerX.taken.includes(5)) && (playerX.taken.includes(6)) ||
     (playerX.taken.includes(7)) && (playerX.taken.includes(8)) && (playerX.taken.includes(9)) ||
     (playerX.taken.includes(1)) && (playerX.taken.includes(4)) && (playerX.taken.includes(7)) ||
     (playerX.taken.includes(2)) && (playerX.taken.includes(5)) && (playerX.taken.includes(8)) ||
     (playerX.taken.includes(3)) && (playerX.taken.includes(6)) && (playerX.taken.includes(9)) ||
     (playerX.taken.includes(1)) && (playerX.taken.includes(5)) && (playerX.taken.includes(9)) ||
     (playerX.taken.includes(3)) && (playerX.taken.includes(5)) && (playerX.taken.includes(7))) {
      temp = 1;
    } else if((playerO.taken.includes(1)) && (playerO.taken.includes(2)) && (playerO.taken.includes(3)) ||
       (playerO.taken.includes(4)) && (playerO.taken.includes(5)) && (playerO.taken.includes(6)) ||
       (playerO.taken.includes(7)) && (playerO.taken.includes(8)) && (playerO.taken.includes(9)) ||
       (playerO.taken.includes(1)) && (playerO.taken.includes(4)) && (playerO.taken.includes(7)) ||
       (playerO.taken.includes(2)) && (playerO.taken.includes(5)) && (playerO.taken.includes(8)) ||
       (playerO.taken.includes(3)) && (playerO.taken.includes(6)) && (playerO.taken.includes(9)) ||
       (playerO.taken.includes(1)) && (playerO.taken.includes(5)) && (playerO.taken.includes(9)) ||
       (playerO.taken.includes(3)) && (playerO.taken.includes(5)) && (playerO.taken.includes(7))) {
      temp = 2;
    }
    return temp;
  }

//user interface
$(document).ready(function(){
  $("td").on("click", function(){
    if(playerX.turn == true){
      ($(this).html(playerX.mark));
       playerX.taken.push(parseInt($(this).attr("id")));
      playerOTurn();
    }else if(playerO.turn == true){
      ($(this).html(playerO.mark));
      playerO.taken.push(parseInt($(this).attr("id")));
      playerXTurn();
    }
    var winCheck = won();
    if(winCheck == 1){
      xWins();
    } else if(winCheck == 2){
      oWins();
    }
  });
});
