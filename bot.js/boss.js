let HP_TR = [350, 400, 450, 500, 550,600];

import {hp_g, mp_g} from './hpmp.js';

let i = hp_g;
let m = mp_g;
let i1 = HP_TR[Math.floor(Math.random() * HP_TR.length)];
let m1 = 0;


function HPMP() {
    
    HP.innerHTML = ('<a class="HPMP"> У вас <strong>'+ i +'</strong> жизней </a> <a class="HPMP"> У орка <strong>'+ i1+'</strong> жизней </a>');
    MP.innerHTML = ('<a class="HPMP"> У вас <strong>'+ m +'</strong> маны &nbsp;&nbsp;</a> <a class="HPMP"> У орка <strong>'+ m1+'</strong> маны </a>');
}

HPMP();

document.getElementById('start').onclick = function(){
    
    let game = document.getElementById('game');
    document.querySelector('.panel').style.display = 'flex';
    document.getElementById('start').style.display = 'none';
    if (i1 <= 400){
        game.innerHTML = ('Вы вступили в бой со слабым орком! <br> Но врятли Вас это спасет!');
    }
    if ( i1 <= 500 && i1 > 400){
        game.innerHTML = ('Вы вступили в бой с орком! <br> Попробуй не умеретеь очень быстро!');
    }
    if (i1 >= 550){
        game.innerHTML = ('Вы вступили в бой с главарем орков! <br> Невозможно!');
    }
    

function final() {
    let dead = ('<button class="but" onclick="document.location.reload()">Начать заного</button>');
        if (i<=0) {
        let g = ('Вы убиты');
        document.querySelector('.gente').style.display = 'none';
        document.querySelector('.dead_g').style.display = 'block';
        document.querySelector('.panel').style.display = 'none';
        document.querySelector('.panelMagic').style.display = 'none';
        game.innerHTML = g;
        gameMag.innerHTML = dead;
        if (i1<=0) {
            document.querySelector('.gente').style.display = 'none';
            document.querySelector('.dead_g').style.display = 'block';
            document.querySelector('.troll').style.display = 'none';
            document.querySelector('.dead_g').style.display = 'block';
            document.querySelector('.panel').style.display = 'none';
            document.querySelector('.panelMagic').style.display = 'none';
            game.innerHTML = ('Вы оба погибли')
            gameMag.innerHTML = dead;
            }
        }
    else if (i1<=0) {
        let g = ('Орк убит');
        document.querySelector('.troll').style.display = 'none';
        document.querySelector('.dead_t').style.display = 'block';
        document.querySelector('.panel').style.display = 'none';
        document.querySelector('.panelMagic').style.display = 'none';
        game.innerHTML = g;
        gameMag.innerHTML = dead;         
}
}

HPMP();
        
document.getElementById('ataka').onclick = function () {
    if (i>0 && i1>0) {
        let r = Math.random();
        if (r>=0.75) {
            let z = Math.ceil(Math.random() * 100);
            let z1 = Math.ceil(Math.random() * 150);
                if (z>z1){
                    i1 -= z
                    HPMP();
                    game.innerHTML = ('Пробив защиту орка вы нанесли '+z+' урона');
                    gameMag.innerHTML = ('');
                    
                }
                else if (z<=z1){
                    i -= z
                    HPMP();
                    game.innerHTML = ('Орк блокировал '+z+' урона');
                    gameMag.innerHTML = ('');
                }
        }
        else if (r<0.75) {
            let z = Math.ceil(Math.random() * 80);
            let z1 = Math.ceil(Math.random() * 50);
            i -= z
            i1 -= z1
            HPMP();
            game.innerHTML = ('Вы нанесли ' +z1+ ' урона орку <br> <br> Вам нанесли '+z+ ' урона'); 
            gameMag.innerHTML = ('');
    };
        };
    
    final()
            
     };

     function block(){
         if (i>0 && i1>0) {
             let r = Math.random();
             if (r>=0.05) {
                 let z = Math.ceil(Math.random() * 100);
                 let z1 = Math.ceil(Math.random() * 90);
                     if ( z>z1) {
                     i -= z
                     HPMP();
                     gameMag.innerHTML = ('');
                     game.innerHTML = ('Орк пробив блок нанес '+z+' урона');
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
                 game.innerHTML = ('Орк и вы заняли оборонительные стойки');
             }
         
         final()
         }
                 

     };

     document.getElementById('block').onclick = function () {
        block();
     };

    document.getElementById('magic').onclick = function magic() {
    if (i>0 && i1>0 && m>0) {
            document.querySelector('.but_mag').style.display = 'flex';
            let z = Math.ceil(Math.random() * 80);
            i -= z
            HPMP();
            game.innerHTML = ('Вы открыли книгу магии <p> Воспользовавшись этим орк нанес '+z+ ' урона'); 
            document.getElementById('magic').hidden = true;
        
        }
        
    }

    document.getElementById('heal').onclick = function heal() {
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
            
document.getElementById('fire').onclick = function fire() {
        if (i>0 && i1>0 && m>99) {
            let r = Math.random();
            if (r>=0.3){
                let z = Math.ceil(Math.random() * (200-100) + 100);
                i1 -= z
                m -= 100
                HPMP();
                block();
                gameMag.innerHTML = ('Удачно! Огненым шаром вы нанесли ' +z+ ' урона орку');
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


}