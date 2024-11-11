let a = ['rock','paper','scissor'];
let b;
let com = 0;
let hu = 0;
function getcomputerchoice(){
    let k = Math.floor(Math.random()*3);
    console.log("k valueL:",k)
    console.log("Computer chooses",a[k])
return a[k];
}

function gethumanchoice(){
    b = document.querySelector('input').value;
    return b.toLowerCase();
}

function playround(computerchoice,humanchoice){
    let p1 = document.querySelector(".result");
 
let p2 = document.querySelector(".winner");

    if(computerchoice == humanchoice){
        p1.textContent = "Draw";
        return ;
    }
else if(computerchoice == "rock"){
    if(humanchoice == "scissor"){
        com+=1;
    p1.textContent = "Rock beats Scissors";}
    else{
    hu+=1;
    p1.textContent = "Paper beats Rock";}

}
else if(computerchoice == "paper"){
    if(humanchoice=="rock"){
        com+=1;
        p1.textContent = "Paper beats Rock!";}
    else{
    hu+=1;
    p1.textContent = "Scissor beats Paper!"; }
}
else if(computerchoice == "scissor"){
    if (humanchoice == "paper"){
        com+=1;
        p1.textContent = "Scissor beats paper!";
    }
    else{
    hu+=1;
    p1.textContent = "Rock beats scissor!";}
}
if(com>hu){
    p2.textContent="Computer wins";
}
else
p2.textContent="Humman wins!";
}

function main1(){

let hu1 = gethumanchoice();
let com1 = getcomputerchoice();

playround(com1,hu1);}
