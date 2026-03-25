let tmlist = '텍스트:text/이미지:image/하이퍼:a/리스트:list/테이블:table/미디어:media/공간:space/semantic:semantic/입력양식:form'.split('/');

if(location.href.includes('index.html')){
for(a_tm of tmlist){
homemenu.innerHTML+='<li><a href="0'+(tmlist.indexOf(a_tm)+1)+'_'+a_tm.split(':')[1]+'.html">'+a_tm.split(':')[0]+' 태그</a></li>'
}
}else{
document.body.innerHTML='<menu id="topmenu" style="display:flex;justify-content: end;list-style:none;align-items:center;font-size:1vw;"></menu>'+document.body.innerHTML;
topmenu.innerHTML='<li style="margin-inline:2%;"><a href="index.html" style="text-decoration:none;"><p style="background:center/contain no-repeat url(https://cdn.pixabay.com/photo/2015/12/28/02/58/home-1110868_1280.png);color:transparent;padding:2%;">메인 홈으로</p></a></li>';
for(a_tm of tmlist){topmenu.innerHTML+='<li style="margin-inline:2%;background:green;padding:1%;"><a href="0'+(tmlist.indexOf(a_tm)+1)+'_'+a_tm.split(':')[1]+'.html" style="text-decoration: none;color:#fff;">'+a_tm.split(':')[0]+' 태그</a></li>';}

document.querySelector('h1').style.marginTop = '10vh';}
document.head.innerHTML+='<link rel="stylesheet" href="/css/menustyle.css"/>';

//orgroot corrector
if(location.href.includes('github.io')){
for(orgroot of document.querySelectorAll('[href^="/"]')){
  orgroot.setAttribute('href','/'+location.href.split('/')[3]+orgroot.getAttribute('href'));
}
for(orgroot of document.querySelectorAll('[src^="/"]')){
  orgroot.setAttribute('src','/'+location.href.split('/')[3]+orgroot.getAttribute('src'));
}}