var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var size = { x: canvas.width, y: canvas.height };

function drawBorder(){
  context.strokeRect(0, 0, size.x, size.y);
}

function fillBlue() {
  context.fillStyle = 'blue';
  context.fillRect(0, 0, size.x/2, size.y/2);
}

function fillRed() {
  context.fillStyle = 'red';
  context.fillRect(size.x/2, size.y/2, size.x/2, size.y/2);
}

function fillRand(color) {
  var random = Math.floor((Math.random() * 2) + 1);
  context.fillStyle = color;
  if (random === 1) {
    context.fillRect(Math.floor((Math.random() * (size.x-2)) + 1), Math.floor((Math.random() * (size.y-2)) + 1), Math.floor((Math.random() * (size.x-2)) + 1), Math.floor((Math.random() * (size.y-2)) + 1));
  }
  else {
    context.arc(Math.floor((Math.random() * (size.x-2)) + 1), Math.floor((Math.random() * (size.y-2)) + 1), Math.floor((Math.random() * (size.x-2)) + 1), 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }
}

function clean() {
  context.clearRect (1, 1, size.x - 2, size.y - 2);
}

drawBorder();
