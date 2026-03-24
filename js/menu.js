let tmlist = 'variable변수'.split('/');

if (location.href.includes('index.html')) {
  for (a_tm of tmlist) {
    homemenu.innerHTML += '<li><a href="' + (tmlist.indexOf(a_tm) + 1 < 10 ? '0' + (tmlist.indexOf(a_tm) + 1) : (tmlist.indexOf(a_tm) + 1)) + '_' + a_tm + '.html">' + a_tm + '</a></li>'
  }
} else {
  document.body.innerHTML = '<menu id="topmenu" style="position:fixed;top:0;right:0;width:100vw;display:flex;justify-content: end;list-style:none;align-items:center;font-size:1vw;"></menu>' + document.body.innerHTML;
  topmenu.innerHTML = '<li style="margin-inline:2%;"><a href="index.html" style="text-decoration:none;"><p style="background:center/contain no-repeat url(https://cdn.pixabay.com/photo/2015/12/28/02/58/home-1110868_1280.png);color:transparent;padding:2%;">메인 홈으로</p></a></li>';
  for (a_tm of tmlist) { topmenu.innerHTML += '<li style="margin-inline:2%;background:green;padding:1%;"><a href="' + (tmlist.indexOf(a_tm) + 1 < 10 ? '0' + (tmlist.indexOf(a_tm) + 1) : (tmlist.indexOf(a_tm) + 1)) + '_' + a_tm + '.html" style="text-decoration: none;color:#fff;">' + a_tm + '</a></li>'; }

  document.querySelector('h1').style.marginTop = '10vh';
}

function typing(ptxttag, timers=1, longt = ptxttag.innerHTML) {
  ptxttag.innerText = '';
  for (let n = 0; n < longt.length; n++) {
    setTimeout(() => {
      ptxttag.innerHTML += longt[n];
    }, n * (timers*100));
  }
}

document.head.innerHTML+='<link rel="stylesheet" href="/css/menustyle.css"/>';