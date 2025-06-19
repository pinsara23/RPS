const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("Paper");
const scissorsbtn = document.getElementById("Scissor");
const you = document.getElementById("you");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
let random;
function getComputerChiose(){
    random = Math.floor(Math.random() * 3) + 1; 
    if (random == 1) {
        return "Computer: Rock";
        
    } else if (random == 2) {
        return "Computer: Paper";
    } else {
        return "Computer: Scissors";
    }
    
}
//let random = Math.floor(Math.random() * 3) + 1; 
let value;
rockbtn.onclick = function(){
    value = 1;
    you.textContent = "You: Rock";
    computer.textContent = getComputerChiose();
    if (value == random) {
    result.textContent = "Draw";
    }else if (random == 2){
    result.textContent = "You Lose";
    }else{
        result.textContent = "you Win";
    }
    
}
paperbtn.onclick = function(){
    value = 2;
    you.textContent = "You: Paper";
    computer.textContent = getComputerChiose();
    if (value == random) {
    result.textContent = "Draw";
    }else if (value == 1){
    result.textContent = "You Win";
    }else{
        result.textContent = "you Lose";
    }
}
scissorsbtn.onclick = function(){
    value = 3;
    you.textContent = "You: Scissors";
    computer.textContent = getComputerChiose();
    if (value == random) {
    result.textContent = "Draw";
    }else if (value == 2){
    result.textContent = "You Win";
    }else{
        result.textContent = "you Lose";
    }
}




