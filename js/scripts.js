//business logic
function Player(mark){
  this.mark = mark;

}

function Space(){

}

function Board(){

}

function Game(){

}

function won(x, y){
  if(((x == 1 && y == 1) && (x == 2 && y == 2) && (x == 3 && y == 3)) ||
     ((x == 3 && y == 1) && (x == 2 && y == 2) && (x == 1 && y == 3)) ||
     ((x == 2 && y == 1) && (x == 2 && y == 2) && (x == 2 && y == 3)) ||
     ((x == 3 && y == 1) && (x == 3 && y == 2) && (x == 3 && y == 3)) ||
     ((x == 1 && y == 2) && (x == 2 && y == 2) && (x == 3 && y == 2)) ||
     ((x == 1 && y == 1) && (x == 1 && y == 2) && (x == 1 && y == 3)) ||
     ((x == 1 && y == 1) && (x == 2 && y == 1) && (x == 3 && y == 1)) ||
     ((x == 2 && y == 1) && (x == 2 && y == 2) && (x == 2 && y == 3)) ||
     ((x == 1 && y == 1) && (x == 2 && y == 2) && (x == 3 && y == 3)) ||
     ((x == 1 && y == 1) && (x == 2 && y == 2) && (x == 3 && y == 3)) {
       return true;
     } else {
       return false;
     }








   ){

  }
}

//user interface
$(document).ready(function(){

});
var playerX = new Player();
var playerO = new Player();
var space = new Space();
var board = new Board();
