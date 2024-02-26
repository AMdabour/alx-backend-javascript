import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // eslint-disable-line no-underscore-dangle
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const cloned = new this.constructor[Symbol.species]();
    return cloned;
  }
}
