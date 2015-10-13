
function init(){
    var canvas = document.getElementById('game_canvas');        //  Learned from Mozilla canvas tutorial
    if (canvas.getContext){                                     //  at https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
              var ctx = canvas.getContext('2d');
    }

    var img = new Image();
    img.onload = function() {
            ctx.drawImage(img, 0, 0, 800, 600);
    };
    img.src = 'duckhunt-background.gif';




}
