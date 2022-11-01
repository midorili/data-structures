class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(property) {
    this.property = property;
    this.storage = {};
  }

  enqueue(value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[0] = value;
    } else if (Object.keys(this.storage).length === 1) {
      var firstElement = Object.keys(this.storage)[0];
      this.storage[firstElement + 1] = value;
    } else {
      var lastElement = Object.keys(this.storage).length - 1;
      this.storage[lastElement + 1] = value;
    }
  }

  dequeue() {
    var deleted = Object.values(this.storage)[0];
    delete this.storage[0];
    return deleted;
  }

  size() {
    return Object.keys(this.storage).length;
  }


}
