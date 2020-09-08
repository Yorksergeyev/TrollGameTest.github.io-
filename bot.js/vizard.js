let HP_TR = [ 100, 200,300];
let MP_TR = [505, 605, 705, 805, 905,1005];

let hp_g = 300;
let mp_g = 100;

let i = hp_g;
let m = mp_g;
let i1 = HP_TR[Math.floor(Math.random() * HP_TR.length)];
let m1 = MP_TR[Math.floor(Math.random() * HP_TR.length)]; 

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
        let g = ('Ведьма убита');
        document.querySelector('.troll').style.display = 'none';
        document.querySelector('.dead_t').style.display = 'block';
        document.querySelector('.panel').style.display = 'none';
        document.querySelector('.panelMagic').style.display = 'none';
        game.innerHTML = g;
        gameMag.innerHTML = dead;         
}
};

function HPMP() {
    
    HP.innerHTML = ('<a class="HPMP"> У вас <strong>'+ i +'</strong> жизней </a> <a class="HPMP"> У ведьмы <strong>'+ i1+'</strong> жизней </a>');
    MP.innerHTML = ('<a class="HPMP"> У вас <strong>'+ m +'</strong> маны &nbsp;&nbsp;</a> <a class="HPMP"> У ведьмы <strong>'+ m1+'</strong> маны </a>');
}
HPMP();

document.getElementById('start').onclick = function game(){
    
    let game = document.getElementById('game');
    document.querySelector('.panel').style.display = 'flex';
    document.getElementById('start').style.display = 'none';
    
    if (i1 == 100){
        game.innerHTML = ('Вы вступили в бой со слабой ведьмой! <br> Не дайте себя окалдовать!');
    }
    if ( i1 == 200){
        game.innerHTML = ('Вы вступили в бой с ведьмой! <br> Будьте осторожны!');
    }
    if (i1 == 300){
        game.innerHTML = ('Вы вступили в бой с сильной ведьмой! <br> Где тут кнопка антимагии?!');
    }
    

HPMP();
        
document.getElementById('ataka').onclick = function() {
    if (i>0 && i1>0) {
        if (m1 >= 25) {
            let mag = Math.ceil(Math.random() * 3);
            if (mag == 1 && m1 >= 100){
                let z = Math.ceil(Math.random() * 100);
                    if (z>50){
                        i1 -= z
                        m1 -= 100
                        HPMP();
                        game.innerHTML = ('Пробив защиту ведьмы вы нанесли <strong>'+z+'</strong> урона и сбили огненный шар');
                        gameMag.innerHTML = ('');
                        
                    }
                    else if (z<=50){
                        let fire = Math.ceil(Math.random() * (200-100) + 100);
                        i -= z+fire
                        m1 -= 150
                        HPMP();
                        game.innerHTML = ('Ведьма блокировала <strong>'+z+'</strong> урона и применила <br> огненный шар нанеся <strong>'+fire+'</strong> урона!');
                        gameMag.innerHTML = ('');
                    }
            }
            else if (mag == 2 && m1 >= 25){
                let z = Math.ceil(Math.random() * 100);
                    if (z>50){
                        i1 -= z
                        m1 -= 25
                        HPMP();
                        game.innerHTML = ('Пробив защиту ведьмы вы нанесли <strong>'+z+'</strong> урона и сбили закленание магического щита!');
                        gameMag.innerHTML = ('');
                        
                    }
                    else if (z<=50){
                        let fire = Math.ceil(Math.random() * (95-45) + 45);
                        i -= z
                        i1 += fire
                        m1 -= 25
                        HPMP();
                        game.innerHTML = ('Ведьма блокировала <strong>'+z+'</strong> урона и применила магический щит восстановив <strong>'+fire+'</strong> жизней!');
                        gameMag.innerHTML = ('');
                    }
            }
            else if (mag == 3 && m1 >= 50){
                let z = Math.ceil(Math.random() * 100);
                    if (z>50){
                        i1 -= z
                        m1 -= 50
                        HPMP();
                        game.innerHTML = ('Пробив защиту ведьмы вы нанесли <strong>'+z+'</strong> урона и сбили удар ведьмы');
                        gameMag.innerHTML = ('');
                        
                    }
                    else if (z<50){
                        let fire = Math.ceil(Math.random() * (110-50) + 50);
                        i -= z
                        i1 += fire
                        m1 -= 50
                        HPMP();
                        game.innerHTML = ('Ведьма блокировала <strong>'+z+'</strong> урона и ударом ведьмы нанесла <strong>'+fire+'</strong> урона! <br> <br> Ведьма восcтановила <strong>'+fire+'</strong> жизней');
                        gameMag.innerHTML = ('');
                    }
            }
            else {
                let z = Math.ceil(Math.random() * 100);
                if (z>50){
                    i1 -= z
                    m1 -= 25
                    HPMP();
                    game.innerHTML = ('Пробив защиту ведьмы вы нанесли <strong>'+z+'</strong> урона и сбили закленание магического щита!');
                    gameMag.innerHTML = ('');
                    
                }
                else if (z<=50){
                    let fire = Math.ceil(Math.random() * (95-50) + 50);
                    i -= z
                    i1 += fire
                    m1 -= 25
                    HPMP();
                    game.innerHTML = ('Ведьма блокировала <strong>'+z+'</strong> урона и применила магический щит восстановив <strong>'+fire+'</strong> жизней!');
                    gameMag.innerHTML = ('');
                }
            }
        }
                else{
                    let z = Math.ceil(Math.random() * 100);
                    let z1 = Math.ceil(Math.random() * 100);
                        if (z>z1){
                            i1 -= z
                            m1 += 25
                            HPMP();
                            game.innerHTML = ('Пробив защиту ведьмы вы нанесли <strong>'+z+'</strong> урона');
                            gameMag.innerHTML = ('');
                            
                        }
                        else if (z<=z1){
                            i -= z
                            m1 += 25
                            HPMP();
                            game.innerHTML = ('Ведьма блокировала <strong>'+z+'</strong> урона');
                            gameMag.innerHTML = ('');
                        }
                }
        }
    
    final()
            
     };

     function block(){
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
     };

     document.getElementById('block').onclick = function() {
        block(); 
     };


     document.getElementById('magic').onclick = function () {
    if (i>0 && i1>0 && m>0 && m1>5) {
            m1 -= 5 
            HPMP();
            game.innerHTML = ('Ведьма сожгла вашу книгу магии! <br> <br> Какой ужас!'); 
            document.getElementById('magic').hidden = true; 
        
        };
        
    };


};