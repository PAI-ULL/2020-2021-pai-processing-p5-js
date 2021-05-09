/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @module DanceHtml
* @desc ES6 Module to show DOM modification with the P5.js
* library.
* @since 09/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

/**
 * This class will allow HTML Elements to be moved around the page
 * as if they where dancing.
 */
class DanceHtml {
  #element /** HTML Element */
  #widthLimit /** Dancing limit for x axis */
  #heightLimit  /** Dancing limit for y axis */
  #xCoordinate  /** Initial X Coordinate on screen */
  #yCoordinate  /** Initial Y Coordinate on screen */
  #xSpeed /** X Axis moving speed */
  #ySpeed /** Y Axis moving speed */
  
  /**
   * It will assign given parameters to object properties. Also a random
   * initial position will be set and random initial speeds.
   * @param {HTMLElement} element HTML Element to move around.
   * @param {Number} widthLimit Dancing limit for x axis
   * @param {Numer} heightLimit Dancing limit for y axis
   */
  constructor(element, widthLimit, heightLimit) {
    this.#element = element;
    this.#widthLimit = widthLimit;
    this.#heightLimit = heightLimit;
    this.#xCoordinate = random(0, widthLimit);
    this.#yCoordinate = random(0, heightLimit);;
    this.#xSpeed = random(-5, 5);
    this.#ySpeed = random(-5, 5);
    element.position(this.#xCoordinate, this.#yCoordinate);
  }

  /**
   * It will make the object move and bounce when reached given limits.
   */
  dance() {
    // Moving
    this.#xCoordinate += this.#xSpeed;
    this.#yCoordinate += this.#ySpeed;
    this.#element.position(this.#xCoordinate, this.#yCoordinate);
    
    // Bouncing
    if (this.#xCoordinate < 0 || this.#xCoordinate > this.#widthLimit) {
      this.#xSpeed *= -1;
    }
    if (this.#yCoordinate < 0 || this.#yCoordinate > this.#heightLimit) {
      this.#ySpeed *= -1;
    }
  }
}

export {DanceHtml}