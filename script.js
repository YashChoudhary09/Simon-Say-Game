let gameSq=[];
let userSq=[];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
h3.innerText="press any key to start the game!"
let randomColor=["red","green","yellow","blue"];
document.addEventListener("keypress",function(){ 
    if(started == false){
        console.log("game started!");
        started = true; 

    }
    levelUp();
})



function levelUp(){
    userSq=[];
    level++;
    h3.innerText=`level ${level}`;
  let randomNum = Math.floor(Math.random()*4); 
  let randomBtn=randomColor[randomNum]; 
  console.log(randomBtn);
  console.log(randomNum);
  console.log(flashbtn);
  gameSq.push(randomBtn);
  console.log(gameSq);
    btnFlash(flashbtn);
   highestScore(level);
}



function btnFlash(btn){
  btn.classList.add("flash")
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}



let btns = document.querySelectorAll(".box");
btns.forEach((e)=>{
    e.addEventListener("click",btnPress); // ab saare buttons ko acess kero jin per user click kerega

})



function btnPress(){
    let btn = this;
    console.log(btn);
   btnFlash(btn); // user ke click button per btnFlash function apply kerke us bhi flash property do
   let userColor = btn.getAttribute("id") // 
   userSq.push(userColor);//btn ko di gayi attribute value ko acess kerke usse userSq array me save kero
   console.log(userSq);
   checkSeq(userSq.length-1); // checkSeq function me userSq array ki last index jayegi
}
function checkSeq(idx){   // userSq array ki last idx
      if(userSq[idx] == gameSq[idx]){  // yadi dono idx value equal hai tab
         if(userSq.length == gameSq.length){
         setTimeout(levelUp,1000);  // tab yadi dono ki length equal hai to levelup() function ko kall lerdenge 1sec baad
         } 
       }  else{  //yadi user ne koi dusri button press ki to 
            console.log(userSq);
             console.log(gameSq);
             h3.innerHTML=`Game over ! <bold> Your Score Was ${level} </bold><br> press any key to restart`;
             document.querySelector("body").style.backgroundColor="red";
              setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
              },150);
              reset();
           }
}



  
function highestScore(level){
    let max = 0;
    let score=[];
    score.push(level);
     max=score.reduce((max,el) =>{
        if(max > el){
            return max;
        } else{
            return el;
        }
    },max)
   let button = document.querySelector("button");
   button.addEventListener("click",function(){
    button.innerText=`Your Highest Score Is ${max}`;
    setTimeout(() => {
        button.innerText=`Your Highest Score Is Will Appear Here`;
    }, 2000);
   })   
}



function reset(){ 
    started=false;
    gameSq=[];
    userSq=[];
    level=0;
}