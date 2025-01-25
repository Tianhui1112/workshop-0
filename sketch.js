let currentShape = 0; // 当前显示的图形索引

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220); // 每帧刷新画布
  noLoop(); // 只绘制一次，避免多余计算

  // 根据当前索引绘制对应的图形
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

// 绘制线条
function drawLine() {
  strokeWeight(4);
  stroke(0);
  line(50, 50, 350, 350);
}

// 绘制三角形
function drawTriangle() {
  fill(0, 255, 0);
  stroke(0);
  triangle(100, 300, 200, 100, 300, 300);
}

// 绘制四边形
function drawQuad() {
  fill(0, 0, 255);
  stroke(0);
  quad(150, 100, 250, 150, 200, 250, 100, 200);
}

// 绘制弧形
function drawArc() {
  fill(255, 0, 0);
  stroke(0);
  arc(200, 200, 150, 150, PI / 4, PI);
}

// 当按键时切换图形
function keyPressed() {
  currentShape = (currentShape + 1) % 4; // 循环切换图形 (0-3)
  redraw(); // 重新绘制画布
}