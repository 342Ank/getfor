let boxes=document.querySelector(".box");
let resetbtn=document.querySelector("#resetbtn");
let turnO=true;
const winPatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

];

//boxes.forEach((box) => {
    boxes.addEventListener("click",() => {
         console.log("button was clicked");
        if (turnO){
                boxes.innerText="O";
                turnO=false;

                }
                else{
                        boxes.innerText="X";
                        turn0=true;
                }
  //});
});
