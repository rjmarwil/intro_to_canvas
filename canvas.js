var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var size = { x: canvas.width, y: canvas.height };
var pixel_size = canvas.width/100;

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
    context.globalAlpha = 0.5;
    context.beginPath();
    context.fillRect(Math.floor((Math.random() * (size.x-2)) + 1), Math.floor((Math.random() * (size.y-2)) + 1), Math.floor((Math.random() * (size.x-2)) + 1), Math.floor((Math.random() * (size.y-2)) + 1));
    context.closePath();
  }
  else {
    context.globalAlpha = 0.5;
    context.beginPath();
    context.arc(Math.floor((Math.random() * (size.x-2)) + 1), Math.floor((Math.random() * (size.y-2)) + 1), Math.floor((Math.random() * (size.x-2)) + 1), 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }
}

function clean() {
  context.clearRect (1, 1, size.x - 2, size.y - 2);
}

function fib(x) {
  if (x === 0) {
      return 0;
  } else if (x === 1) {
      return 1;
  } else {
      return fib(x-1)+fib(x-2);
  }
}

function drawPixel(x, y){
  var color = '#'+Math.floor(Math.random()*16777215).toString(16);
  context.globalAlpha = 0.5;
  context.fillStyle = color;
  context.fillRect(x*pixel_size , y*pixel_size, pixel_size, pixel_size);
}

function drawRow(rowNumber, rowLength){
  for(i = 0; i < rowLength; i++) {
    drawPixel(rowNumber, i);
  }
}

function drawFibonacci(){
  // counting on the canvas from left to right, rows 1-15.
  for(rowNumber = 1; rowNumber < 25; rowNumber++){
    // use our fib function to determine how many pixels down to paint.
    rowLength = fib(rowNumber);

    // use our drawRow function to print each individual pixel, for each row.
    drawRow(rowNumber, rowLength);
  }
}

drawBorder();
