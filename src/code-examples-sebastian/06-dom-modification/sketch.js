/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @desc Sketch using P5.js library to demonstrate DOM modification.
* @since 09/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

'use strict';

import {DanceHtml} from './dance-html.js';

// Check the HTML!
let dancingElements = [];

function setup() {
  createP('Hey!').addClass('dancing');
  createP('How are you?').addClass('dancing');
  const TEXTS = selectAll('.dancing');
  dancingElements = TEXTS.map((element) => {
    return new DanceHtml(element, windowWidth, windowHeight);
  });
}

function draw() {
  dancingElements.forEach(element => {
    element.dance();
  });
}

window.setup = setup;
window.draw = draw;