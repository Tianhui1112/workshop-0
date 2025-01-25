# workshop_0:

You can view the generated effect by visiting the following link:

[View Workshop 0 Effect](https://tianhui1112.github.io/workshop-0/)


## Overview
This project allows users to switch between four different shapes (line, triangle, quadrilateral, and arc) by pressing any key on the keyboard. Each shape is drawn in the center of a 400x400 canvas, and users can cycle through them by pressing keys.



## Project workflow

1.1: Canvas Creation
We create a 400x400 canvas where the shapes will be drawn. The background is set to a light gray using the background() function.

```javascript
function setup() { createCanvas(400, 400); // Create a 400x400
canvas background(220); // Set the background color to grayscale value 220 (light gray) }
```

1.2: Drawing Shapes
We define four different shapes: a line, a triangle, a quadrilateral, and an arc. Each shape is drawn using built-in p5.js functions. We encapsulate the shape drawing code into individual functions to keep the code organized.


```javascript
// Draw a line
function drawLine() {
  strokeWeight(4);  // Set the stroke thickness to 4
  stroke(0);        // Set the stroke color to black
  line(50, 50, 350, 350); // Draw a line from (50, 50) to (350, 350)
}

// Draw a triangle
function drawTriangle() {
  fill(0, 255, 0);   // Set the fill color to green
  stroke(0);         // Set the stroke color to black
  triangle(100, 300, 200, 100, 300, 300); // Draw a triangle with specified coordinates
}

// Draw a quadrilateral
function drawQuad() {
  fill(0, 0, 255);   // Set the fill color to blue
  stroke(0);         // Set the stroke color to black
  quad(150, 100, 250, 150, 200, 250, 100, 200); // Draw a quadrilateral with specified coordinates
}

// Draw an arc
function drawArc() {
  fill(255, 0, 0);    // Set the fill color to red
  stroke(0);          // Set the stroke color to black
  arc(200, 200, 150, 150, PI / 4, PI); // Draw an arc at (200, 200) with width and height of 150
}

```

1.3: Encapsulating Shapes into Functions

Each shape is encapsulated inside its own function (drawLine, drawTriangle, drawQuad, drawArc). This structure allows us to call these functions based on the current shape index.
Code
As shown in Step 2, we already encapsulated each shape's drawing logic into individual functions.


1.4: Assigning Indexes to Shapes
The shapes are assigned numeric indexes using the currentShape variable, which determines which shape is drawn. Initially, currentShape is set to 0, which corresponds to the line shape.

```javascript
let currentShape = 0; // Index of the current shape being displayed

```
1.5: Shape Switching with Key Press
The keyPressed function listens for key presses. When a key is pressed, the currentShape value is incremented, and it wraps around using modulo (%) to cycle between shapes. The redraw() function is called to update the canvas with the new shape.

```javascript
function keyPressed() { currentShape = (currentShape + 1) % 4; // Cycle through shapes (0-3) 
redraw(); // Redraw the canvas to update the shape }

```
