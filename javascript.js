
let HumanScore=0;
let ComputerScore=0;

function getComputerChoice(){
         let x=Math.floor((Math.random()*100));
         let res;
         if(x>=0 && x<=32){
            res="rock";
         }
         else if(x>=33 && x<=65){
            res="paper";
         }
         else{
            res="scissors";
         }
         return res;
}

function getHumanChoice(){
         let y=prompt(`Enter your choice: "Rock", "Paper", "Scissors" `);
         y=y.toLowerCase();
         return y;
}

function playRound(ComputerChoice,HumanChoice){
    if (ComputerChoice == HumanChoice) {
        let message = "Draw!\n";
        message += `Your Choice: ${HumanChoice}\n`;
        message += `Computer Choice: ${ComputerChoice}\n`;
        message += `Your Score: ${HumanScore}\n`;
        message += `Computer Score: ${ComputerScore}`;
        alert(message);
    } else if (HumanChoice == "paper" && ComputerChoice == "rock") {
        let message = "You Win! This Round\n";
        message += `Your Choice: ${HumanChoice}\n`;
        message += `Computer Choice: ${ComputerChoice}\n`;
        HumanScore++;
        message += `Your Score: ${HumanScore}\n`;
        message += `Computer Score: ${ComputerScore}`;
        alert(message);
    } else if (HumanChoice == "paper" && ComputerChoice == "scissors") {
        let message = "You Lose! This Round\n";
        message += `Your Choice: ${HumanChoice}\n`;
        message += `Computer Choice: ${ComputerChoice}\n`;
        ComputerScore++;
        message += `Your Score: ${HumanScore}\n`;
        message += `Computer Score: ${ComputerScore}`;
        alert(message);
    } else if (HumanChoice == "rock" && ComputerChoice == "paper") {
        let message = "You Lose! This Round\n";
        message += `Your Choice: ${HumanChoice}\n`;
        message += `Computer Choice: ${ComputerChoice}\n`;
        ComputerScore++;
        message += `Your Score: ${HumanScore}\n`;
        message += `Computer Score: ${ComputerScore}`;
        alert(message);
    } else if (HumanChoice == "rock" && ComputerChoice == "scissors") {
        let message = "You Win! This Round\n";
        message += `Your Choice: ${HumanChoice}\n`;
        message += `Computer Choice: ${ComputerChoice}\n`;
        HumanScore++;
        message += `Your Score: ${HumanScore}\n`;
        message += `Computer Score: ${ComputerScore}`;
        alert(message);
    } else if (HumanChoice == "scissors" && ComputerChoice == "rock") {
        let message = "You Lose! This Round\n";
        message += `Your Choice: ${HumanChoice}\n`;
        message += `Computer Choice: ${ComputerChoice}\n`;
        ComputerScore++;
        message += `Your Score: ${HumanScore}\n`;
        message += `Computer Score: ${ComputerScore}`;
        alert(message);
    } else if (HumanChoice == "scissors" && ComputerChoice == "paper") {
        let message = "You Win! This Round\n";
        message += `Your Choice: ${HumanChoice}\n`;
        message += `Computer Choice: ${ComputerChoice}\n`;
        HumanScore++;
        message += `Your Score: ${HumanScore}\n`;
        message += `Computer Score: ${ComputerScore}`;
        alert(message);
    }    
}

function printVerdict(){
         let message=`your final Score: ${HumanScore}\n`;
         message+=`computer final Score: ${ComputerScore}\n`;
         if(HumanScore>ComputerScore){
            message+="You WIN the Series!!!\n";
        }
        else{
            message+="You LOSE the Series!!!\n";
        }
        alert(message);
}

function playSeries(){
    for(let i=1;i<=5;){
        let ComputerChoice=getComputerChoice();
        let HumanChoice=getHumanChoice();
        if(HumanChoice!="rock" && HumanChoice!="paper" && HumanChoice!="scissors"){
            alert("Enter any of the three only: 'Rock', 'Paper', 'Scissors' to proceed.");
         }
         else{
          playRound(ComputerChoice,HumanChoice);
          i++;
         }
    }
}

playSeries();
printVerdict();
