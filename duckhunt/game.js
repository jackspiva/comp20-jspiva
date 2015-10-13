
function init(){
    var canvas = document.getElementById('game_canvas');        //  Learned from Mozilla canvas tutorial
    if (canvas.getContext){                                     //  at https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
              var ctx = canvas.getContext('2d');
    }

    var background = new Image();
    var ducks = new Image();

    background.onload = function() {
        ctx.drawImage(background, 0, 0, 800, 600);
    };
    background.src = 'duckhunt-background.gif';

    ducks.onload = function() {
        ctx.drawImage(ducks, 0, 232, 35, 35, 135, 80, 60, 60);
        ctx.drawImage(ducks, 170, 154, 40, 40, 350, 150, 90, 90);
    };
    ducks.src = 'duckhunt_various_sheet.png';






}
