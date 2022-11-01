var Queue = function(property) {

  this.property = property;
};


var storage = {};

Queue.prototype.enqueue = function(value) {
  if (Object.keys(storage).length === 0) {
    storage[0] = value;
  } else if (Object.keys(storage).length === 1) {
    var firstElement = Object.keys(storage)[0];
    storage[firstElement + 1] = value;
  } else {
    var lastElement = Object.keys(storage).length - 1;
    storage[lastElement + 1] = value;
  }
},

Queue.prototype.dequeue = function() {
  var deleted = Object.values(storage)[0];
  delete storage[0];
  return deleted;
},

Queue.prototype.size = function() {
  return Object.keys(storage).length;
};



