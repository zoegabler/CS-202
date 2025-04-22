let angles = [0, 0, 0, 0, 0];
  
  function setup() {
    createCanvas(700, 700);
    angleMode(RADIANS);
  }
  
  function draw() {
    background(200);
    translate(width / 2, height / 2);
  
    noStroke();

    push();
    rotate(angles[0]);
    fill(245); // white triangle
    triangle(200, -100, 200, 200, 350, 50);
    pop();

    push();
    rotate(angles[1]);
    fill(128); // gray triangle
    triangle(240, 0, 460, 0, 350, 200);
    pop();

    push();
    rotate(angles[2]);
    fill(200, 0, 0); // red triangle
    triangle(400, 450, 400, 0, 150, 200);
    pop();
  
    push();
    rotate(angles[3]);
    fill(200, 200, 0); // yellow triangle
    triangle(0, 200, 0, 400, 200, 300);
    pop();

    push();
    rotate(angles[4]);
    fill(0); // black triangle
    triangle(-50, 200, 200, 400, 200, 0);
    pop();
  
    angles[0] += 0.01;
    angles[1] += 0.02;
    angles[2] += 0.015;
    angles[3] += 0.025;
    angles[4] += 0.02;
  }
  