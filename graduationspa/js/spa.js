//   "use strict";

  window.onhashchange=switchToStateFromURLHash;


  function switchToStateFromURLHash() {
    var URLHash=window.location.hash;


    let pageHTML = '';
    
    switch ( URLHash ) {
      case '#home':
        pageHTML=`<h3 onclick="switchToStartPage()">Стартовый экран</h3>`;
        break;
      case '#game':
        pageHTML=`    <div id="field">
        <div class="tapBoxleft tapBoxes" style="top:-560px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-810px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-1050px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-1160px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-1310px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-1520px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-1760px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-1950px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-2120px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-2480px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-2610px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-2790px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-3020px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-3180px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-3330px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-3500px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-3890px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-4100px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-4280px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-4430px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-4560px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-4800px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-5010px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-5250px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-5400px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-5550px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-5840px"></div>
        <div class="tapBoxleft tapBoxes" style="top:-6080px" id="final_box"></div>


        
<!-- === центр         -->

<div class="tapBoxCenter tapBoxes" style="top:-740px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-930px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-1100px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-1250px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-1490px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-1700px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-1890px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-2060px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-2220px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-2450px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-2540px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-2960px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-3140px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-3270px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-3630px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-3870px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-4050px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-4220px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-4430px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-4560px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-4620px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-4800px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-4860px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-5060px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-5170px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-5370px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-5490px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-5600px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-5780px"></div>
<div class="tapBoxCenter tapBoxes" style="top:-6020px"></div>


<!-- ====прав -->

<div class="tapBoxRight tapBoxes" style="top:-690px"></div>
<div class="tapBoxRight tapBoxes" style="top:-990px"></div>
<div class="tapBoxRight tapBoxes" style="top:-1220px"></div>
<div class="tapBoxRight tapBoxes" style="top:-1470px"></div>
<div class="tapBoxRight tapBoxes" style="top:-1650px"></div>
<div class="tapBoxRight tapBoxes" style="top:-2000px"></div>
<div class="tapBoxRight tapBoxes" style="top:-2180px"></div>
<div class="tapBoxRight tapBoxes" style="top:-2280px"></div>
<div class="tapBoxRight tapBoxes" style="top:-2530px"></div>
<div class="tapBoxRight tapBoxes" style="top:-2660px"></div>
<div class="tapBoxRight tapBoxes" style="top:-2900px"></div>
<div class="tapBoxRight tapBoxes" style="top:-3210px"></div>
<div class="tapBoxRight tapBoxes" style="top:-3740px"></div>
<div class="tapBoxRight tapBoxes" style="top:-3920px"></div>
<div class="tapBoxRight tapBoxes" style="top:-4160px"></div>
<div class="tapBoxRight tapBoxes" style="top:-4620px"></div>
<div class="tapBoxRight tapBoxes" style="top:-4860px"></div>
<div class="tapBoxRight tapBoxes" style="top:-5120px"></div>
<div class="tapBoxRight tapBoxes" style="top:-5460px"></div>
<div class="tapBoxRight tapBoxes" style="top:-5720px"></div>
<div class="tapBoxRight tapBoxes" style="top:-5970px"></div>
<div class="btnLeft"></div>
<div class="btnCenter"></div>
<div class="btnRigth"></div>
<div class="zoneScore" id="zoneScore">
    <ul>
        <li>
            <span>Score</span>
        </li>
        <li>
            <p id="howMuchScore">0</p> 
        </li>
    </ul>
    <ul class="scoreZoneCombo">
        <li id="minus1"><div>-1</div></li>
        <li id="plus1"><div>+1</div></li>
        <li id="plus3"><div>+3</div></li>
        <li id="plus7"><div>+7</div></li>
    </ul>
</div>
<div class="zoneButton" id="zoneButton">
    <ul class="setiitngButton">
        <li onclick="startGame()">Play</li>
        <li onclick="stop()">Stop</li>
        <li onclick="showCalibr()">Calibration</li>
    </ul>
</div>
<div class="zone" id="zone"></div>
<div id="testzone">
    <h2>КАЛИБРОВКА</h2>
    <p>Я <span style="text-decoration: underline;">уверен</span> , что нажимаю на кнопку под музыку, но нужный блок</p>
    <ul>
        <li><input type="radio" name="radioCalibr" value="plus coordinats">ещё выше синей зоны нажатия<img src="source/img/up.png" alt=""></li>
        <li><input type="radio" name="radioCalibr" value="minus ccordinats">уже ниже<img src="source/img/down.png" alt=""></li>
    </ul>
    Насколько <span style="text-decoration: underline;">примерно</span> пикселей сместить блок ближе к центру зоны?
    <input type="number" name="howMuchPx" value="1">
    <div onclick="calibr()"><span>ПРИМЕНИТЬ</span></div>
</div>
</div>

    <audio id="track_rock" src="source/music/gamemusic_hip.mp3"></audio>
    <audio id="sound_combo" src="source/music/sound_combo.mp3"></audio>
    `;
    const script = document.createElement('script');
    script.src = 'js/script.js';
    document.body.appendChild(script);
        break;
      case '#records':
        pageHTML="<h3>рекорды</h3>";
        break;
    //   case '#game-page':
    //     pageHTML+=`    <div id="field"></div>`;
    //     break;  
    //   case '#exit-page':
    //     pageHTML+="<h3>Выход</h3>";
    //     break;
    }
    document.getElementById('app').innerHTML=pageHTML;

  }

  function switchToState(newState) {
    location.hash=newState.pagename;
  }

  function switchToStartScreePage() {
    switchToState( { pagename:'home' } );
  }

  function switchToStartPage() {
    switchToState( { pagename:'game' } );
  }

  function switchToSettingsPage() {
    switchToState( { pagename:'records' } );
  }

  switchToStateFromURLHash();
  switchToStartScreePage();