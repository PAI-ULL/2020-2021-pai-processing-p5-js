/**
* Universidad: Universidad de La Laguna
* Titulación:  Grado en Ingeniaría Informática, 3º Curso
* Asignatura:  Programación de Aplicaciones Interactivas
* @module RecursiveTree
* @desc ES6 Module to represent Recursive Trees with the P5.js
* library.
* @since 09/05/2021
* @author Sebastián Daniel Tamayo Guzmán
*/

/**
 * This class will allow to draw trees in a recursive way, defining
 * parameters like detail or position.
 */
class RecursiveTree {
  #xCoordinate  /** X Coordinate on canvas */
  #yCoordinate  /** Y Coordinate on canvas */
  #longitude /** Size of the first branch */
  #angle /** Angle between 2 branches */
  #detail /** Minimum branch size */
  #branchRelation /** Longitude relation between branches */

  /**
   * It will set all parameters into object properties. Also it will
   * traduce degrees into radians and detail range.
   * @param {Number} xCoordinate X Coordinate on canvas
   * @param {Number} yCoordinate Y Coordinate on canvas
   * @param {Number} longitude Size of the first branch
   * @param {Number} angle Angle between 2 branches
   * @param {Number} detail Minimum branch size
   * @param {Number} branchRelation Longitude relation between branches
   */
  constructor(xCoordinate, yCoordinate, longitude,angle, detail, branchRelation) {
    this.#xCoordinate = xCoordinate;
    this.#yCoordinate = yCoordinate;
    this.#longitude = longitude;
    this.#angle = radians(angle);
    this.#detail = map(detail, 0, 1, 10, 1);
    this.#branchRelation = branchRelation;
  }

  /**
   * Setter for angle property.
   * @param {Number} angle In Radians
   */
  setAngle(angle) {
    this.#angle = angle;
  }

  /**
   * Will start the recursive drawing process.
   */
  draw() {
    push();
    translate(this.#xCoordinate, this.#yCoordinate);
    line(0, 0, 0, -this.#longitude);
    translate(0, -this.#longitude);
    this.branch(this.#longitude);
    pop();
  }

  /**
   * Two branches separated by defined angle will be drawn at the
   * end of the calling branch. Then it will call this function for
   * each of those branches.
   * @param {Number} longitude Parent branch size.
   */
  branch(longitude) {
    // Reduce branch longitude by relation. 
    longitude *= this.#branchRelation;

    if (longitude > this.#detail) {
      push();                     // Save the current state of transformation.
      rotate(this.#angle);        // Rotate axis by angle property.
      line(0, 0, 0, -longitude);  // Draw the branch.
      translate(0, -longitude);   // Translate origin to end of branch.
      this.branch(longitude);    // Begin new branching.
      pop();                      // Undo last transformations.

      // Repeat branching to the left.
      push();
      rotate(-this.#angle);
      line(0, 0, 0, -longitude);
      translate(0, -longitude);
      this.branch(longitude);
      pop();
    }
  }
}

export {RecursiveTree}