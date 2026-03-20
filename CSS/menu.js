let tmlist = '기본선택자/속성선택자/후손선택자/동위선택자/반응선택자/상태선택자/구조선택자/링크선택자/문자선택자/부정선택자'.split('/');

if(location.href.includes('index.html')){
for(a_tm of tmlist){
homemenu.innerHTML+='<li><a href="'+(tmlist.indexOf(a_tm)+1<10?'0'+(tmlist.indexOf(a_tm)+1):(tmlist.indexOf(a_tm)+1))+'_'+a_tm+'.html">'+a_tm+'</a></li>'
}
}else{
document.body.innerHTML='<menu id="topmenu" style="display:flex;justify-content: end;list-style:none;align-items:center;font-size:1vw;"></menu>'+document.body.innerHTML;
topmenu.innerHTML='<li style="margin-inline:2%;"><a href="index.html" style="text-decoration:none;"><p style="background:center/contain no-repeat url(https://cdn.pixabay.com/photo/2015/12/28/02/58/home-1110868_1280.png);color:transparent;padding:2%;">메인 홈으로</p></a></li>';
for(a_tm of tmlist){topmenu.innerHTML+='<li style="margin-inline:2%;background:green;padding:1%;"><a href="'+(tmlist.indexOf(a_tm)+1<10?'0'+(tmlist.indexOf(a_tm)+1):(tmlist.indexOf(a_tm)+1))+'_'+a_tm+'.html" style="text-decoration: none;color:#fff;">'+a_tm+'</a></li>';}

document.querySelector('h1').style.marginTop = '10vh';}