let tmlist = '변수선언/변수의타입/함수_연산자/함수_조건/함수_반복문/break_continue/Array'.split('/');

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

function typing(ptxttag, timers = 1, longt = ptxttag.innerHTML) {
  ptxttag.innerHTML = '';
  for (let n = 0; n < longt.length; n++) {
    setTimeout(() => {
      ptxttag.innerHTML += longt[n];
    }, n * (timers * 100));
  }
}

function rof(tg_arrlong, under_value = false, mxv = 0, mnv = 0, rs_rof = false) {
  switch (typeof tg_arrlong) {
    case 'number':
      if (typeof under_value == 'number' && under_value <= tg_arrlong)
        rs_rof = Math.floor(Math.random() * (parseInt(tg_arrlong - under_value) + 1)) + under_value;
      else rs_rof = Math.floor(Math.random() * (tg_arrlong + 1));
      break;
    default:
      if (typeof tg_arrlong == 'string') tg_arrlong = tg_arrlong.split('/');
      mxv = tg_arrlong.length;
      if (tg_arrlong.includes(under_value)) {
        mnv = tg_arrlong.indexOf(under_value);
        rs_rof = tg_arrlong[Math.floor(Math.random() * parseInt(mxv - mnv)) + mnv];
      }
      else rs_rof = tg_arrlong[Math.floor(Math.random() * mxv)];
      break;
  }
  return rs_rof;
}

document.head.innerHTML += '<link rel="stylesheet" href="/css/menustyle.css"/>';

//orgroot corrector
if (location.href.includes('github.io')) {
  for (orgroot of document.querySelectorAll('[href^="/"]')) {
    orgroot.setAttribute('href', '/' + location.href.split('/')[3] + orgroot.getAttribute('href'));
  }
  for (orgroot of document.querySelectorAll('[src^="/"]')) {
    orgroot.setAttribute('src', '/' + location.href.split('/')[3] + orgroot.getAttribute('src'));
  }
}

for (limark of document.querySelectorAll('ol li')) {
  if (!limark.parentElement.children[0].innerHTML.includes('?!') || !limark.parentElement.innerHTML.includes('//')) {
    limark.parentElement.children[0].classList = 'titline';
  }

  if (limark.innerHTML.includes('?!')) {
    limark.innerHTML = '<linehead>' + limark.innerHTML.split('?!')[0] + '</linehead>' + limark.innerHTML.split('?!')[1];
  }

  if (limark.innerHTML.includes('textarea'))
    limark.innerHTML = limark.innerHTML.replace('코드보기', '코드보기<input type="checkbox">');
  else {
    if (limark.innerHTML.includes('//')) {
      limark.innerHTML = limark.innerHTML.split('//')[0] + '<linetail>' + limark.innerHTML.split('//')[1] + '</linetail>';
    }
    if (limark.innerHTML.includes('console.log(')) {
      if (limark.innerHTML.length - limark.innerHTML.replaceAll(');', '').length > 2)
        limark.innerHTML = limark.innerHTML.replace('console.log(', '콘솔(<input onclick="this.select()" ondblclick="console.log(eval(this.value))" readonly value="').replace(');!!', '">);')
      else
        limark.innerHTML = limark.innerHTML.replace('console.log(', '콘솔(<input onclick="this.select()" ondblclick="console.log(eval(this.value))" readonly value="').replace(');', '">);')
    }
  }
}

[].forEach.call(document.querySelectorAll('textarea'), (tareas) => {
  tareas.setAttribute('readonly', 'readonly');
  tareas.ondblclick = () => {
    console.clear(); console.log(eval(tareas.value));
  }
  tareas.onwheel = () => event.stopPropagation();
});

[].forEach.call(document.querySelectorAll('ol>li [type=checkbox]'), (cckbox) => {
  cckbox.oninput = () => {
    if (cckbox.checked == true) {
      for (chkfortx of document.querySelectorAll('ol>li [type=checkbox]')) chkfortx.checked = false;
      cckbox.checked = true;
    }
  }
});