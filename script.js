//accessin all box using its class name 
let box = document.querySelectorAll(".boxes");
// Defining palyers 
let playerO = true;
let count = 0;
//Accessing each box and adding a event of entering X/O , also diabling the box 
//so it can't be updated , checking winner using a function 
box.forEach((box)=>{
    box.addEventListener("click",()=> {
        // console.log("box was clicked");
        if(playerO){
            box.innerText = "O";
            count++;
            box.classList.add("playerOColor");
            playerO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("playerXColor");
            playerO = true;
            count++;
        }
        box.disabled = true;
        checkWinner();
    }); 
});

//win Patterns 
const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//checkWinner() funtion Definition 
const checkWinner = () =>{
    for(let pattern of winningPatterns){
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText; 

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val=== pos2Val && pos2Val === pos3Val){
            // console.log("winner",pos1Val);
            showWinner(pos1Val);
            }
            else{
                if(count=== 9){
                msg.innerText="Match is Drawn";
                msg.classList.remove("hide");
                }
            }        
        }
    }
};
 
//accesing msg 
let msg = document.querySelector("#msg");
// showWinner() 
const showWinner = (winner) => {
    msg.innerText =`Congratulations Player${winner} you are winner 🎉`;
    msg.classList.remove("hide");
    // removing class hide from newGame BTN 
    newBtn.classList.remove("hide");
    disableBox();
}

// disable boxes funtion Because once a winner is declared no one again can win 
const disableBox = () => {
    for(let boxx of box){
        boxx.disabled = true;
    }
}

//now a enable box function used  to reset game
const enableBox = () => {
    for(let boxx of box){
        boxx.disabled = false;
        boxx.innerText = "";
        boxx.classList.remove("playerOColor", "playerXColor");
    }
}
//now ResetGame Button
let resetBtn = document.querySelector("#resetBtn");

//function for resetGame
const resetGame = () => {
     playerO = true;
     enableBox();
     msg.classList.add("hide");
}


resetBtn.addEventListener("click",resetGame);
// access new game buttton
let newBtn = document.querySelector("#newBtn");
newBtn.addEventListener("click",resetGame);
//when we click on newBtn it should hide from body 
newBtn.addEventListener("click",()=>{
    newBtn.classList.add("hide");
}); 
resetBtn.addEventListener("click",()=>{
    newBtn.classList.add("hide");
});
