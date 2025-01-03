
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
console.log(getComputerChoice());
console.log(getHumanChoice());


