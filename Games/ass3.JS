let userInput= document.querySelector("input[name=textCourse]")
let olObject = document.getElementsByClassName("list1")[0];
 function addCourse(){

    let newCourse=document.createElement("li");
    newCourse.innerText=userInput.value;
    if (userInput.value===""){
        console.log("Enter Course Name Please ")
    }else{ 
     olObject.append(newCourse);}  
 }


let addButton= document.getElementById("addButton")
addButton.onclick=function(){
    addCourse()
}



let selected ; 
function selectedCourse (event){
    if (event.target.tagName ==="LI")
    {
        event.target.classList.add("selected");
        selected=event.target;
    }
    
}

function moveCourse (firstList,secondList){
let firstList_ = document.getElementsByClassName(firstList)[0];
let secondList_=document.getElementsByClassName(secondList)[0];
  if (selected != null)
  {
    let clone= selected.cloneNode(true);
    firstList_.removeChild(selected);
    secondList_.appendChild(clone);
    clone.classList.remove("selected");
  }
}
