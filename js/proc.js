const n = 3;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    var l = Math.random()*10 + 60;
    var h = Math.random()*10 + 60;
    circle(l, h, 100);
    fill(0);
    noStroke();
    text('IME', l-40, h-40);
    fill(146, 108, 227);
    console.log(l);
}