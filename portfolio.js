//テキストフラッシュ
var interval_id;

function text_start(){
    interval_id = setInterval(text_flash, 1500);
}

function text_flash(){
    var text = document.getElementById('title');
    if (text.style.color === 'black'){
        text.style.color = 'mediumblue';
    } else {
        text.style.color = 'black';
    }
}

$(document).ready(function(){
    text_start();
});
