var gameState = 0
var database
var playerCount
var  form,player,game
var allPlayers
//criar a var distance
var distance=0
function setup(){
    database = firebase.database();
    createCanvas(500,500);
   game = new Game();
   game.getState();
   game.start();
}

function draw(){
  //Código adicionado pela professora para verificar se a quantidade de player é = a 4 e trocar o estado do jogo 
  if(playerCount===4){ 
      game.update(1); } 
  if(gameState===1){ 
      clear(); 
      game.play(); }
   

}
