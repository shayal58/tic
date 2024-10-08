let boxes = document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset-btn");
let Game =document.querySelector(".game");
let winner =document.querySelector(".winner");

let turn0= true; //player x and player 0
 const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    
    
 ]
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked")
    if(turn0 === true){
        box.textContent=0;
        turn0 =false;
    }
else if(turn0 ===false){
    box.textContent="x";
    turn0 =true;

}
box.disabled=true;
checkWinnners()
}

    )
 });
 const checkWinnners =()=>{
 for (patterns of winPatterns){
    let post1val =boxes[patterns[0]].innerText;
    let post2val =boxes[patterns[1]].innerText;
 let post3val =boxes[patterns[2]].innerText;
 if(post1val !=''&& post2val !='' && post3val !=''){
    if(post1val===post2val && post2val ===post3val){
    const   winning = (`${post1val} has won`)
    winner.textContent =winning
   boxes.forEach(box=>{
    box.disabled =true;
   })
    }
 }
 }
 }
     
 resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.textContent = "";  // Clear the content of each box
        box.disabled = false;  // Enable the boxes again for a new game
    });
    turn0 = true;  // Reset the turn to Player O
    console.log("Game reset.");
    winner.textContent ="";
});