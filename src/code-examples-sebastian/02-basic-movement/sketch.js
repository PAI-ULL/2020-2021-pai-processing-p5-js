/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @desc Sketch using P5.js library to demonstrate basic movement.
* @since 08/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

'use strict';

let xPosition = 0;
let yPosition = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  fill(255);
  circle(xPosition, yPosition, 50);
  xPosition += 5;
  yPosition += 5;

  if (xPosition > width || yPosition > height) {
    xPosition = 0;
    yPosition = 0;
  }
}
