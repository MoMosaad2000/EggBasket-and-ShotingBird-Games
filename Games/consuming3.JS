window.addEventListener("click",function(event){

    selectedCourse(event);
    let rightButt=document.getElementById("rightButton");
    let leftButt=document.getElementById("leftButton");
    rightButt.onclick=()=>moveCourse("list1","list2");
    leftButt.onclick=()=>moveCourse("list2","list1");
});
