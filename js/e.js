let startSize;
let colorPalette = [
  "rgb(186,111,96)",
  "rgb(194,127,113)",
  "rgb(209,159,149)",
  "rgb(217,175,167)",
  "rgb(224,191,184)",
];

function setup() {
  createCanvas(800, 800);
  background(220);
  noStroke();
  angleMode(DEGREES);
  startSize = 2 * width;
}

function draw() {
  translate(width / 2, height / 2);
  let heartSize = startSize;
  for (let i = 0; i < 40; i++) {
    fill(colorPalette[i % colorPalette.length]);
    heart(0, 0, heartSize);
    heartSize *= 0.8;
  }
  startSize = startSize < 2 ? 2 * width : startSize - 2;
}
function heart(heartX, heartY, size) {
  quad(
    heartX,
    heartY + size,
    heartX + size,
    heartY,
    heartX,
    heartY - size,
    heartX - size,
    heartY
  );
  arc(
    heartX + size / 2.1,
    heartY - size / 2.1,
    size + size / 2.4,
    size + size / 2.4,
    225,
    45
  );
  arc(
    heartX - size / 2.1,
    heartY - size / 2.1,
    size + size / 2.4,
    size + size / 2.4,
    135,
    315
  );
}
