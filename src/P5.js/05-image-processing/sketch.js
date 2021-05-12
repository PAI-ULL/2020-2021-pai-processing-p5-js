/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @desc Sketch using P5.js library to demonstrate image processing.
* @since 09/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

'use strict';

import {Particle} from './particle.js';

let landscape;
let particles = [];

function preload() {
  landscape = loadImage('./images/landscape-1.jpg');
}

function setup() {
  createCanvas(1000, 557);
  for (let i = 0; i < 1000; i++) {          // Create 1000 particles.
    particles.push(new Particle(255, 3));
  }
}

function draw() {
  // image(landscape, 0, 0);
  background(255);
  for (let i = 0; i < particles.length; i++) {
    const PIXEL_COLOR = landscape.get(particles[i].getX(), particles[i].getY());
    particles[i].setColor(PIXEL_COLOR);
    particles[i].drawParticle();
    particles[i].moveParticle();
  }
}

window.preload = preload;
window.setup = setup;
window.draw = draw;