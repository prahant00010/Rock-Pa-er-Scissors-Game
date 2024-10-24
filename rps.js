let yourScore=0;
let compScore=0;
let yourScoreBoard=document.querySelector("#your-score");
let compScoreBoard=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let resetBtn=document.querySelector("#reset-btn");
let selectors=document.querySelectorAll(".select");
const optionArr=["rock","paper","scissors"];
resetBtn.addEventListener("click",()=>{
    yourScore=0;
    yourScoreBoard.innerText=yourScore;
    compScore=0;
    compScoreBoard.innerText=compScore;
    msg.innerText=`Play Your Move`;
    msg.style.backgroundColor= "#081b31"; 
});
const compRandomChoice=()=>{
    let num=Math.floor(Math.random()*3);
    return optionArr[num];
};
const drawGame=(compChoice)=>{
    msg.innerText=`That's a Draw, You both have ${compChoice}`;
    msg.style.backgroundColor= "#081b31";
};
const showWinner=(youAreWinner,yourChoice,compChoice)=>{
    if(youAreWinner){
        yourScore++;
        yourScoreBoard.innerText=yourScore;
        msg.innerText=`You Won! Your ${yourChoice} beats ${compChoice} `;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScoreBoard.innerText=compScore;
        msg.innerText=`You Lost!, ${compChoice} beats Your ${yourChoice} `;
        msg.style.backgroundColor= "red";
    }
};
const startGame=(yourChoice)=>{
    let compChoice=compRandomChoice();
    if(compChoice===yourChoice){
        drawGame(compChoice);
        return;
    }
    let youAreWinner=true; //Let say
    if(yourChoice==="rock"){
        //Comp can be paper or scissors
        youAreWinner=compChoice==="paper"?false:true;
    }
    else if(yourChoice==="paper"){
        //Comp can be rock or scissors
        youAreWinner=compChoice==="rock"?true:false;
    }
    else{
        //Comp can be rock or paper
        youAreWinner=compChoice==="rock"?false:true;
    }
    showWinner(youAreWinner,yourChoice,compChoice);
};
selectors.forEach((option)=>{
    option.addEventListener("click",()=>{
        let yourChoice=option.getAttribute("id");
        startGame(yourChoice);
    });
});