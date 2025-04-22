function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {

    background(200);
    noStroke();
  
    fill(245); // white triangle
    triangle(200, -100, 200, 200, 350, 50);

    fill(128); // gray triangle
    triangle(240, 0, 460, 0, 350, 200);

    fill(200, 0, 0); // red triangle
    triangle(400, 450, 400, 0, 150, 200);
  
    fill(200, 200, 0); // yellow triangle
    triangle(0, 200, 0, 400, 200, 300);

    fill(0); // black triangle
    triangle(-50, 200, 200, 400, 200, 0);
  }

