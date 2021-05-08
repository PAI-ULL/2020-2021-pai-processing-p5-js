/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @desc Sketch using P5.js library to demonstrate OOP Particles.
* @since 08/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

'use strict';

import {Particle} from './particle.js';

const particles = [];
const SPEED_LIMIT = 3;
const JOIN_RANGE = 100;
const COLOR = 'pink';

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle(COLOR, SPEED_LIMIT, JOIN_RANGE));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].drawParticle();
    particles[i].moveParticle();
    // particles[i].joinParticles(particles.slice(i));
  }
}

window.setup = setup;
window.draw = draw;