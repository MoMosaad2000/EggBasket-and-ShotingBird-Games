let flag = false 
const moveRight=(imageObject,left)=>{
    let id=setInterval(()=>{
         left+=20;
       
         if(left<(window.innerWidth+30)&&!flag)
         imageObject.style.left=left+"px";
         else if (!flag)
         {
             clearInterval(id);
             imageObject.classList.add("flip");
             moveLeft(imageObject,left); 
         }else{
            clearInterval(id)
         }
    },30);
 }
 
 const moveLeft=(imageObject,left)=>{
     let id=setInterval(()=>{
         left-=20;
         if(left>=-100)
         imageObject.style.left=left+"px";
         else if(!flag)
         {
             clearInterval(id);
             imageObject.classList.remove("flip");
             moveRight(imageObject,left);
         } else{
            clearInterval(id);
         }
 
 
     },30);

 
 };

 /////////////////assignment2////////////////////////
 let birdImage=document.getElementById("bird2");
 let birdPosition=0;
 let timeOut= (10*(innerHeight-200))/30;

 birdImage.onclick=function(){

 flag=true;


 const moveDown =setInterval(()=>
{
    birdPosition+=30;
    birdImage.style.top=birdPosition+'px';
    let screenHight=window.innerHeight+200;
    if (birdPosition>=screenHight)
    {
        birdPosition=0;
    }
},10)
setTimeout(() => {
    clearInterval(moveDown);
    birdImage.src="died.png";

    setTimeout(()=>{
        birdImage.style.visibility = "hidden"
      
    },1000)
   
  }, timeOut);
}