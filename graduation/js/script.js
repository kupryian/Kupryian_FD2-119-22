    const field = document.getElementById("field");
    
    const tapBoxLeft = document.getElementsByClassName("tapBoxleft");
    const tapBoxCenter = document.getElementsByClassName("tapBoxCenter");
    const tapBoxRight = document.getElementsByClassName("tapBoxRight");
    const finalBox = document.getElementById("final_box");

    let score = 0;
    let comboScore = 0;

    let timer;

    //музыка
    const audio = document.getElementById("track_rock");
    audio.loop = false;
    const soundCombo = document.getElementById("sound_combo");
    soundCombo.loop = false;
  
//=====вспомогательные функции

    //=====функция смены координаты у клавиши

    function boxChangeCoor(tapBoxSide) {
        for (let i = 0; i< tapBoxSide.length; i++) {
            tapBoxSide[i].style.top = parseInt(tapBoxSide[i].style.top.split("px").join("")) +3 +"px";

            if ((+tapBoxSide[i].style.top.split("px").join("") ) == 540 && tapBoxSide[i].style.backgroundColor !== "green"  ) {
                score -= 1;
                comboScore = 0;
            }
            
            if (comboScore == 3 ) {
                soundCombo.play();
                tapBoxSide[i].style.boxShadow = 'rgb(255, 193, 7) 0px 0px 14px 6px';
            } else if (comboScore == 7 ) {
                soundCombo.play();
                tapBoxSide[i].style.boxShadow = 'rgb(255, 106, 7) 0px 0px 14px 6px';

            } else if (comboScore == 0 ) {
                tapBoxSide[i].style.boxShadow = "none";

            } else {}
        }
    }

    //=== стоп игра

    function stop() {
        audio.pause();
        clearInterval(timer);
    }
 
//-------начало основной программы

    function startGame () {
        timer=setInterval(moveBox,30);

        function moveBox () {

            audio.play();

            // console.log(score);

            boxChangeCoor (tapBoxLeft);
            boxChangeCoor (tapBoxCenter);
            boxChangeCoor (tapBoxRight);

            if (finalBox.style.top.split("px").join("") > 700) {
                stop();
            }
        }
    }


    // логика действий по нажатию на клавишу

    function keyPres(tapBoxSide) {
        for (let i =0; i< tapBoxSide.length; i++) {

            if ( (+tapBoxSide[i].style.top.split("px").join("") ) > 450 && (+tapBoxSide[i].style.top.split("px").join("") ) <470 ) {     
                tapBoxSide[i].style.backgroundColor = "green";

                if (comboScore >=7 ) {
                    score += 7;  
                } else if (comboScore >= 3) {
                    score += 3;
                } else {
                    score += 1;
                }
                
                comboScore += 1;
                   
            } else if ( (+tapBoxSide[i].style.top.split("px").join("") ) > 410 && (+tapBoxSide[i].style.top.split("px").join("") ) <449 ) {     
                tapBoxSide[i].style.backgroundColor = "red";
                comboScore = 0;
                score -= 1;
            } else if ( (+tapBoxSide[i].style.top.split("px").join("") ) > 471 && (+tapBoxSide[i].style.top.split("px").join("") ) <510 ) {     
                tapBoxSide[i].style.backgroundColor = "red";
                comboScore = 0;
                score -= 1;
            };

        };
    }

    //слушатель события нажатия клавиш

    window.addEventListener("keydown", e => {
        switch (e.keyCode) {
            case 37: keyPres(tapBoxLeft);
            break;

            case 40: keyPres(tapBoxCenter);
            break;

            case 39: keyPres(tapBoxRight);
            break;

            case 32: stop();
            break;
        }
    } );
