let HP_TR = [250, 300, 350, 400, 450, 500];

import {hp_g, mp_g} from './hpmp.js';

let i = hp_g;
let m = mp_g;
let i1 = HP_TR[Math.floor(Math.random() * HP_TR.length)];
let m1 = 50;


function HPMP() {

    HP.innerHTML = ('<a class="HPMP"> У вас ' + i + ' жизней </a> <a class="HPMP"> У викинга ' + i1 + ' жизней </a>');
    MP.innerHTML = ('<a class="HPMP"> У вас ' + m + ' маны &nbsp;&nbsp;</a> <a class="HPMP"> У викинга ' + m1 + ' маны </a>');
}

HPMP();

document.getElementById('start').onclick = function () {

    let game = document.getElementById('game');
    document.querySelector('.panel').style.display = 'flex';
    document.getElementById('start').style.display = 'none';
    if (i1 <= 300) {
        game.innerHTML = ('Вы вступили в бой с викингом! <br> Стоп! ВЫ тоже чувствуете от него перегар?!');
    }
    if (i1 <= 400 && i1 > 300) {
        game.innerHTML = ('Вы вступили в бой с викингом! <br> Удачи!');
    }
    if (i1 >= 450) {
        game.innerHTML = ('Вы вступили в бой с сильным викингом! <br> Да ты надоел блокировать!');
    }

    function final() {
        let dead = ('<button class="but" onclick="document.location.reload()">Начать заного</button>');
        if (i <= 0) {
            let g = ('Вы убиты');
            document.querySelector('.gente').style.display = 'none';
            document.querySelector('.dead_g').style.display = 'block';
            document.querySelector('.panel').style.display = 'none';
            document.querySelector('.panelMagic').style.display = 'none';
            game.innerHTML = g;
            gameMag.innerHTML = dead;
            if (i1 <= 0) {
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
        else if (i1 <= 0) {
            let g = ('Викинг убит');
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
        if (i > 0 && i1 > 0) {
            let r = Math.random();
            if (r >= 0.1) {
                let z = Math.ceil(Math.random() * 80);
                let z1 = Math.ceil(Math.random() * 80);
                if (z > z1) {
                    i1 -= z
                    HPMP();
                    game.innerHTML = ('Пробив защиту викинга вы нанесли <strong>' + z + '</strong> урона');
                    gameMag.innerHTML = ('');

                }
                else if (z <= z1) {
                    i -= z
                    HPMP();
                    game.innerHTML = ('Викинг блокировал <strong>' + z + '</strong> урона');
                    gameMag.innerHTML = ('');
                }
            }
            else if (r < 0.1) {
                let z = Math.ceil(Math.random() * 30);
                let z1 = Math.ceil(Math.random() * 50);
                i -= z
                i1 -= z1
                HPMP();
                game.innerHTML = ('Вы нанесли ' + z1 + ' урона викингу <br> <br> Вам нанесли <strong>' + z + '</strong> урона');
                gameMag.innerHTML = ('');
            }
        }

        final()

    };

    function block() {
        if (i > 0 && i1 > 0) {
            let r = Math.random();
            if (r <= 0.3) {
                let z = Math.ceil(Math.random() * 80);
                let z1 = Math.ceil(Math.random() * 80);
                if (z > z1) {
                    i -= z
                    HPMP();
                    gameMag.innerHTML = ('');
                    game.innerHTML = ('Викинг пробив блок нанес <strong>' + z + '</strong> урона');
                }
                else {
                    i1 -= z
                    HPMP();
                    gameMag.innerHTML = ('');
                    game.innerHTML = ('Вы блокировали <strong>' + z + '</strong> урона');
                }
            }

            else if (r > 0.3) {
                gameMag.innerHTML = ('');
                game.innerHTML = ('Викинг и вы заняли оборонительные стойки');
            }

            final()
        }


    };

    document.getElementById('block').onclick = function () {
        block();
    };

    document.getElementById('magic').onclick = function magic() {
        if (i > 0 && i1 > 0 && m > 0 && m1 > 0) {
            document.querySelector('.but_mag').style.display = 'flex';
            let z = Math.ceil(Math.random() * 30);
            i -= z
            HPMP();
            game.innerHTML = ('Вы открыли книгу магии <p> Воспользовавшись этим викинг нанес <strong>' + z + '</strong> урона');
            document.getElementById('magic').hidden = true;

        }

    }

    document.getElementById('heal').onclick = function heal() {
        if (m > 49) {
            let r = Math.random();
            if (r >= 0.5 && m1 < 49) {
                let z = Math.ceil(Math.random() * 50);
                i += z
                m -= 50
                HPMP();
                game.innerHTML = ('Удачно! Вы востановили <strong>' + z + '</strong> жизней');
                gameMag.innerHTML = ('');
            }
            if (r >= 0.5 && m1 > 49) {
                let r = Math.random();
                if (r >= 0.5) {
                    let z = Math.ceil(Math.random() * 50);
                    i1 += z
                    m -= 50
                    m1 -= 50
                    HPMP();
                    game.innerHTML = ('Викинг применил антимагию и забрал ваше востановление <strong>' + z + '</strong> жизней на себя!');
                    gameMag.innerHTML = ('');
                }
                else {
                    let z = Math.ceil(Math.random() * 50);
                    i += z
                    m -= 50
                    m1 -= 50
                    HPMP();
                    game.innerHTML = ('Викинг применил антимагию, но вы смогли удачно востановить <strong>' + z + '</strong> жизней');
                    gameMag.innerHTML = ('');
                }
            }
            if (r < 0.5) {
                m -= 50
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
        if (i > 0 && i1 > 0 && m > 99) {
            let r = Math.random();
            if (r >= 0.7 && m1 < 49) {
                let z = Math.ceil(Math.random() * (150 - 50) + 50);
                i1 -= z
                m -= 100
                HPMP();
                block();
                gameMag.innerHTML = ('Удачно! Огненым шаром вы нанесли <strong>' + z + '</strong> урона викингу');
            }
            if (r >= 0.7 && m1 > 49) {
                let r = Math.random();
                if (r >= 0.5) {
                    let z = Math.ceil(Math.random() * (150 - 50) + 50);
                    i -= z
                    m -= 100
                    m1 -= 50
                    HPMP();
                    game.innerHTML = (" ");
                    gameMag.innerHTML = ('Викинг применил антимагию и отразил ваш огненый шар, вы получили <strong>' + z + '</strong> урона!');
                }
                else {
                    let z = Math.ceil(Math.random() * (150 - 50) + 50);
                    i1 -= z
                    m -= 100
                    m1 -= 50
                    HPMP();
                    game.innerHTML = (" ");
                    gameMag.innerHTML = ('Викинг применил неудачно антимагию и вы нанесли <strong>' + z + '</strong> урона огненым шаром викингу');
                }
            }
            if (r < 0.7) {
                let z = Math.ceil(Math.random() * (150 - 50) + 50);
                i -= z
                m -= 100
                HPMP();
                block();
                gameMag.innerHTML = ('Неудачно! Огненым шаром вы нанесли <strong>' + z + '</strong> урона себе');
            }


        }
        else {
            alert('Недостаточно маны!');

        }
        final()
    }

    document.getElementById('anti').onclick = function anti() {
        if (m > 24 && m1 > 1) {
            let r = Math.random();
            if (r >= 0.7) {
                let z = Math.ceil(Math.random() * 50);
                m1 -= z
                m += z
                m -= 25
                HPMP();
                block();
                gameMag.innerHTML = ('Вы удачно прочитали заклинание и забрали <strong>' + z + '</strong> маны');
            }
            else {
                let z = Math.ceil(Math.random() * 50);
                m1 -= z
                m -= 25
                HPMP();
                block();
                gameMag.innerHTML = ('Вы неудачно прочитали заклинание, но смогли сжечь <strong>' + z + '</strong> маны противнику');

            }
        }
        else if (m1 < 1) {
            alert('У противника недостаточно маны!');

        }

        else if (m < 1) {
            alert('Недостаточно маны!');

        }
    }

    
};
