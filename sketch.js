let currentShape = 0; // Index of the current shape being displayed

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220); // Refresh the canvas every frame
  noLoop(); // Draw only once to avoid unnecessary calculations

  // Draw the corresponding shape based on the current index
  if (currentShape === 0) {
    drawLine();
  } else if (currentShape === 1) {
    drawTriangle();
  } else if (currentShape === 2) {
    drawQuad();
  } else if (currentShape === 3) {
    drawArc();
  }
}

// Draw a line
function drawLine() {
  strokeWeight(4);
  stroke(0);
  line(50, 50, 350, 350);
}

// Draw a triangle
function drawTriangle() {
  fill(0, 255, 0);
  stroke(0);
  triangle(100, 300, 200, 100, 300, 300);
}

// Draw a quadrilateral
function drawQuad() {
  fill(0, 0, 255);
  stroke(0);
  quad(150, 100, 250, 150, 200, 250, 100, 200);
}

// Draw an arc
function drawArc() {
  fill(255, 0, 0);
  stroke(0);
  arc(200, 200, 150, 150, PI / 4, PI);
}

// Switch shapes when a key is pressed
function keyPressed() {
  currentShape = (currentShape + 1) % 4; // Cycle through shapes (0-3)
  redraw(); // Redraw the canvas
}
