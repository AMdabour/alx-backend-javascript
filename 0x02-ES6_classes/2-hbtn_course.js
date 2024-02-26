export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'name'); // eslint-disable-line no-underscore-dangle
    this._length = this.validateNumber(length, 'length'); // eslint-disable-line no-underscore-dangle
    this._students = this.validateArray(students, 'students'); // eslint-disable-line no-underscore-dangle
  }

  // Getter and setter for 'name'
  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(newName) {
    this._name = this.validateString(newName, 'name'); // eslint-disable-line no-underscore-dangle
  }

  // Getter and setter for 'length'
  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, 'length'); // eslint-disable-line no-underscore-dangle
  }

  // Getter and setter for 'students'
  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set students(newStudents) {
    this._students = this.validateArray(newStudents, 'students'); // eslint-disable-line no-underscore-dangle
  }

  // Private method to validate string type
  // eslint-disable-next-line class-methods-use-this
  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string.`);
    }
    return value;
  }

  // Private method to validate number type
  // eslint-disable-next-line class-methods-use-this
  validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number.`);
    }
    return value;
  }

  // Private method to validate array type
  // eslint-disable-next-line class-methods-use-this
  validateArray(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attributeName} must be an array.`);
    }
    // If the array elements are expected to be strings, you can add additional validation here
    return value;
  }
}
