var Queue = function(property) {

  this.property = property;
};


var storage = {};

Queue.prototype.enqueue = function(value) {
  if (Object.keys(storage).length === 0) {
    storage[0] = value;
  } else if (Object.keys(storage).length === 1) {
    var firstElement = Object.keys(storage)[0];
    storage[Number(firstElement) + 1] = value;
  } else {
    var lastElement = Object.keys(storage).length - 1;
    storage[Number(lastElement) + 1] = value;
  }
},

Queue.prototype.dequeue = function() {
  if (Object.keys(storage).length !== 0) {
    var deleted = Object.values(storage)[0];
    var deletedKey = Object.keys(storage)[0];
    delete storage[deletedKey];
    return deleted;
  }
  return '';
},

Queue.prototype.size = function() {
  return Object.keys(storage).length;
};



