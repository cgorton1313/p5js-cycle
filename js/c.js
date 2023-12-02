let offset = 0;
let xFish = 0;
let fishColor = 0;
function setup() {
  createCanvas(1200, 800);
  rectMode(CENTER);
  strokeWeight(4);
  angleMode(DEGREES);
}

function draw() {
  background("rgb(167,214,233)");
  fill("rgb(62,140,180)");
  stroke("rgb(43,114,150)");
  beginShape();
  let waveDepth = 350;
  let y;
  for (let x = 0; x < width; x++) {
    y = map(
      noise(x / waveDepth + offset) * 2 * height,
      0,
      height,
      (height / 3) * 2,
      (height / 3) * 2 + 50
    );
    vertex(x, y);
  }
  offset += 0.02;
  vertex(width, height);
  vertex(0, height);
  endShape();
  let yBoat = map(
    noise(mouseX / waveDepth + offset) * 2 * height,
    0,
    height,
    (height / 3) * 2,
    (height / 3) * 2 + 50
  );
  let xBoat = mouseX;
  drawBoat(xBoat, yBoat);
  getFishColor();
  for (let i = 0; i < width; i++) {
    let yFish = y + 120;
    drawFish(xFish % (width * 2), yFish, fishColors);
    xFish += 0.005;
  }
}
function drawBoat(x, y) {
  x = 150
  stroke("rgb(127,74,56)");
  fill("rgb(139,84,66)");
  circle(x, y - 50, 200);
  noStroke();
  fill("rgb(167,214,233)");
  rect(x, y - 100, 205, 100);
  fill("rgb(155,114,79)");
  rect(x, y - 100, 30, 100);
  fill(255);
  triangle(x - 30, y - 240, x + 80, y - 100, x - 80, y - 100);
}
function drawFish(xFish, yFish, color) {
  let fishColors = ["salmon", "pink", "yellow"];
  fill(fishColors[color]);
  ellipse(xFish, yFish, 50, 40);
  triangle(xFish, yFish, xFish - 40, yFish - 20, xFish - 40, yFish + 20);
  fill(0);
  circle(xFish + 8, yFish - 4, 8);
}
function getFishColor() {
  if (frameCount % 400 == (0)) {
    fishColors = 0;
  } else if (frameCount % 800 == (1)) {
    fishColors = 1;
  } else if (frameCount % 1200 == (2)) {
    fishColors = 2;
  }
}
