/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @desc Sketch using Processing3 where two squares moves in base of your mouse movement
* @since 08/05/2021
* @author Alberto Rodríguez Fuentes
*/

void setup() {
  size(640, 360); 
  noStroke();
  rectMode(CENTER);
}

void draw() {
  int BACKGROUND_COLOR = 51;
  background(BACKGROUND_COLOR);
  int FILL_COLOR =  204;
  fill(0, FILL_COLOR);
  int OFFSET = 10;
  rect(mouseX, height / 2, mouseY / 2 + OFFSET, mouseY / 2 + OFFSET);
  fill(255, 204);
  int inverseX = width - mouseX;
  int inverseY = height - mouseY;
  rect(inverseX, height / 2, (inverseY / 2) + OFFSET, (inverseY / 2) + OFFSET);
}
