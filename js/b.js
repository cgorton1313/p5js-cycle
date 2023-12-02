function setup() {
  createCanvas(1200, 800);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  let x = map(sin(frameCount), -1, 1, 100, width - 100);
  drawSky();
  drawSunMoon();
  drawOcean();
  drawFish(x);
}

function drawOcean() {
  translate(0, height / 2);
  //rectangle for the base of the ocean
  noStroke();
  fill(210, 100, 100);
  rect(0, 0, width, height);
  //circles to create the wave effect
  let dia = 15;
  for (let i = 0; i < (width / dia) * 2; i += 2) {
    noStroke();
    //fill(210, 60, mouseX);
    if (mouseX > windowWidth / 2) {
      fill(210, 60, windowWidth * 0.8 - mouseX);
    } else {
      fill(210, 60, mouseX);
    }
    fill(210, 60, map(sin(frameCount), -1, 1, 90, 10))
    circle(i * dia, 0, dia);
    fill(210, 100, 100);
    circle(i * dia + dia, 0, dia);
  }
}

function drawFish(x) {
  push();
  translate(x, 150);
  noStroke();
  fill(30, 100, 100);
  //body of the fish
  ellipse(0, 0, 100, 70);
  //eye of the fish
  fill(0);
  circle(15, -10, 15);
  fill(300);
  circle(15, -15, 5);
  //tail of the fish
  noStroke();
  fill(30, 100, 100);
  triangle(-10, 0, -100, -30, -100, 30);
  pop();
}
function drawSunMoon() {
  push();
  translate(width / 2, 500);
  rotate(map(sin(frameCount), -1, 1, 0, 360));
  //moon
  drawMoon(500, 0);
  //sun
  noStroke();
  fill(60, 100, 100);
  circle(-500, 0, 140);
  pop();
}

function drawMoon(x, y) {
  push();
  //this function was made in order to make it easier to draw the craters on the moon
  translate(x, y);
  //base of the moon
  noStroke();
  fill(300);
  circle(0, 0, 140);
  noStroke();
  fill(60);
  //craters
  circle(10, 10, 20);
  circle(-20, -20, 20);
  circle(0, -50, 10);
  circle(-10, 50, 10);
  circle(40, 0, 15);
  circle(-50, 0, 15);
  pop();
}

function drawSky() {
  //this function was made to change the time of day
  // push();
  if (mouseX > windowWidth / 2) {
    background(210, 60, windowWidth * 0.8 - mouseX);
  } else {
    background(210, 60, mouseX);
  }
  background(210, 60, map(sin(frameCount), -1, 1, 90, 10))
  //pop();
}
