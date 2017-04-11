const AUTHOR = 'yagisuke';

export class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  getName() {
    return this.firstName + this.lastName;
  }
}

export class Triangle {
  constructor(base, height) {
    Object.assign(this, {base, height});
  }

  get base() {
    return this._base;
  }
  set base(value) {
    this._base = value;
  }
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
  }
}
