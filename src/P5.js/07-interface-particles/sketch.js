/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @desc Sketch using P5.js library to demonstrate OOP Particles and events.
* @since 08/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

'use strict';

import {Particle} from './particle.js';

// Check the HTML!
const particles = [];
const SPEED_LIMIT = 3;
const JOIN_RANGE = 100;
const START_VALUE = 0;
const END_VALUE = 255;
const COLOR = 'pink';
let redSlider;
let greenSlider;
let blueSlider;
function setup() {
  redSlider = createSlider(START_VALUE, END_VALUE, START_VALUE);
  greenSlider = createSlider(START_VALUE, END_VALUE, START_VALUE);
  blueSlider = createSlider(START_VALUE, END_VALUE, START_VALUE);
  let div = createDiv();
  const H3_TEXT = createElement('h3', 'Hey also click here!');
  div.child(H3_TEXT);
  div.position(25, 100);  
  let canvas = createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle(COLOR, SPEED_LIMIT, JOIN_RANGE));
  }
  canvas.mouseWheel(changeSize);
  div.mousePressed(changeColor);  
  const RED_SLIDER_POS = 25;
  const GREEN_SLIDER_POS_X = 25;
  const GREEN_SLIDER_POS_Y = 50;
  const BLUE_SLIDER_POS_X  = 25;
  const BLUE_SLIDER_POS_Y = 75;
  const SLIDER_SIZE = '80px'
  redSlider.position(RED_SLIDER_POS, RED_SLIDER_POS);
  redSlider.style('width', SLIDER_SIZE);
  greenSlider.position(GREEN_SLIDER_POS_X, GREEN_SLIDER_POS_Y);
  greenSlider.style('width', SLIDER_SIZE);
  blueSlider.position(BLUE_SLIDER_POS_X, BLUE_SLIDER_POS_Y);
  blueSlider.style('width', SLIDER_SIZE);
}

function draw() {
  background(redSlider.value(), greenSlider.value(), blueSlider.value());
  for (let i = 0; i < particles.length; i++) {
    particles[i].drawParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}
/**
 * Changes the color randomly
 */
function changeColor() {
  const MIN_RGB_VALUE = 0;
  const MAX_RGB_VALUE = 255;
  redSlider.value(random(MIN_RGB_VALUE, MAX_RGB_VALUE));
  greenSlider.value(random(MIN_RGB_VALUE, MAX_RGB_VALUE));
  blueSlider.value(random(MIN_RGB_VALUE, MAX_RGB_VALUE));
}
/**
 * Changes the size of the particle depending on the mouse scroll
 */
function changeSize(event) {
  if (event.deltaY > 0) {
    for (let particle of particles) {
      particle.addSize();
    }
  } else {
    for (let particle of particles) {
      particle.subSize();
    }
  }
}

window.setup = setup;
window.draw = draw;