let i = 300;
let i1 = 300;
let m = 100;
let m1 = 100;
let game = document.getElementById('game');
let gameMag = document.getElementById('gameMag');
let panel = document.getElementById('panelMagic');
let infoMagic = document.getElementById('infoMagic');
let infoMagic1 = document.getElementById('infoMagic1');
let infoMagic2 = document.getElementById('infoMagic2');
let HP = document.getElementById('HP');
let MP = document.getElementById('MP');
function HPMP() {

    HP.innerHTML = ('<a class="HPMP"> У вас <strong>'+ i +'</strong> жизней </a> <a class="HPMP"> У троля <strong>'+ i1+'</strong> жизней </a>');
    MP.innerHTML = ('<a class="HPMP"> У вас <strong>'+ m +'</strong> маны &nbsp;&nbsp;</a> <a class="HPMP"> У троля <strong>'+ m1+'</strong> маны </a>');
}


function final() {
        if (i<=0) {
        let g = ('Вы убиты');
        game.innerHTML = g
        if (i1<=0) {
            game.innerHTML = ('Вы оба погибли')
            gameMag.innerHTML = ('');
            }
        }
    else if (i1<=0) {
        let g = ('Троль убит');
        game.innerHTML = g
        gameMag.innerHTML = ('');         
}
}

HPMP();
        
document.getElementById('ataka').onclick = function ataka() {
    if (i>0 && i1>0) {
        let r = Math.random();
        let r1 = Math.random();
        if (r>=r1) {
            let z = Math.ceil(Math.random() * 100);
            let z1 = Math.ceil(Math.random() * 100);
                if (z>z1){
                    i1 -= z
                    HPMP();
                    game.innerHTML = ('Пробив защиту троля вы нанесли <strong>'+z+'</strong> урона');
                    gameMag.innerHTML = ('');
                    
                }
                else if (z<=z1){
                    i -= z
                    HPMP();
                    game.innerHTML = ('Троль блокировал <strong>'+z+'</strong> урона');
                    gameMag.innerHTML = ('');
                }
        }
        else if (r<r1) {
            let z = Math.ceil(Math.random() * 50);
            let z1 = Math.ceil(Math.random() * 50);
            i -= z
            i1 -= z1
            HPMP();
            game.innerHTML = ('Вы нанесли <strong>' +z1+ '</strong> урона тролю <br> <br> Вам нанесли <strong>'+z+ '</strong> урона'); 
            gameMag.innerHTML = ('');
    }
        }
    
    final()
            
     }

     document.getElementById('block').onclick = function block() {
    if (i>0 && i1>0) {
        let r = Math.random();
        if (r>=0.1) {
            let z = Math.ceil(Math.random() * 100);
            let z1 = Math.ceil(Math.random() * 100);
                if ( z>z1) {
                i -= z
                HPMP();
                gameMag.innerHTML = ('');
                game.innerHTML = ('Троль пробив блок нанес <strong>'+z+'</strong> урона');
            }
                else {
                i1 -= z
                HPMP();
                gameMag.innerHTML = ('');
                game.innerHTML = ('Вы блокировали <strong>'+z+'</strong> урона');
            }
    }

        else if (r<0.1) {
            gameMag.innerHTML = ('');
            game.innerHTML = ('Троль и вы заняли оборонительные стойки');
        }
    
    final()
    }
            
     }

     document.getElementById('magic').onclick = function magic() {
    if (i>0 && i1>0 && m>0 && m1>0) {
            document.querySelector('.but_mag').style.display = 'flex';
            infoMagic.innerHTML =  ('<div><a class="inf"> Верятность срабатывания: 50%</a> <a class="inf"> Верятность срабатывания: 30% </a></div>')
            infoMagic1.innerHTML = ('<div><a class="inf">  Сила 1-50 </a> <a class="inf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Сила 50-150 </a></div>')
            infoMagic2.innerHTML = ('<div><a class="inf"> Требует маны: 50 </a> <a class="inf">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Требует маны: 100 </a></div>')
            let z = Math.ceil(Math.random() * 50);
            i -= z
            HPMP();
            game.innerHTML = ('Вы открыли книгу магии <p> Воспользовавшись этим троль нанес <strong>'+z+ ' </strong> урона'); 
            document.getElementById('magic').hidden = true;
        
        }
        
    }

    document.getElementById('heal').onclick = function heal() {
    if (m>49) {
        let r = Math.random();
            if (r>=0.5){
                let z = Math.ceil(Math.random() * 50);
                i += z
                m -= 50
                HPMP();
                game.innerHTML = ('Удачно! Вы востановили <strong>'+z+'</strong> жизней');
                gameMag.innerHTML = ('');  
            }
        else {
            m-= 50
               HPMP();
                game.innerHTML = ('Неудачно!');
                gameMag.innerHTML = ('');
        }

    }
    else {
        alert('Недостаточно маны!');
 
    }
}
            
document.getElementById('fire').onclick = function fire() {
        if (i>0 && i1>0 && m>99 && m1>99) {
            let r = Math.random();
            if (r>=0.7){
                let z = Math.ceil(Math.random() * (150-50) + 50);
                i1 -= z
                m -= 100
                HPMP();
                block();
                gameMag.innerHTML = ('Удачно! Огненым шаром вы нанесли <strong>' +z+ '</strong> урона тролю');
                }
            else {
                let z = Math.ceil(Math.random() * (150-50) + 50);
                i -= z
                m -= 100
                HPMP();
                block();
                gameMag.innerHTML = ('Неудачно! Огненым шаром вы нанесли <strong>' +z+ '</strong> урона себе');
            }

        
    }
    else {
        alert('Недостаточно маны!');
 
    }  
    final()
    }

    document.getElementById('anti').onclick = function anti() {
        if (m>24 && m1>1) {
        let r = Math.random();
            if (r>=0.7){
                let z = Math.ceil(Math.random() * 50);
                m1 -= z
                m += z
                m -= 25
                HPMP();
                block();
                gameMag.innerHTML = ('Вы удачно прочитали заклинание и забрали <strong>'  +z+  '</strong> маны'); 
            }
        else {
            let z = Math.ceil(Math.random() * 50);
            m1 -= z
            m-= 25
               HPMP();
                block();
                gameMag.innerHTML = ('Вы неудачно прочитали заклинание, но смогли сжечь <strong>' +z+ '</strong> маны противнику');

    }
        }
        else if (m1<1) {
        alert('У противника недостаточно маны!');
 
    }
        
    else if (m<1) {
        alert('Недостаточно маны!');
 
    }
        }

function error() {
    alert('В разработке!');
}

