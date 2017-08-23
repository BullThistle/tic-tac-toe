



//business logic
function Player(mark){
  this.mark = mark;
}

function space(){
  // debugger;
  // alert(pos);
  alert(pos[0][0]);
  $("#bob").text("HI");
  $("#2").text(pos[1][0]);
  $("#3").text(pos[2][0]);
  $("#4").text(pos[0][1]);
  $("#5").text(pos[1][1]);
  $("#6").text(pos[2][1]);
  $("#7").text(pos[0][2]);
  $("#8").text(pos[1][2]);
  $("#9").text(pos[2][2]);
}

// function (){
//
// alert(pos);
// //   for(var i = 0; i < 3; i++){
// //     for(var j = 0; j < 3; j++){
// //       pos[i][j]= i;
// //       debugger;
// //     }
// //   }
// }

function Game(){

}

function won(){
  var temp = 0;
  if(((pos[0][0] == "X") && (pos[1][0] == "X") && (pos[2][0] == "X")) ||
     ((pos[0][1] == "X") && (pos[1][1] == "X") && (pos[2][1] == "X")) ||
     ((pos[0][2] == "X") && (pos[1][2] == "X") && (pos[2][2] == "X")) ||
     ((pos[0][0] == "X") && (pos[0][1] == "X") && (pos[0][2] == "X")) ||
     ((pos[1][0] == "X") && (pos[1][1] == "X") && (pos[1][2] == "X")) ||
     ((pos[2][0] == "X") && (pos[2][1] == "X") && (pos[2][2] == "X")) ||
     ((pos[0][0] == "X") && (pos[1][1] == "X") && (pos[2][2] == "X")) ||
     ((pos[2][0] == "X") && (pos[1][1] == "X") && (pos[0][2] == "X"))) {
      temp = 1;
    } else if(((pos[0][0] == "O") && (pos[1][0] == "O") && (pos[2][0] == "O")) ||
       ((pos[0][1] == "O") && (pos[1][1] == "O") && (pos[2][1] == "O")) ||
       ((pos[0][2] == "O") && (pos[1][2] == "O") && (pos[2][2] == "O")) ||
       ((pos[0][0] == "O") && (pos[0][1] == "O") && (pos[0][2] == "O")) ||
       ((pos[1][0] == "O") && (pos[1][1] == "O") && (pos[1][2] == "O")) ||
       ((pos[2][0] == "O") && (pos[2][1] == "O") && (pos[2][2] == "O")) ||
       ((pos[0][0] == "O") && (pos[1][1] == "O") && (pos[2][2] == "O")) ||
       ((pos[2][0] == "O") && (pos[1][1] == "O") && (pos[0][2] == "O"))) {
      temp = 2;
    }
    return temp;
  }

//user interface
$(document).ready(function(){
  $("td").on("click", function(){
    ($(this).html(playerX.mark));
  });
});
var pos = [
  ["I","I","I"],
  ["I","I","I"],
  ["I","I","I"]
];

var playerX = new Player("X");
var playerO = new Player("O");
// var  = new ();
space();
$("#bob").append("HI");
