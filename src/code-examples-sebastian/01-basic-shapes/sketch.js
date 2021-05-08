/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @desc Sketch using P5.js library to demonstrate basic shapes.
* @since 08/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

'use strict';

function setup() {
  // Define el lienzo de 400 pixeles de ancho y 400 de alto
  createCanvas(500, 500);
  background(0);

  // Dibuja puntos blancos.
  stroke(255);
  point(50, 50);

  // Dibuja dos lineas rojas.
  stroke(255, 0, 0);
  line(100, 50, 300, 50);
  line(350, 25, 450, 75);
  
  // Quita el contorno.
  noStroke();

  // Dibuja un rectángulo.
  fill(50);
  rect(100, 100, 200, 100);

  // Dibuja un triángulo.
  fill(0, 255, 0);
  triangle(100,300, 50, 450, 150, 450);

  // Dibuja un arco.
  fill(0, 0, 255);
  arc(350, 450, 200, 200, PI, 0);
}
