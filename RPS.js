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

let value;
rockbtn.onclick = function(){
    value = 1;
    you.textContent = "You: Rock";
    let comChoice = getComputerChiose();
    computer.textContent = "Computer: "+comChoice;
    console.log(comChoice+" "+random);
    switch (random) {
        case 1:
            result.textContent = "Draw";
            break;
        case 2:
            result.textContent = "Lose";
            break;
        case 3:
            result.textContent = "Win";
            break;
        
    }
    
    
}
paperbtn.onclick = function(){
    value = 2;
    you.textContent = "You: Paper";
    let comChoice = getComputerChiose();
    computer.textContent = "Computer: "+comChoice;
    console.log(comChoice+" "+random);
    switch (random) {
        case 1:
            result.textContent = "Win";
            break;
        case 2:
            result.textContent = "Draw";
            break;
        case 3:
            result.textContent = "Lose";
            break;
        
    }
}
scissorsbtn.onclick = function(){
    value = 3;
    you.textContent = "You: Scissors";
   let comChoice = getComputerChiose();
    computer.textContent = "Computer: "+comChoice;
    console.log(comChoice+" "+random);
    switch (random) {
        case 1:
            result.textContent = "Lose";
            break;
        case 2:
            result.textContent = "Win";
            break;
        case 3:
            result.textContent = "Draw";
            break;
        
    }
}




