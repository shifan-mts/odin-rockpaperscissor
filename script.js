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
    b = prompt("enter your choice:");
    return b.toLowerCase();
}

function playround(computerchoice,humanchoice){
    if(computerchoice == humanchoice){
        console.log("Draw");
        return ;
    }
else if(computerchoice == "rock"){
    if(humanchoice == "scissor"){
        com+=1;
    console.log("Rock beats Scissors");}
    else{
    hu+=1;
    console.log("Paper beats Rock");}

}
else if(computerchoice == "paper"){
    if(humanchoice=="rock"){
        com+=1;
        console.log("Paper beats Rock!");}
    else{
    hu+=1;
    console.log("Scissor beats Paper!"); }
}
else if(computerchoice == "scissor"){
    if (humanchoice == "paper"){
        com+=1;
        console.log("Scissor beats paper!");
    }
    else{
    hu+=1;
    console.log("Rock beats scissor!");}
}
if(com>hu){
    console.log("Computer wins");
}
else
console.log("Humman wins!");
}
const hu1 = gethumanchoice();
const com1 = getcomputerchoice();

playround(com1,hu1);