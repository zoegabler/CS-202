let painting;
let triangles = [];
let draggingTriangle = null;
let offset = [];

function setup() {
  createCanvas(400, 400);
  initializeTriangles();
  noLoop();
}

function draw() {
  background(200);
  if (painting) {
    image(painting, 0, 0, width, height);
  }
  noStroke();
  for (let t of triangles) {
    fill(t.color);
    triangle(...t.points.flat());
  }
}

function initializeTriangles() {
  triangles = [
    {
      color: [245],
      points: [
        [200, -100],
        [200, 200],
        [350, 50]
      ]
    },
    {
      color: [128],
      points: [
        [240, 0],
        [460, 0],
        [350, 200]
      ]
    },
    {
      color: [200, 0, 0],
      points: [
        [400, 450],
        [400, 0],
        [150, 200]
      ]
    },
    {
      color: [200, 200, 0],
      points: [
        [0, 200],
        [0, 400],
        [200, 300]
      ]
    },
    {
      color: [0],
      points: [
        [-50, 200],
        [200, 400],
        [200, 0]
      ]
    }
  ];
  redraw(); 
}

function mousePressed() {
  for (let i = triangles.length - 1; i >= 0; i--) {
    let t = triangles[i];
    if (pointInTriangle(mouseX, mouseY, ...t.points)) {
      draggingTriangle = t;
      offset = t.points.map(([x, y]) => [mouseX - x, mouseY - y]);
      break;
    }
  }
}

function mouseDragged() {
  if (draggingTriangle) {
    draggingTriangle.points = draggingTriangle.points.map(([x, y], i) => [
      mouseX - offset[i][0],
      mouseY - offset[i][1]
    ]);
    redraw();
  }
}

function mouseReleased() {
  draggingTriangle = null;
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('draggable_painting', 'png');
  }
  if (key === 'r' || key === 'R') {
    initializeTriangles();
    redraw();
  }
}

function pointInTriangle(px, py, p1, p2, p3) {
  let area = 0.5 * (-p2[1] * p3[0] + p1[1] * (-p2[0] + p3[0]) + p1[0] * (p2[1] - p3[1]) + p2[0] * p3[1]);
  let s = (1 / (2 * area)) * (p1[1] * p3[0] - p1[0] * p3[1] + (p3[1] - p1[1]) * px + (p1[0] - p3[0]) * py);
  let t = (1 / (2 * area)) * (p1[0] * p2[1] - p1[1] * p2[0] + (p1[1] - p2[1]) * px + (p2[0] - p1[0]) * py);
  let u = 1 - s - t;
  return s >= 0 && t >= 0 && u >= 0;
}
