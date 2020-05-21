// JavaScript source code
(function () {
    'use strict';

    //�v�f�̎擾
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');

    //�����o
    var startTime;          //�J�n��������
    var isStarted = false;  //�Q�[�����n�܂�����true

    //start �ƁAstop �������ꂽ�Ƃ��̃C�x���g��ݒ�
    start.addEventListener('click', function () {
        if (isStarted) {
            return;
        }
        isStarted = true;               //�Q�[���J�n�t���O���u�J�n���v
        result.textContent = "0.000";   //�����\���ɐݒ�
        startTime = Date.now();         //�J�n�������擾->�����o��
        start.className = 'push';       //#start��'push'�X�^�C����K�p�i�{�^�����j
        stop.className = '';            //#stop�̃X�^�C���������i�{�^�����j
        result.className = 'standby';   //�X�^���o�C�\��
    });

    stop.addEventListener('click', function () {
        if (isStarted === false) {
            return;
        }
        isStarted = false;
        var elapsedTime;    //�J�n���ԂƏI�����Ԃ̍�
        var diff;           //5�b�Ƃ̍�
        elapsedTime = (Date.now() - startTime) / 1000;
        result.textContent = elapsedTime.toFixed(3);
        start.className = '';           //�{�^����
        stop.className = 'push';        //�{�^����
        result.className = '';          //css�����ݒ��\��

        diff = elapsedTime - 5;         //5�b����̍���ϐ��Ɋi�[
        if (Math.abs(diff) < 1) {       //��Βl��1�b�ȉ��̏ꍇ       
            result.textContent = elapsedTime;   //�b����\��
            result.className = 'perfect';       //OK�̔w�i�F
        }
        else {
            result.textContent = elapsedTime;   //�b����\��
        }
    });
})();