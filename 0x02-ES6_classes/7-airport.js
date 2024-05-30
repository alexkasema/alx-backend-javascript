export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a String');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a String');
    }
    this._code = value;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
