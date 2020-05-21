// JavaScript source code
(function () {
    'use strict';

    //要素の取得
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');

    //メンバ
    var startTime;          //開始した時間
    var isStarted = false;  //ゲームが始まったらtrue

    //start と、stop が押されたときのイベントを設定
    start.addEventListener('click', function () {
        if (isStarted) {
            return;
        }
        isStarted = true;               //ゲーム開始フラグを「開始中」
        result.textContent = "0.000";   //初期表示に設定
        startTime = Date.now();         //開始時刻を取得->メンバへ
        start.className = 'push';       //#startに'push'スタイルを適用（ボタン↓）
        stop.className = '';            //#stopのスタイルを解除（ボタン↑）
        result.className = 'standby';   //スタンバイ表示
    });

    stop.addEventListener('click', function () {
        if (isStarted === false) {
            return;
        }
        isStarted = false;
        var elapsedTime;    //開始時間と終了時間の差
        var diff;           //5秒との差
        elapsedTime = (Date.now() - startTime) / 1000;
        result.textContent = elapsedTime.toFixed(3);
        start.className = '';           //ボタン↓
        stop.className = 'push';        //ボタン↑
        result.className = '';          //css初期設定を表示

        diff = elapsedTime - 5;         //5秒からの差を変数に格納
        if (Math.abs(diff) < 1) {       //絶対値が1秒以下の場合       
            result.textContent = elapsedTime;   //秒数を表示
            result.className = 'perfect';       //OKの背景色
        }
        else {
            result.textContent = elapsedTime;   //秒数を表示
        }
    });
})();