export default class Airport {
  constructor(name, code) {
    this._name = name; // eslint-disable-line no-underscore-dangle
    this._code = code; // eslint-disable-line no-underscore-dangle
  }

  get [Symbol.toStringTag]() {
    return this._code; // eslint-disable-line no-underscore-dangle
  }
}
