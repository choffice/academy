let h1 = document.querySelector('h1');
h1.style.position = 'absolute';
h1.style.top = 0;
h1.style.left = 0;
document.onkeydown = (k) => {
    switch (k.key) {
        case 'w': h1.style.top = parseInt(h1.style.top) - 30 + 'px';
            break;
        case 'a': h1.style.left = parseInt(h1.style.left) - 30 + 'px';
            break;
        case 's': h1.style.top = parseInt(h1.style.top) + 30 + 'px';
            break;
        case 'd': h1.style.left = parseInt(h1.style.left) + 30 + 'px';
            break;
        case 'q': h1.style.left = parseInt(h1.style.left) - 30 + 'px'; h1.style.top = parseInt(h1.style.top) - 30 + 'px';
            break;
        case 'e': h1.style.left = parseInt(h1.style.left) + 30 + 'px'; h1.style.top = parseInt(h1.style.top) - 30 + 'px';
            break;
        case 'z': h1.style.left = parseInt(h1.style.left) - 30 + 'px'; h1.style.top = parseInt(h1.style.top) + 30 + 'px';
            break;
        case 'c': h1.style.left = parseInt(h1.style.left) + 30 + 'px'; h1.style.top = parseInt(h1.style.top) + 30 + 'px';
            break;
        case 'x': h1.style.left = 0; h1.style.top = 0;
            break;
    }
    h1.innerText = '잡아봐라~'; h1.style.color = '#000'; h1.style.transform = 'scale(1)';
}
document.onkeyup = (k) => { }
h1.onclick = () => {
    event.stopPropagation(); h1.innerText = '성공!'; h1.style.color = 'blue'; h1.style.transform = 'scale(1.5)';
}
document.querySelector('body :not(h1)').onclick = () => { event.stopPropagation(); h1.style.color = 'red'; h1.innerText = '실패~ㅠ'; }