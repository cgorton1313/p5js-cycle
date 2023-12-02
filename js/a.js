function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  shape = {
    x: width / 2,
    y: height / 2,
    radius: 50,
    colors: "#FCD0BA",
    numShapes: 10,
  };

  shape2 = {
    x: shape.x,
    y: shape.y,
    radius: shape.radius / 2,
    colors: "#F1828D",
    numShapes: 10,
  };

  shape3 = {
    x: 0,
    y: 0,
    radius: (shape.radius * 3) / 4,
    colors: "#765D69",
    numShapes: 6,
  };

  shape4 = {
    x: 75,
    y: 75,
    radius: 20,
    colors: "#8FB9AF",
    numShapes: 16,
  };

  shape5 = {
    x: width / 3,
    y: height / 3,
    radius: shape4.radius / 2,
    colors: "#FEFAD4",
    numShapes: 20,
  };

  drawShape(shape);
  drawShape(shape2);
  drawShape(shape3);
  drawShape(shape4);
  drawShape(shape5);
}
function drawShape(shape, shape2, shape3) {
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < shape.numShapes; i++) {
    fill(shape.colors);
    rotate(frameCount / 2);
    square(shape.x / 2, shape.y / 2, shape.radius);
  }

  pop();
}
