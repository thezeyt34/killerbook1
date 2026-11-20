const $=id=>document.getElementById(id);let H=56;const setH=()=>{H=matchMedia('(max-width:820px)').matches?78:56};setH();
const MF='Игорь Олег Денис Лев Виктор Егор Тимур Борис Артём Михаил Сергей Николай Павел Андрей Роман Максим Илья Кирилл Фёдор Антон'.split(' ');
const FF='Мария Анна Ольга Елена Ирина Софья Вера Нина Дарья Полина Юлия Татьяна Кира Алиса Надежда Лидия Евгения Тамара Любовь Эльза'.split(' ');
const SN='Волков Смирнов Кузнецов Попов Лебедев Соколов Морозов Новиков Орлов Фёдоров Зайцев Белов Гусев Тихонов Комаров Крылов Мельников Сергеев Давыдов Ершов Жуков Захаров Никитин Осипов Панин Рябов Титов Ушаков Харитонов Чернов Шубин Юдин Яковлев Воронин Лазарев Медведев Носов Пестов Рогов Селезнёв Власов Дьяконов Киселёв Миронов Блинов Горбунов Ковалевский Заречный'.split(' ');
const PR='Врач Учитель Бухгалтер Юрист Инженер Повар Курьер Журналист Архитектор Программист Библиотекарь Водитель Художник Электрик Фармацевт Пекарь Музыкант'.split(' ');
const CT=['Москва','Санкт-Петербург','Казань','Тверь','Псков','Омск','Самара','Тула','Выборг','Саратов','Рязань','Сочи','Кострома','Новгород'];
const TR=['левша','носит очки','татуировка','аллергия на орехи','водит красную машину','хромает','курит трубку','собирает марки','играет на скрипке','шрам на щеке','боится высоты','носит шляпу','разводит кошек','говорит с акцентом'];
const fem=s=>s.endsWith('ий')?s.slice(0,-2)+'ая':s+'а';
const CL0=[
['Убийце не больше 38 лет',p=>p.age<=38],
['Убийце не меньше 24 лет',p=>p.age>=24],
['Возраст убийцы — чётное число',p=>p.age%2==0],
['Убийца не врач и не учитель',p=>!['Врач','Учитель'].includes(p.pr)],
['Убийца не бухгалтер, не юрист и не курьер',p=>!['Бухгалтер','Юрист','Курьер'].includes(p.pr)],
['В имени убийцы нет буквы «А»',p=>!p.fn.toLowerCase().includes('а')],
['Имя убийцы короче 7 букв',p=>p.fn.length<7],
['В фамилии убийцы не больше 8 букв',p=>p.ln.length<=8],
['Фамилия убийцы начинается на букву от «М» до «Я»',p=>p.ln[0]>='М'],
['ID убийцы — чётное число',p=>p.id%2==0],
['ID убийцы не делится на 5',p=>p.id%5!=0],
['Убийца не живёт в Москве, Петербурге и Казани',p=>!['Москва','Санкт-Петербург','Казань'].includes(p.ct)],
['Убийца не живёт в Омске и Туле',p=>!['Омск','Тула'].includes(p.ct)],
['Примета убийцы — левша, очки, татуировка, шрам или шляпа',p=>['левша','носит очки','татуировка','шрам на щеке','носит шляпу'].includes(p.tr)]];
let CL=[];const ok=p=>CL.every(c=>c[1](p));
const VW='аеёиоуыэюя',nx=(p,s)=>!p.toLowerCase().includes(s),G=[
[['Убийце не больше 35 лет',p=>p.age<=35],['Убийце не больше 42 лет',p=>p.age<=42],['Убийце не больше 50 лет',p=>p.age<=50]],
[['Убийце не меньше 22 лет',p=>p.age>=22],['Убийце больше 25 лет',p=>p.age>25],['Убийце не меньше 28 лет',p=>p.age>=28]],
[['Возраст убийцы — чётное число',p=>p.age%2==0],['Возраст убийцы — нечётное число',p=>p.age%2==1],['Возраст убийцы делится на 3',p=>p.age%3==0],['Возраст убийцы не делится на 3',p=>p.age%3!=0]],
[['Убийца не врач и не учитель',p=>!['Врач','Учитель'].includes(p.pr)],['Убийца не инженер, не электрик и не программист',p=>!['Инженер','Электрик','Программист'].includes(p.pr)]],
[['Убийца не бухгалтер, не юрист и не курьер',p=>!['Бухгалтер','Юрист','Курьер'].includes(p.pr)],['Убийца не повар, не пекарь и не водитель',p=>!['Повар','Пекарь','Водитель'].includes(p.pr)],['Убийца не художник и не музыкант',p=>!['Художник','Музыкант'].includes(p.pr)]],
[['Название профессии убийцы длиннее 6 букв',p=>p.pr.length>6],['Название профессии убийцы не длиннее 9 букв',p=>p.pr.length<=9],['Профессия убийцы начинается не на гласную',p=>!VW.includes(p.pr[0].toLowerCase())]],
[['В имени убийцы нет буквы «А»',p=>nx(p.fn,'а')],['В имени убийцы нет буквы «О»',p=>nx(p.fn,'о')],['В имени убийцы нет буквы «Е»',p=>nx(p.fn,'е')]],
[['Имя убийцы короче 7 букв',p=>p.fn.length<7],['Имя убийцы длиннее 4 букв',p=>p.fn.length>4],['Имя убийцы не длиннее 5 букв',p=>p.fn.length<=5]],
[['Имя убийцы начинается на букву от «А» до «М»',p=>p.fn[0]<='М'],['Имя убийцы начинается на букву от «Н» до «Я»',p=>p.fn[0]>='Н'],['Имя убийцы начинается не на гласную',p=>!VW.includes(p.fn[0].toLowerCase())]],
[['В фамилии убийцы не больше 8 букв',p=>p.ln.length<=8],['В фамилии убийцы не меньше 7 букв',p=>p.ln.length>=7],['В фамилии убийцы не больше 9 букв',p=>p.ln.length<=9]],
[['Фамилия убийцы начинается на букву от «М» до «Я»',p=>p.ln[0]>='М'],['Фамилия убийцы начинается на букву от «А» до «Р»',p=>p.ln[0]<='Р'],['Фамилия убийцы начинается на букву от «К» до «Ф»',p=>p.ln[0]>='К'&&p.ln[0]<='Ф']],
[['В фамилии убийцы нет буквы «О»',p=>nx(p.ln,'о')],['В фамилии убийцы нет буквы «В»',p=>nx(p.ln,'в')],['В фамилии убийцы нет буквы «Е»',p=>nx(p.ln,'е')]],
[['ID убийцы — чётное число',p=>p.id%2==0],['ID убийцы — нечётное число',p=>p.id%2==1]],
[['ID убийцы не делится на 5',p=>p.id%5!=0],['ID убийцы делится на 3',p=>p.id%3==0],['ID убийцы не делится на 3',p=>p.id%3!=0]],
[['ID убийцы не оканчивается на 0, 1 и 2',p=>p.id%10>2],['ID убийцы не оканчивается на 8 и 9',p=>p.id%10<8]],
[['Убийца не живёт в Москве, Петербурге и Казани',p=>!['Москва','Санкт-Петербург','Казань'].includes(p.ct)],['Убийца не живёт в Омске и Туле',p=>!['Омск','Тула'].includes(p.ct)],['Убийца не живёт в Пскове, Твери и Саратове',p=>!['Псков','Тверь','Саратов'].includes(p.ct)]],
[['Название города убийцы не длиннее 7 букв',p=>p.ct.length<=7],['Название города убийцы длиннее 5 букв',p=>p.ct.length>5]],
[['Примета убийцы — левша, очки, татуировка, шрам или шляпа',p=>['левша','носит очки','татуировка','шрам на щеке','носит шляпу'].includes(p.tr)],['Убийца не левша, не носит очки и не имеет татуировки',p=>!['левша','носит очки','татуировка'].includes(p.tr)]],
[['У убийцы нет аллергии, хромоты и страха высоты',p=>!['аллергия на орехи','хромает','боится высоты'].includes(p.tr)],['Убийца не разводит кошек, не курит трубку и не собирает марки',p=>!['разводит кошек','курит трубку','собирает марки'].includes(p.tr)],['Убийца не играет на скрипке и не водит красную машину',p=>!['играет на скрипке','водит красную машину'].includes(p.tr)]]];
function pickCL(){const ix=G.map((_,i)=>i);for(let i=ix.length-1;i>0;i--){const j=R()*(i+1)|0;[ix[i],ix[j]]=[ix[j],ix[i]]}CL=ix.slice(0,14).sort((a,b)=>a-b).map(i=>pick(G[i]))}
let seed,N,P,x,alive,sel=0,K,E,V=[],hist=[],ck={},F={},R,pd;
function mb(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const pick=a=>a[R()*a.length|0];
function mk(id){const g=R()<.5?0:1,b=pick(SN);return{id,g,fn:pick(g?FF:MF),ln:g?fem(b):b,age:18+(R()*63|0),pr:pick(PR),ct:pick(CT),tr:pick(TR)}}
const fin=p=>(p.s=(p.fn+' '+p.ln+' '+p.pr+' '+p.ct+' '+p.tr+' '+pd(p.id)).toLowerCase(),p);
function init(n,ns){
N=n;try{seed=+localStorage.getItem('kqs'+n)}catch(_){}if(ns||!seed){seed=((Math.random()*4e9)>>>0)||1;try{localStorage.setItem('kqs'+n,seed);localStorage.removeItem('kn'+n)}catch(_){}}R=mb(seed);pd=i=>String(i).padStart(Math.max(4,String(N).length),'0');
let k,e;for(;;){pickCL();e=1+(R()*N|0);E={id:e,g:1,fn:'Мариша',ln:'Роверс',age:27,pr:'Художник',ct:'Выборг',tr:'левша'};if(ok(E))continue;let c=0;do{K=mk(1+(R()*N|0))}while((K.id==e||!ok(K))&&++c<4e5);if(c<4e5)break}k=K.id;



P=new Array(N+1);const U=new Set,ky=p=>p.fn+p.ln+p.age+p.pr;
for(let i=1;i<=N;i++){let p;
if(i==k)p=K;else if(i==e)p=E;else do{p=mk(i)}while(ok(p)||U.has(ky(p)));
U.add(ky(p));P[i]=fin(p)}
x=new Uint8Array(N+1);alive=N;sel=0;hist=[];ck={};
try{const s=JSON.parse(localStorage.getItem('kn'+N));if(s){s.x.forEach(i=>x[i]=1);alive=N-s.x.length;ck=s.c||{};sel=s.s||0}}catch(_){}
$('nn').textContent=N.toLocaleString('ru-RU').replace(/\u00a0/g,' ');$('eid').textContent=pd(e);$('set').value=N;
$('cl').innerHTML=CL.map((c,i)=>`<li><label><input type="checkbox" data-c="${i}" ${ck[i]?'checked':''}><span class="${ck[i]?'d':''}">${i+1}. ${c[0]}</span></label></li>`).join('');
apply();upd()}
function sv(){try{const a=[];for(let i=1;i<=N;i++)if(x[i])a.push(i);localStorage.setItem('kn'+N,JSON.stringify({x:a,c:ck,s:sel}))}catch(_){}}
function upd(){if(alive==1){for(let i=1;i<=N;i++)if(!x[i]){sel=i;break}}
$('al').textContent=alive.toLocaleString('ru-RU');$('acc').disabled=$('acc2').disabled=!sel;
$('acc').textContent=sel?'ОБВИНИТЬ: '+P[sel].fn+' '+P[sel].ln:'ОБВИНИТЬ (выберите ⚑)';
let m=0;for(const i of V)if(!x[i])m++;$('mc').textContent=m;$('vc').textContent=V.length}
const FD=[['q','Поиск','t'],['pr','Профессия','s',PR],['ct','Город','s',CT],['tr','Примета','s',TR],['l','Имя на букву','t'],['hl','В имени есть буква','t'],['hs','В фамилии есть буква','t'],['n1','Имя от буквы','t'],['n2','Имя до буквы','t'],['fs','Имя короче (букв)','n'],['ls','Фамилия короче','n'],['ld','ID оканчивается на (напр. 012)','t'],['fl','Имя длиннее (букв)','n'],['ll','Фамилия длиннее','n'],['s1','Фамилия от буквы','t'],['s2','Фамилия до буквы','t'],['a1','Возраст от','n'],['a2','Возраст до','n'],['im','ID','s',[['e','чётный'],['o','нечётный'],['5','кратен 5'],['3','кратен 3'],['n3','не кратен 3']]],['ap','Возраст','s',[['e','чётный'],['o','нечётный'],['3','кратен 3'],['n3','не кратен 3']]],['h','Скрыть вычеркнутых','c']];
$('fl').innerHTML=FD.map(([i,t,k,o])=>`<label>${t}`+(k=='s'?`<select id="f_${i}"><option value="">любой</option>${o.map(v=>Array.isArray(v)?`<option value="${v[0]}">${v[1]}</option>`:`<option>${v}</option>`).join('')}</select>`:k=='c'?`<input type="checkbox" id="f_${i}" style="width:20px">`:`<input id="f_${i}" type="${k=='n'?'number':'text'}">`)+'</label>').join('');
$('fl').insertAdjacentHTML('beforeend','<button id="fd">Готово</button>');
$('fd').onclick=()=>document.body.classList.remove('fo');
$('ft').onclick=()=>document.body.classList.toggle('fo');
$('gear').onclick=()=>document.body.classList.toggle('mo');
function rf(){F={};FD.forEach(([i,,k])=>{const e=$('f_'+i);F[i]=k=='c'?e.checked:k=='s'?e.value:e.value.trim().toLowerCase()})}
function mt(p){const f=F;
if(f.q&&!p.s.includes(f.q))return 0;
if(f.pr&&p.pr!=f.pr||f.ct&&p.ct!=f.ct||f.tr&&p.tr!=f.tr)return 0;
const n=p.fn.toLowerCase();
if(f.l&&!f.l.includes(n[0]))return 0;
if(f.hl&&![...f.hl].some(c=>n.includes(c)))return 0;
if(f.a1&&p.age<+f.a1||f.a2&&p.age>+f.a2)return 0;
if(f.im=='e'&&p.id%2||f.im=='o'&&p.id%2==0||f.im=='5'&&p.id%5||f.im=='3'&&p.id%3||f.im=='n3'&&p.id%3==0)return 0;
if(f.ap=='e'&&p.age%2||f.ap=='o'&&p.age%2==0||f.ap=='3'&&p.age%3||f.ap=='n3'&&p.age%3==0)return 0;
if(f.hs&&![...f.hs].some(c=>p.ln.toLowerCase().includes(c)))return 0;
if(f.n1&&n[0]<f.n1[0]||f.n2&&n[0]>f.n2[0])return 0;
if(f.fs&&p.fn.length>=+f.fs||f.ls&&p.ln.length>=+f.ls)return 0;
if(f.ld&&!f.ld.includes(p.id%10))return 0;
if(f.fl&&p.fn.length<=+f.fl||f.ll&&p.ln.length<=+f.ll)return 0;
const s=p.ln[0].toLowerCase();
if(f.s1&&s<f.s1[0]||f.s2&&s>f.s2[0])return 0;
return 1}
function apply(){rf();V=[];for(let i=1;i<=N;i++)if(mt(P[i])&&!(F.h&&x[i]))V.push(i);
$('in').style.height=V.length*H+'px';draw();upd()}
function draw(){const s=$('lst'),a=Math.max(0,(s.scrollTop/H|0)-5),b=Math.min(V.length,Math.ceil((s.scrollTop+s.clientHeight)/H)+5);let o='';
for(let j=a;j<b;j++){const p=P[V[j]];
o+=`<div class="row${x[p.id]?' x':''}${sel==p.id?' sl':''}" data-i="${p.id}"><b>${pd(p.id)}</b><div><span>${p.fn} ${p.ln}, ${p.age}</span><i>${p.pr} · ${p.ct} · ${p.tr}</i></div><button data-s="${p.id}" title="Выбрать">⚑</button></div>`}
$('rows').style.transform=`translateY(${a*H}px)`;$('rows').innerHTML=o}
function bulk(v){const ch=[];for(const i of V)if(x[i]!=v){x[i]=v;ch.push(i)}
if(!ch.length)return;hist.push([ch,v]);alive+=v?-ch.length:ch.length;if(sel&&x[sel])sel=0;
if(F.h)apply();else{draw();upd()}sv()}
$('lst').onscroll=draw;addEventListener('resize',()=>{setH();apply()});$('acc2').onclick=()=>$('acc').click();
$('lst').onclick=e=>{const b=e.target.closest('[data-s]');
if(b){sel=sel==+b.dataset.s?0:+b.dataset.s;draw();upd();sv();return}
const r=e.target.closest('.row');if(!r)return;const i=+r.dataset.i;
x[i]^=1;alive+=x[i]?-1:1;hist.push([[i],x[i]]);if(x[i]&&sel==i)sel=0;
if(F.h)apply();else{draw();upd()}sv()};
$('fl').oninput=apply;$('fl').onchange=apply;
$('kill').onclick=()=>bulk(1);$('back').onclick=()=>bulk(0);
$('und').onclick=()=>{const h=hist.pop();if(!h)return;h[0].forEach(i=>x[i]=h[1]?0:1);alive+=h[1]?h[0].length:-h[0].length;apply();sv()};
$('clr').onclick=()=>{FD.forEach(([i,,k])=>{const e=$('f_'+i);k=='c'?e.checked=false:e.value=''});apply()};
$('cl').onchange=e=>{const i=e.target.dataset.c;ck[i]=e.target.checked;e.target.nextElementSibling.className=ck[i]?'d':'';sv()};
$('rs').onclick=()=>{if(confirm('Сбросить весь прогресс?')){try{localStorage.removeItem('kn'+N)}catch(_){}init(N)}};
$('nc').onclick=()=>{if(confirm('Начать новое дело? Текущий прогресс будет потерян.'))init(N,1)};
$('set').onchange=e=>{try{localStorage.setItem('kn_n',e.target.value)}catch(_){}init(+e.target.value)};
function tab(t){document.body.className=t;if(t=='tr')draw()}
function show(h){$('ovb').innerHTML=h;$('ov').style.display='flex'}
$('acc').onclick=()=>{const p=P[sel];
if(p.id==K.id){const s=K.g?'ась':'ся',w=K.g?'она':'он',a=K.g?'а':'';
show(`<h2>Дело закрыто</h2><p>Вы обвинили <b>${p.fn} ${p.ln}</b> (${p.pr}, ${p.ct}; ${p.tr}) — и это верно.</p><p>Под тяжестью улик ${w} сознал${s}. Годами ${p.pr.toLowerCase()} ${p.fn} ${p.ln} втайне подменял${a} полотна из коллекции Ландау мастерскими копиями и продавал${a} оригиналы через посредников в Париже и Вене. Артур ничего не замечал, пока Мариша не нашла под лаком «Венеции» Каналетто современный пигмент.</p><p>Узнав, что Ландау решил объявить о подделках на балу, ${w} решил${a} действовать. В 23:40 ${w} сам вывел${a} из строя генератор и в четыре минуты темноты заманил${a} Артура в оранжерею. Удар ножом, потом удар по голове подвернувшейся Мариши, нож и ключ от сейфа — в её руку. Папку с экспертизой ${w} забрал${a} из сейфа и спрятал${a} в тайнике.</p><p>Папку нашли ровно там, где указала картотека. Обвинение с Мариши Роверс сняли, а инспектор Громов подал в отставку. Через год Мариша открыла в Выборге собственную мастерскую. Над дверью — табличка: «Убийца не Мариша».</p><button onclick="$('ov').style.display='none'">Закрыть</button> <button onclick="init(N,1);$('ov').style.display='none'">Новое дело</button>`)}
else{x[sel]=1;alive--;const n=p.fn+' '+p.ln;sel=0;apply();sv();
show(`<h2 style="color:var(--rd)">Провал</h2><p>${n} — не убийца. Настоящий преступник ускользнул, а Мариша остаётся за решёткой. Но следствие можно возобновить: подозреваемый вычеркнут, проверьте улики ещё раз.</p><button onclick="$('ov').style.display='none'">Продолжить расследование</button>`)}};
let n0=5000;try{n0=+localStorage.getItem('kn_n')||5000}catch(_){}
init(n0);
