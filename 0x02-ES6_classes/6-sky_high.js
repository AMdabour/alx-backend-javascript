import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors; // eslint-disable-line no-underscore-dangle
  }

  get floors() {
    return this._floors; // eslint-disable-line no-underscore-dangle
  }

  set floors(value) {
    this._floors = value; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`; // eslint-disable-line no-underscore-dangle
  }
}
