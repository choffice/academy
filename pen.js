document.body.innerHTML+='<button id="onbodd" onclick="this.classList.toggle(\'view\')"></button><ul id="bodd"></ul>';

function resetbodd(){
  bodd.innerHTML = '';
for (x of Array(300))
  bodd.innerHTML +=
    '<li onmousemove="drawing(this)"></li>';
}
resetbodd();

let mouseR = 1;

document.body.onmousedown = (mbtn) => {
  event.preventDefault();
  mouseR = mbtn.button;
};
document.body.onmouseup = (mbtn) => {
  mouseR = 1;
};

bodd.ondblclick = () => resetbodd();

function drawing(dott) {
  if (mouseR == 0) dott.style.opacity = 1;
  else if(mouseR == 2) dott.style.opacity = 0;
}

document.body.onkeyup = (kv) => {
if(kv.key == 'Escape') {onbodd.classList.toggle('view'); resetbodd();}
}