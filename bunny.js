 document.body.innerHTML+='<img id="rabbit" src="https://cdn.pixabay.com/photo/2013/07/13/01/24/bunny-155674_1280.png" alt="" width="80" style="position:absolute;top=0;left=0;"></img>';

document.onmousemove = (e) =>{
  rabbit.style.left = (e.offsetX+50)+'px';
  rabbit.style.top = (e.offsetY+50)+'px';
}