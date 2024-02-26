export default class Building {
  constructor(sqft) {
    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
    if (this.constructor !== Building) {
      this.evacuationWarningMessage(); // This line triggers the error
    }
  }

  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
