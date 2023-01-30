const player1cells = document.querySelectorAll("#player1-race td")
const player2cells = document.querySelectorAll("#player2-race td")
const player3cells = document.querySelectorAll("#player3-race td")
let Activecell1 = 0;
let Activecell2 = 0;
let Activecell3 = 0;
function movePlayer1(){
  player1cells[Activecell1].classList.remove("active");
  if(Activecell1 === player1cells.length-2){
    alert("Player 1 Wins!");
    resetGame();
  }else{
    Activecell1++;
    player1cells[Activecell1].classList.add("active")
  }        
}

function movePlayer2(){
  player2cells[Activecell2].classList.remove("active");
  if(Activecell2 === player2cells.length-2){
    alert("Player 2 Wins!");
    resetGame();
  }else{
    Activecell2++;
    player2cells[Activecell2].classList.add("active")
  }  
}
function movePlayer3(){
  player3cells[Activecell3].classList.remove("active");
  if(Activecell3 === player3cells.length-2){
    alert("Player 3 Wins!");
    resetGame();
  }else{
    Activecell3++;
    player3cells[Activecell3].classList.add("active")
  }        
}
  function resetGame(){
    player1cells.forEach(cell =>cell.classList.remove("active"))
    player2cells.forEach(cell =>cell.classList.remove("active"))
    player3cells.forEach(cell =>cell.classList.remove("active"))
    Activecell1=0;
    Activecell2=0;
    Activecell3=0;
    player1cells[0].classList.add("active")
    player2cells[0].classList.add("active")
    player3cells[0].classList.add("active")
  }
  document.addEventListener("keyup",event=>{
    if(event.code==="ArrowRight"){
      movePlayer1();
    }else if(event.code==="ArrowLeft"){
      movePlayer2();

    }else if(event.code==="ArrowUp"){
      movePlayer3();
    }
  })
