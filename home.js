var images = document.getElementsByTagName('img'); 
var img=document.getElementById("img");
var imgList = [];
for(var i = 1; i < images.length; i++) {
    imgList.push(images[i].src);
    images[i].addEventListener("click", function(){
        for(var i=0; i<imgList.length; i++){
            var text=`<div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
            <img src="${imgList[i]}">
            </div>
            </div>`
            img.innerHTML=text;
        }
    })
}
 
