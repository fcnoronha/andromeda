function setup() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  createCanvas(canvasWidth, canvasHeight);

  sun = new Planet(180, 0, 0);
  sun.planetColor = "#000013";

  biggerPlanet = new Planet(80, 0.3, 700);


  planet = new Planet(70, 0.1, 300);
  planet2 = new Planet(85, 0.2, 300);
  planet3 = new Planet(70, 0.3, 500);
  planet4 = new Planet(60, 0.2, 700);
  


  sun.attachPlanet(planet);
  sun.attachPlanet(planet2);
  sun.attachPlanet(planet3);
  sun.attachPlanet(biggerPlanet);
  sun.attachPlanet(planet4);
}

function draw() {
  background(sun.backgroundColor);

  center();

  sun.draw();
}

function center() {
  translate(width / 2, height / 2);
}

