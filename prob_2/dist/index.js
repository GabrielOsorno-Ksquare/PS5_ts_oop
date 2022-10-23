'use strict';
/* Defining the class Matrix */
class Matrix {
  constructor(matrix) {
    this._columns = 0;
    this._rows = 0;
    this._elements = [[]];
    if (matrix.every((i) => i.length === matrix[0].length)) {
      this._rows = matrix.length;
      this._columns = matrix[0].length;
      this._elements = matrix;
    } else {
      console.log('The Matrix is not symmetric');
    }
  }
  /* Getters and Setters */
  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }
  get elements() {
    return this._elements;
  }
  set elements(matrix) {
    if (matrix.every((i) => i.length === matrix[0].length)) {
      this._rows = matrix.length;
      this._columns = matrix[0].length;
      this._elements = matrix;
    } else {
      console.log('The Matrix is not symmetric');
    }
  }
  getElement(i, j) {
    return this._elements[i][j];
  }
  setElement(i, j, value) {
    this._elements[i][j] = value;
  }
  /* function that add two matrixes */
  add(matrix) {
    if (
      (this._columns === matrix.columns && this._rows === matrix.rows) ||
      (matrix.columns !== 0 && matrix.rows !== 0)
    ) {
      const solution = new Matrix([[]]);
      for (var i = 0; i < this._rows; i++) {
        for (var j = 0; j < this._columns; j++) {
          solution.setElement(
            i,
            j,
            this._elements[i][j] + matrix.getElement(i, j)
          );
        }
      }
      return solution;
    } else {
      console.log('NOOP');
    }
  }
  /* function that multiply two matrixes */
  multiply(matrix) {
    const solution = new Matrix([[]]);
    if (this._columns === matrix.rows) {
      for (let i = 0; i < matrix._columns; i++) {
        for (let j = 0; j < this._rows; j++) {
          let value = 0;
          for (let k = 0; k < this._columns; k++) {
            value += this._elements[j][k] * matrix._elements[k][i];
          }
          solution.setElement(j, i, value);
        }
      }
      return solution;
    } else {
      console.log('NOOP');
    }
  }
}
