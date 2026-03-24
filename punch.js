document.head.innerHTML += '<link href="/css/style.css" rel="stylesheet">';

document.body.innerHTML += '<div id="vs" style="width:50vh;height:100vh;position:fixed;left:40.25vw;top:-20vh;"><div style="width:100%;height:100%;transform:rotateX(180deg);background:center/contain no-repeat url(https://cdn.pixabay.com/photo/2020/11/12/08/38/chicken-5734786_1280.png);"></div></div>';

document.body.innerHTML += '<div id="punchL" style="width:20vw;height:20vw;position:fixed;bottom:0;left:20vw;"><div style="background:center/contain no-repeat url(https://cdn.pixabay.com/photo/2013/07/12/16/55/mitt-151498_1280.png);width:100%;height:100%;transform:rotate(-30deg);"></div></div>';

document.body.innerHTML += '<div id="punchR" style="width:20vw;height:20vw;position:fixed;bottom:0;right:25vw;"><div style="background:center/contain no-repeat url(https://cdn.pixabay.com/photo/2013/07/12/16/55/mitt-151498_1280.png);width:100%;height:100%;transform:rotateY(180deg) rotate(-30deg);"></div></div>';
let chick;
document.onkeydown = (t_k) => {
    clearTimeout(chick);
    if (t_k.key == 'ArrowLeft') {
        punchL.style.transform = 'translate(5vw,-5vw) scale(.8) rotateX(40deg)'; punchL.style.filter = 'drop-shadow(2em -2em 1em yellow)';
        vs.classList = 'punch';
    } else if (t_k.key == 'ArrowRight') {
        punchR.style.transform = 'translate(-5vw,-5vw) scale(.8) rotateX(40deg)'; punchR.style.filter = 'drop-shadow(-2em -2em 1em red)';
        vs.classList = 'punch';
    }
    chick = setTimeout(()=>{vs.removeAttribute('class');},500);
}
document.onkeyup = (t_k) => { t_k.key.substring(0,5) == 'Arrow' ? (punchL.style.transform = '', punchL.style.filter = '',punchR.style.transform = '', punchR.style.filter = '') : ''; }