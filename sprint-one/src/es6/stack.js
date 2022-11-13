class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(property) {
    this.property = property;
    this.storage = {};
  }
  push(value) {
    if (this.storage.length === 0) {
      this.storage[0] = value;
    } else {
      this.storage[1] = this.storage[0];
      this.storage[0] = value;
    }
  }
  pop() {
    var deleteKey = Object.keys(this.storage)[0];
    var deleted = this.storage[deleteKey];
    delete this.storage[deleteKey];
    return deleted;
  }
  size() {
    var length = Object.keys(this.storage).length;
    return length;
  }
}