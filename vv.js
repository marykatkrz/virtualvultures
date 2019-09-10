var introText=document.querySelectorAll('.intro-text');

function scrollAppear(){
    for(var i=1; i<introText.length; i++){
        var introPosition=introText[i].getBoundingClientRect().top;
        var screenPosition=window.innerHeight;
        if(introPosition<screenPosition){
            introText[i].classList.add('intro-appear');
        }
        
    }
}
window.addEventListener('scroll', scrollAppear);
function loadAppear(){
    var load=introText[0].classList.add('intro-appear')
    return load
}
window.addEventListener('load', loadAppear)
