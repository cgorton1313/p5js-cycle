let cnv; //variable for second canvas

let backPalette; //variable for background palette

let hypnoPalette; //variable for stroke color selected from palette

function setup() {
  createCanvas(800, 800);

  angleMode(DEGREES);
  rectMode(CENTER);

  cnv = createGraphics(800, 800); // second canvas set as variable
  cnv.angleMode(DEGREES);

  backPalette = random([
    //background palette
    "#b6023e",
    "#c20242",
    "#cc0245",
    "#de0d53",
    "#eb1a5f",
    "#f21d64",
    "#ed2f6f",
    "#f03c78",
    "#e64c7f",
    "#f05488",
  ]);

  hypnoPalette = random([
    //stroke palette
    "#fbf8cc",
    "#fde4cf",
    "#ffcfd2",
    "#f1c0e8",
    "#cfbaf0",
    "#a3c4f3",
    "#90dbf4",
    "#8eecf5",
    "#98f5e1",
    "#b9fbc0",
  ]);
}

function draw() {
  background(backPalette);

  translate(width / 2, height / 2); //origin in center of original canvas

  let canvasRot = frameCount * 4; //sets rotation rate for original canvas

  rotate(canvasRot); //rotates first/original canvas

  cnv.push();

  cnv.translate(cnv.width / 2, cnv.height / 2); //translates second canvas' origin to center

  cnv.rotate(frameCount); //rotates second canvas

  cnv.strokeWeight(1); //stroke weight of circles
  cnv.stroke(hypnoPalette); //stroke color of circles

  createIllusion(); //creates illusion

  cnv.pop();

  image(cnv, -width / 2, -height / 2); //allows second canvas + illusion we created to be seen
}

function createIllusion() {
  //allows pattern/illusion to be drawn

  let dia = 10; //diameter of each circle

  let circleX = 20; //starting coordinate for circle
  let circleY = 0; //constant y cord for circles

  let counter = 10; //sets how much time the loop loops

  for (i = 0; i < counter; i++) {
    //loops circles to create pattern that rotates
    cnv.circle(circleX, circleY, dia);

    circleX = circleX + 20; //increments x cord by twenty each time through loop

    if (frameCount % 400 == 0) {
      cnv.background(backPalette); //sets condition to revert to background and restart pattern by multiples of 400
    }
  }
}
