
function init(){
    var canvas = document.getElementById('game_canvas');        //  Learned from Mozilla canvas tutorial
    if (canvas.getContext){                                     //  at https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
              var ctx = canvas.getContext('2d');
    }

    var background = new Image();
    background.src = 'duckhunt-background.gif';

    var ducks = new Image();
    ducks.src = 'duckhunt_various_sheet.png';

    background.onload = function() {
        ctx.drawImage(background, 0, 0, 800, 600);      // draw background once background image loaded
    };

    ducks.onload = function() {
        ctx.drawImage(ducks, 0, 232, 35, 35, 135, 80, 60, 60);      // draw ducks once duckhunt various images image loaded
        ctx.drawImage(ducks, 170, 154, 40, 40, 350, 150, 90, 90);
    };
}
