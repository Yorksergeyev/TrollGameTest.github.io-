let HP_TR = [150, 200, 250, 300, 350,400]; // Рандом жизни врага


import {hp_g, mp_g, atk_g} from './hpmp.js'; // Жизни главного героя

let i = hp_g;
let m = mp_g;
let a_g = atk_g; 
let i1 = HP_TR[Math.floor(Math.random() * HP_TR.length)];
let m1 = 100; // Мана врага

let raund = 0;


// Финал игры
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
            document.querySelector('.dead_t').style.display = 'block';
            document.querySelector('.panel').style.display = 'none';
            document.querySelector('.panelMagic').style.display = 'none';
            game.innerHTML = ('Вы оба погибли')
            gameMag.innerHTML = dead;
            }
        }
    else if (i1<=0) {
        let g = ('Троль убит');
        document.querySelector('.troll').style.display = 'none';
        document.querySelector('.dead_t').style.display = 'block';
        document.querySelector('.panel').style.display = 'none';
        document.querySelector('.panelMagic').style.display = 'none';
        game.innerHTML = g;
        gameMag.innerHTML = dead;         
}
};


// Отображение актуальной жизней и маны
function HPMP() {
    
    HP.innerHTML = ('<a class="HPMP"> У вас <strong>'+ i +'</strong> жизней </a> <a class="HPMP"> У троля <strong>'+ i1+'</strong> жизней </a>');
    MP.innerHTML = ('<a class="HPMP"> У вас <strong>'+ m +'</strong> маны &nbsp;&nbsp;</a> <a class="HPMP"> У троля <strong>'+ m1+'</strong> маны </a>');
}
HPMP();

//Начало игры
document.getElementById('start').onclick = function game(){
    
    let game = document.getElementById('game');
    document.querySelector('.panel').style.display = 'flex';
    document.getElementById('start').style.display = 'none';
    
    if (i1 <= 200){
        game.innerHTML = ('Вы вступили в бой со слабым троллем! <br> И ты правда будешь его бить?!');
    }
    if ( i1 <= 300 && i1 > 200){
        game.innerHTML = ('Вы вступили в бой с троллем! <br> Удачи!');
    }
    if (i1 >= 350){
        game.innerHTML = ('Вы вступили в бой с сильным троллем! <br> Не обижайся если не получиться с первой попытки!');
    }
    

HPMP();
    

// Атака
document.getElementById('ataka').onclick = function() {
    if (i>0 && i1>0) {
        raund += 1
        // Мини рандом для того что бы узнать что делает враг, блокирует или атакует
        let r = Math.random();
        let r1 = Math.random();
        // Враг блокирует удар
        if (r>=r1) {
            // Вероятность для определения пробития или удар в блок
            let z = Math.ceil(Math.random() * 100);
            let z1 = Math.ceil(Math.random() * 100);
                if (z>z1){
                    z += a_g
                    i1 -= z
                    HPMP();
                    game.innerHTML = ('Пробив защиту троля вы нанесли <strong>'+z+'</strong> урона');
                    gameMag.innerHTML = ('');
                    alpha.insertAdjacentHTML('afterend', '<p>Пробив защиту троля вы нанесли <strong>'+z+'</strong> урона</p>');
                    alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
                    
                }
                else if (z<=z1){
                    z += a_g
                    i -= z
                    HPMP();
                    game.innerHTML = ('Троль блокировал <strong>'+z+'</strong> урона');
                    gameMag.innerHTML = ('');
                    alpha.insertAdjacentHTML('afterend', '<p>Троль блокировал <strong>'+z+'</strong> урона</p>');
                    alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
                }
        }
        // Враг и вы бьете друг друга
        else if (r<r1) {
            let z = Math.ceil(Math.random() * 50);
            let z1 = Math.ceil(Math.random() * 50);
            z += a_g
            i -= z
            i1 -= z1
            HPMP();
            game.innerHTML = ('Вы нанесли <strong>' +z1+ '</strong> урона тролю <br> <br> Вам нанесли <strong>'+z+ '</strong> урона'); 
            gameMag.innerHTML = ('');
            alpha.insertAdjacentHTML('afterend', '<p>Вы нанесли <strong>' +z1+ '</strong> урона тролю <br> <br> Вам нанесли <strong>'+z+ '</strong> урона</p>');
            alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
    }
        }
    
    final() //  Функция финала при смерти одного из игроков
            
     };

     // Функция блока 
     function block(){
        raund += 1
        if (i>0 && i1>0) {
            // Вероятность того что враг займет оборону
            let r = Math.random();
            if (r>=0.1) {
                // Вероятность что вы пробьете блок или нет
                let z = Math.ceil(Math.random() * 100);
                let z1 = Math.ceil(Math.random() * 100);
                    if ( z>z1) {
                    z += a_g
                    i -= z
                    HPMP();
                    gameMag.innerHTML = ('');
                    game.innerHTML = ('Троль пробив блок нанес <strong>'+z+'</strong> урона');
                    alpha.insertAdjacentHTML('afterend', '<p>Троль пробив блок нанес <strong>'+z+'</strong> урона</p>');
                    alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
                }
                    else {
                    z += a_g
                    i1 -= z
                    HPMP();
                    gameMag.innerHTML = ('');
                    game.innerHTML = ('Вы блокировали <strong>'+z+'</strong> урона');
                    alpha.insertAdjacentHTML('afterend', '<p>Вы блокировали <strong>'+z+'</strong> урона</p>');
                    alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
                }
        }
            // Враг выбрал блок
            else if (r<0.1) {
                gameMag.innerHTML = ('');
                game.innerHTML = ('Троль и вы заняли оборонительные стойки');
                alpha.insertAdjacentHTML('afterend', '<p>Троль и вы заняли оборонительные стойки</p>');
                alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
            }
        
        final()
        }
     };

     // Нажатие кнопки блок
     document.getElementById('block').onclick = function() {
        block(); 
     };


    // Нажатие кнопки книга магии
     document.getElementById('magic').onclick = function () {
    if (i>0 && i1>0 && m>0 && m1>0) {
        raund += 1
            document.querySelector('.but_mag').style.display = 'flex';
            let z = Math.ceil(Math.random() * 50);
            i -= z
            HPMP();
            game.innerHTML = ('Вы открыли книгу магии <p> Воспользовавшись этим троль нанес <strong>'+z+ ' </strong> урона'); 
            document.getElementById('magic').hidden = true; 
            alpha.insertAdjacentHTML('afterend', '<p>Вы открыли книгу магии <p> Воспользовавшись этим троль нанес <strong>'+z+ ' </strong> урона</p>');
            alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
        
        };
        
    };


    // Магия восстановления жизни
    document.getElementById('heal').onclick = function heal() {
    if (m>49) {
        raund += 1
        let r = Math.random(); // Вероятность того что магия не сработает
            if (r>=0.5){
                let z = Math.ceil(Math.random() * 50);
                i += z
                m -= 50
                HPMP();
                game.innerHTML = ('Удачно! Вы востановили <strong>'+z+'</strong> жизней');
                gameMag.innerHTML = ('');  
                alpha.insertAdjacentHTML('afterend', '<p>Удачно! Вы востановили <strong>'+z+'</strong> жизней</p>');
                alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
            }
        else {
            m-= 50
               HPMP();
                game.innerHTML = ('Неудачно!');
                gameMag.innerHTML = ('');
                alpha.insertAdjacentHTML('afterend', '<p>Неудачно!</p>');
                alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
        }

    }
    else {
        alert('Недостаточно маны!');
 
    }
}
      
// Огненный шар
document.getElementById('fire').onclick = function fire() {
        if (i>0 && i1>0 && m>99 && m1>99) {
            raund += 1
            let r = Math.random(); // Вероятность того что магия не сработает
            if (r>=0.7){
                let z = Math.ceil(Math.random() * (150-50) + 50);
                i1 -= z
                m -= 100
                HPMP();
                block();
                gameMag.innerHTML = ('Удачно! Огненым шаром вы нанесли <strong>' +z+ '</strong> урона тролю');
                alpha.insertAdjacentHTML('afterend', '<p>Удачно! Огненым шаром вы нанесли <strong>' +z+ '</strong> урона тролю</p>');
                alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
                }
            else {
                let z = Math.ceil(Math.random() * (150-50) + 50);
                i -= z
                m -= 100
                HPMP();
                block();
                gameMag.innerHTML = ('Неудачно! Огненым шаром вы нанесли <strong>' +z+ '</strong> урона себе');
                alpha.insertAdjacentHTML('afterend', '<p>Неудачно! Огненым шаром вы нанесли <strong>' +z+ '</strong> урона себе</p>');
                alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
            }

        
    }
    else {
        alert('Недостаточно маны!');
 
    }  
    final()
    }

    // Антимагия
    document.getElementById('anti').onclick = function anti() {
        if (m>24 && m1>1) {
        raund += 1
        let r = Math.random(); // Вероятность того что магия не сработает
            if (r>=0.7){
                let z = Math.ceil(Math.random() * 50);
                m1 -= z
                m += z
                m -= 25
                HPMP();
                block();
                gameMag.innerHTML = ('Вы удачно прочитали заклинание и забрали <strong>'  +z+  '</strong> маны'); 
                alpha.insertAdjacentHTML('afterend', '<p>Вы удачно прочитали заклинание и забрали <strong>'  +z+  '</strong> маны</p>');
                alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');
            }
        else {
            let z = Math.ceil(Math.random() * 50);
            m1 -= z
            m-= 25
               HPMP();
                block();
                gameMag.innerHTML = ('Вы неудачно прочитали заклинание, но смогли сжечь <strong>' +z+ '</strong> маны противнику');
                alpha.insertAdjacentHTML('afterend', '<p>Вы неудачно прочитали заклинание, но смогли сжечь <strong>' +z+ '</strong> маны противнику</p>');
                alpha.insertAdjacentHTML('afterend', '<strong>Раунд '+raund+'</strong>');

    }
        }
        else if (m1<1) {
        alert('У противника недостаточно маны!');
 
    }
        
    else if (m<1) {
        alert('Недостаточно маны!');
 
    }
        }



};

