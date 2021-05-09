/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @module Particle
* @desc ES6 Module to represent Particles with the P5.js library.
* @since 08/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

/**
 * This class describes the properties of a single particle.
 * It uses P5.js library functions.
 */
class Particle {
  #xCoordinate  /** X Coordinate on canvas */
  #yCoordinate  /** Y Coordinate on canvas */
  #radius /** Radius of given particle */
  #xSpeed /** Horizontal speed */
  #ySpeed /** Vertical speed */
  #joinRange  /** Range to draw joins */
  #color  /** Particles draw color */

  /**
   * Setting the co-ordinates, radius and the
   * speed of a particle in both the co-ordinates axes.
   * @param {Number} speedLimit Limit of the speed.
   * @param {Number} joinRange Range to draw joins.
   */
  constructor(color, speedLimit, joinRange) {
    this.#xCoordinate = random(0, width);
    this.#yCoordinate = random(0, height);
    this.#radius = random(1, 20);
    this.#xSpeed = random(speedLimit * -1, speedLimit);
    this.#ySpeed = random(speedLimit * -1, speedLimit);
    this.#joinRange = joinRange;
    this.#color = color;
  }

  /**
   * xCoordinate property getter.
   * @return {Number} xCoordinate.
   */
  getX() {
    return this.#xCoordinate;
  }

  /**
   * yCoordinate property getter.
   * @return {Number} yCoordinate.
   */
  getY() {
    return this.#yCoordinate;
  }

  /**
   * Draws given particle as a circle.
   */
  drawParticle() {
    noStroke();
    fill(this.#color);
    circle(this.#xCoordinate, this.#yCoordinate, this.#radius);
  }

  /**
   * Modifies xCoordinate and yCoordinate in order to move the particle.
   */
  moveParticle() {
    if (this.#xCoordinate < 0 || this.#xCoordinate > width) {
      this.#xSpeed *= -1;
    }
    if (this.#yCoordinate < 0 || this.#yCoordinate > height) {
      this.#ySpeed *= -1;
    }
    this.#xCoordinate += this.#xSpeed;
    this.#yCoordinate += this.#ySpeed;
  }

  /**
   * This function creates the connections (lines)
   * between particles which are less than a certain range.
   * @param {Array} particles List of particles to join. 
   */
  joinParticles(particles) {
    particles.forEach((element) => {
      const THIS_X = this.#xCoordinate;
      const THIS_Y = this.#yCoordinate;
      const OTHER_X = element.getX();
      const OTHER_Y = element.getY();
      const DISTANCE = dist(THIS_X, THIS_Y, OTHER_X, OTHER_Y);
      if (DISTANCE < this.#joinRange) {
        stroke('green');
        line(THIS_X, THIS_Y, OTHER_X, OTHER_Y);
      }
    });
  }
}

export {Particle}