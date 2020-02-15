let i = 300;
let i1 = 600;
let m = 100;
let m1 = 0;
let game = document.getElementById('game');
let gameMag = document.getElementById('gameMag');
let panel = document.getElementById('panelMagic');
let infoMagic = document.getElementById('infoMagic');
let infoMagic1 = document.getElementById('infoMagic1');
let infoMagic2 = document.getElementById('infoMagic2');
let HP = document.getElementById('HP');
let MP = document.getElementById('MP');


function HPMP() {

    HP.innerHTML = ('<a class="HPMP"> У вас '+ i +' жизней </a> <a class="HPMP"> У троля '+ i1+' жизней </a>');
    MP.innerHTML = ('<a class="HPMP"> У вас '+ m +' маны &nbsp;&nbsp;</a> <a class="HPMP"> У троля '+ m1+' маны </a>');
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
        
function ataka() {
    if (i>0 && i1>0) {
        let r = Math.random();
        if (r>=0.75) {
            let z = Math.ceil(Math.random() * 100);
            let z1 = Math.ceil(Math.random() * 150);
                if (z>z1){
                    i1 -= z
                    HPMP();
                    game.innerHTML = ('Пробив защиту троля вы нанесли '+z+' урона');
                    gameMag.innerHTML = ('');
                    
                }
                else if (z<=z1){
                    i -= z
                    HPMP();
                    game.innerHTML = ('Троль блокировал '+z+' урона');
                    gameMag.innerHTML = ('');
                }
        }
        else if (r<0.75) {
            let z = Math.ceil(Math.random() * 80);
            let z1 = Math.ceil(Math.random() * 50);
            i -= z
            i1 -= z1
            HPMP();
            game.innerHTML = ('Вы нанесли ' +z1+ ' урона тролю <br> <br> Вам нанесли '+z+ ' урона'); 
            gameMag.innerHTML = ('');
    }
        }
    
    final()
            
     }

function block() {
    if (i>0 && i1>0) {
        let r = Math.random();
        if (r>=0.05) {
            let z = Math.ceil(Math.random() * 100);
            let z1 = Math.ceil(Math.random() * 90);
                if ( z>z1) {
                i -= z
                HPMP();
                gameMag.innerHTML = ('');
                game.innerHTML = ('Троль пробив блок нанес '+z+' урона');
            }
                else {
                i1 -= z
                HPMP();
                gameMag.innerHTML = ('');
                game.innerHTML = ('Вы блокировали '+z+' урона');
            }
    }

        else if (r<0.05) {
            gameMag.innerHTML = ('');
            game.innerHTML = ('Троль и вы заняли оборонительные стойки');
        }
    
    final()
    }
            
     }

function magic() {
    if (i>0 && i1>0 && m>0) {
            panelMagic.innerHTML = ('<button class="but" id="heal" onclick="heal()">Лечение</button> <button class="but" id="fire" onclick="fire()">Огонь</button> <button class="but" id="anti" onclick="anti()">Антимагия</button>');
            infoMagic.innerHTML =  ('<div><a class="inf"> Верятность срабатывания: 70%</a> <a class="inf"> Верятность срабатывания: 70% </a></div>')
            infoMagic1.innerHTML = ('<div><a class="inf">  Сила 25-75 </a> <a class="inf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Сила 100-200 </a></div>')
            infoMagic2.innerHTML = ('<div><a class="inf"> Требует маны: 50 </a> <a class="inf">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Требует маны: 100 </a></div>')
            let z = Math.ceil(Math.random() * 80);
            i -= z
            HPMP();
            game.innerHTML = ('Вы открыли книгу магии <p> Воспользовавшись этим троль нанес '+z+ ' урона'); 
            document.getElementById('magic').hidden = true;
        
        }
        
    }

function heal() {
    if (m>49) {
        let r = Math.random();
            if (r>=0.3){
                let z = Math.ceil(Math.random() * (75-25) + 25);
                i += z
                m -= 50
                HPMP();
                game.innerHTML = ('Удачно! Вы востановили '+z+' жизней');
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
            
function fire() {
        if (i>0 && i1>0 && m>99) {
            let r = Math.random();
            if (r>=0.3){
                let z = Math.ceil(Math.random() * (200-100) + 100);
                i1 -= z
                m -= 100
                HPMP();
                block();
                gameMag.innerHTML = ('Удачно! Огненым шаром вы нанесли ' +z+ ' урона тролю');
                }
            else {
                let z = Math.ceil(Math.random() * (200-100) + 100);
                i -= z
                m -= 100
                HPMP();
                block();
                gameMag.innerHTML = ('Неудачно! Огненым шаром вы нанесли ' +z+ ' урона себе');
            }

        
    }
    else {
        alert('Недостаточно маны!');
 
    }  
    final()
    }

function anti() {
        if (m>24 && m1>1) {
        let r = Math.random();
            if (r>=0.7){
                let z = Math.ceil(Math.random() * 50);
                m1 -= z
                m += z
                m -= 25
                HPMP();
                block();
                gameMag.innerHTML = ('Вы удачно прочитали заклинание и забрали '+z+' маны'); 
            }
        else {
            let z = Math.ceil(Math.random() * 50);
            m1 -= z
            m-= 25
               HPMP();
                block();
                gameMag.innerHTML = ('Вы неудачно прочитали заклинание, но смогли сжечь '+z+' маны противнику');

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

