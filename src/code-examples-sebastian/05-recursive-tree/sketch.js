/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @desc Sketch using P5.js library to demonstrate recursive tree generation.
* @since 09/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

'use strict';

import {RecursiveTree} from './recursive-tree.js';

let tree;
let angle = 0;
let speed = 0.001;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  tree = new RecursiveTree(width / 2, height, 300, 20, 0.4, 0.66);
  tree.draw();
}

// function draw() {
//   background(0);
//   tree.draw();
//   tree.setAngle(angle % 90);
//   angle += speed;
// }

// function mouseClicked() {
//   speed += 0.01;
// }

window.setup = setup;
// window.draw = draw;
// window.mouseClicked = mouseClicked;