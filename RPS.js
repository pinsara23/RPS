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
        return "Rock";
        
    } else if (random == 2) {
        return "Paper";
    } else {
        return "Scissors";
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
    }else if (value>random){
    result.textContent = "You Win";
    }else{
        result.textContent = "you Lose";
    }
    
}
paperbtn.onclick = function(){
    value = 2;
    you.textContent = "You: Paper";
    computer.textContent = getComputerChiose();
    if (value == random) {
    result.textContent = "Draw";
    }else if (value>random){
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
    }else if (value>random){
    result.textContent = "You Win";
    }else{
        result.textContent = "you Lose";
    }
}




