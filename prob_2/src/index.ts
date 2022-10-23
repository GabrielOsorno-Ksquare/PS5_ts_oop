/* Defining the class Matrix */
class Matrix {
  protected _columns: number = 0;
  protected _rows: number = 0;
  protected _elements: number[][] = [[]];

  constructor(matrix: number[][]) {
    if (matrix.every((i) => i.length === matrix[0].length)) {
      this._rows = matrix.length;
      this._columns = matrix[0].length;
      this._elements = matrix;
    } else {
      console.log('The Matrix is not symmetric');
    }
  }

  /* Getters and Setters */
  public get columns(): number {
    return this._columns;
  }

  public get rows(): number {
    return this._rows;
  }

  public get elements(): number[][] {
    return this._elements;
  }

  public set elements(matrix: number[][]) {
    if (matrix.every((i) => i.length === matrix[0].length)) {
      this._rows = matrix.length;
      this._columns = matrix[0].length;
      this._elements = matrix;
    } else {
      console.log('The Matrix is not symmetric');
    }
  }

  public getElement(i: number, j: number): number {
    return this._elements[i][j];
  }

  public setElement(i: number, j: number, value: number) {
    this._elements[i][j] = value;
  }

  /* function that add two matrixes */
  add(matrix: Matrix): Matrix | undefined {
    if (
      (this._columns === matrix.columns && this._rows === matrix.rows) ||
      (matrix.columns !== 0 && matrix.rows !== 0)
    ) {
      const solution = new Matrix([[]]);

      for (var i: number = 0; i < this._rows; i++) {
        for (var j: number = 0; j < this._columns; j++) {
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
  multiply(matrix: Matrix): Matrix | undefined {
    const solution = new Matrix([[]]);

    if (this._columns === matrix.rows) {
      for (let i: number = 0; i < matrix._columns; i++) {
        for (let j: number = 0; j < this._rows; j++) {
          let value = 0;
          for (let k: number = 0; k < this._columns; k++) {
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
