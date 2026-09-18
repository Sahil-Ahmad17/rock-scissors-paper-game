let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    const options=["rocks","secissor","paper"];
   const ranidx= Math.floor(Math.random()*3);
   return options[ranidx];
}
const drawGame=()=>{
    msg.innerText=("Game Was Draw!");
       msg.style.backgroundColor="black";
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=('You Win!');
           msg.style.backgroundColor="green";
    }
    else{
        compScore++
        compScorePara.innerText=compScore;
        msg.innerText=('You Lose!');
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
    drawGame();
}
else {
    let userWin=true;
    if (userChoice==="rocks"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="secissor"?false:true;
    }
    else{
        userWin=compChoice==="rocks"?false:true;
    }
    showWinner(userWin);
}       
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       
        playGame(userChoice);

    });
});
