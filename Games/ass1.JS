
let eggImage=document.getElementById("EG");
const randomPosition = Math.floor(Math.random() * window.innerWidth);
eggImage.style.left=randomPosition+'px';
let position=randomPosition;
let timeOut= (200*(innerHeight-100))/30;
let eggPosition=0;


const moveDown =setInterval(()=>
{
    eggPosition+=30;
    eggImage.style.top=eggPosition+'px';
    let screenHight=window.innerHeight+100;
    if (eggPosition>=screenHight)
    {
        eggPosition=0;
    }
},200)
setTimeout(() => {
    clearInterval(moveDown);
    checkEquality(eggImage,basketImage);
    eggImage.src="brok.png";

    setTimeout(()=>{
        eggImage.style.visibility = "hidden"
      
    },2000)
   
  }, timeOut);
//   resetImg(eggImage);

  const  resetImg =function(eggImage){
    eggImage.style.visibility="visible"
    eggPosition=0;
    eggImage.src="eg.png"
    

  }
//////////////////////////////////////////////////////////////////////
  let basketImage=document.getElementById("basket")
  let basketPosition=0;
  const moveLeft =function(number){

    basketPosition+=number;
    basketImage.style.left=basketPosition+'px';
    let screenWidth=window.innerWidth-350;
    if (basketPosition>=screenWidth)
    {
        basketPosition=0;
    }

}

/////////////////////////////////////////////////////
let score = 0;
function incrementScore() {
score+=10;
document.querySelector('.score').innerText = score;
}


const checkEquality=function(eggImage,basketImage)
{
    let eggCordenates =eggImage.getBoundingClientRect();
    let basketCordenates =basketImage.getBoundingClientRect();
    console.log(eggCordenates,basketCordenates)
    if (
        eggCordenates.left < basketCordenates.right &&
        eggCordenates.right > basketCordenates.left
      ) {
        incrementScore();
        eggImage.style.visibility="hidden";
   
    }else {
        eggImage.style.visibility="visible";
    }
}
