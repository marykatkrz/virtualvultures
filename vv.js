function scrollAppear(){
    var introText=document.querySelectorAll('.intro-text');
    
    for(var i=0; i<introText.length; i++){
        var introPosition=introText[i].getBoundingClientRect().top;
        var screenPosition=window.innerHeight/2;
        if(introPosition<screenPosition){
            introText[i].classList.add('intro-appear');
        }
    }
}
window.addEventListener('scroll', scrollAppear);


