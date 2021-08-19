let player1 = "user-1";
let player2 = "user-2";
let user1 = document.getElementById('user1');
let user2 = document.getElementById('user2');

// Getting names of players
user1.addEventListener("input" , function() {
      player1 = user1.value;
});

user2.addEventListener("input" , function() {
      player2 = user2.value;
});

// Accessing the container of indexes
let container = document.getElementById('container');

// Creating 2-D array 
let matrix = new Array(3);

for(let i = 0; i<matrix.length; i++) {
      matrix[i] = new Array(3);
}

// storing all the elements in 2-D Array
function storeElements() {
      for(let r = 0,k=0; r < matrix.length; r++) {
            for(let c = 0; c < matrix.length; c++) {
                  matrix[r][c] = container.children[k++].innerHTML;
            }
      }
}

let result = document.getElementById('result');
let winner;
for (let index of document.querySelectorAll('.elements')) {
      index.addEventListener("mouseover", function() {
            textOnFocus(index);
      });

      index.addEventListener("mouseout", function() {
            textOutFocus(index);
      });

      index.addEventListener("click" , function() {
            chooseCharacter(index);
            storeElements();
            index.style.pointerEvents = "none";
            winner = isWon();
            if(winner != 0) {
            announceWinner(winner);}
      });
}

function announceWinner(winner) {
      result.style.display = "flex";
      if(winner == c1) {
            console.log("player1 has won !");
            document.querySelector('#result p').innerHTML = player1 + " has won";
      }
      else if(winner == c2) {
            console.log("player2 has won !");
            document.querySelector('#result p').innerHTML = player2 + " has won";
      }
      else if(winner == 't') {
            document.querySelector('#result p').innerHTML = " Game has tied !";
      }
}

let turn = 1;

function textOnFocus(index) {
      if(index.innerHTML == "") { 
            index.style.color = "#59554D";
            if(turn % 2 != 0) {
                  index.innerHTML = 'x';
                  index.style.backgroundColor = "#b05846a3";
            }
            else {
                  index.innerHTML = 'o';
                  index.style.backgroundColor = "#ac9b40a8";
            }
      }
}
function textOutFocus(index) {
      if(index.innerHTML != "X" && index.innerHTML !="O") {
            index.innerHTML = "";
            index.style.backgroundColor = "#116664";
            index.style.color = "black";
      }     
}

function chooseCharacter(index) {
      index.style.color = "black";
      if(turn % 2 != 0) {
            index.innerHTML = 'X';
            index.style.backgroundColor = "tomato";
      }
      else {
            index.innerHTML = 'O';
            index.style.backgroundColor = "#F2BB16";
      }
      turn++;
}

let playAgain = document.getElementById('playAgain');
playAgain.addEventListener("click" , reset);

function reset() {
      result.style.display = "none";
      turn = 1;
      for (let idx of document.querySelectorAll('.elements')) {
            idx.style.pointerEvents = "auto";
            idx.innerHTML = "";
            idx.style.backgroundColor = "#116664";
            idx.style.color = "black";
      }
}


let c1 = 'X' 
let c2 = 'O'  
function isWon() {
      let filledIndex = 0;
      let c1_hor=0,c1_ver=0,c1_d1=0,c1_d2=0,c2_hor=0,c2_ver=0,c2_d1=0,c2_d2=0;
      for(let i=0;i<3;i++)
      {
            c1_hor=0,c2_hor=0,c1_ver=0,c2_ver=0;
            for(let j=0;j<3;j++)
            {
                  if(matrix[i][j] != "") {
                        filledIndex++;
                  }
                  //for user 1
                  if(matrix[i][j]==c1)
                  {
                        c1_hor+=1;
                        if(i==j)
                              c1_d1+=1;
                        if(i+j==2)
                              c1_d2+=1;
                  }
                   if(matrix[j][i]==c1)
                        c1_ver+=1;

                  //for user 2
                  if(matrix[i][j]==c2)
                  {
                        c2_hor+=1;
                        if(i==j)
                              c2_d1+=1;
                        if(i+j==2)
                              c2_d2+=1;
                  }
                  if(matrix[j][i]==c2)
                        c2_ver+=1;
                  
                  if(c1_hor==3||c1_ver==3||c1_d1==3||c1_d2==3)
                        return c1;
                  else if(c2_hor==3||c2_ver==3||c2_d1==3||c2_d2==3)
                        return c2;
            }
      }
      if(filledIndex > 8) { return 't';}
      return 0;
}

// function for tooltip

for(let element of document.getElementsByClassName('social-icon')) {
      element.addEventListener('mouseover', () => {
            element.parentNode.children[0].classList.add('on-tooltip');
      })
      element.addEventListener('mouseout', () => {
            element.parentNode.children[0].classList.remove('on-tooltip');
      })
}