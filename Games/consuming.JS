window.addEventListener('load',function(){
    document.onkeydown=function(event){
        if ('ArrowRight'===event.key)
        {
            moveLeft(30)
        }
        else{
            moveLeft(-30)
        }
    }
});
