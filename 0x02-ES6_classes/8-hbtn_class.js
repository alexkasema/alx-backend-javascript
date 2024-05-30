export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  get size() {
    return this._size;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a String');
    }
    this._location = value;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](value) {
    if (value === 'number') {
      return this._size;
    }
    if (value === 'string') {
      return this._location;
    }
    return this;
  }
}
