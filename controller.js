let sketches = [
    { file: 'a.js', author: '.Sarah Spetter.' },
    { file: 'b.js', author: '.Mattea Kaiser.' },
    { file: 'c.js', author: '.Sarah Riley.' },
    { file: 'd.js', author: '.Molly Tittemore.' },
    { file: 'e.js', author: '.Sarah Riley.' },
];

let cW = window.innerWidth;
let cH = window.innerHeight;

const cycleSeconds = 15;
const urlParams = new URLSearchParams(window.location.search);
let sketchNum = parseInt(urlParams.get('sn'));

if (isNaN(sketchNum)) sketchNum = 0;

let head = document.getElementsByTagName('head')[0];
let js = document.createElement("script");

js.type = "text/javascript";
js.src = 'js/' + sketches[sketchNum].file;

head.appendChild(js);
document.getElementById('author').innerHTML = 'Creative Coding - ' + sketches[sketchNum].author;

setTimeout(nextPage, 1000 * cycleSeconds);

function nextPage() {
    window.location = "index.html?sn=" + ((sketchNum + 1) % sketches.length);
}
