let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame=()=>{
    msg.innerText="game was draw ! Play again";
    msg.style.backgroundColor="black";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if (userwin){
        userScore++;
        userscorePara.innerText=userScore;
        msg.innerText= `you win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorePara.innerText=compScore;
         msg.innerText= `you lose ${compchoice} beats  your ${userchoice}`;
         msg.style.backgroundColor="red";
    }
}
const playGame= (userchoice)=>{
       console.log("userchoice = ",userchoice);
       const compchoice=genCompChoice();
       console.log("compchoice = ",compchoice);
       if (userchoice===compchoice){
        drawGame();
       }else{
        let userwin=true;
        if (userchoice==="rock"){
            wserwin=compchoice==="paper"?false:true ;
        } else if (userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
       }

};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
        
    });
});
