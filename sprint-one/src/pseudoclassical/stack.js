var Stack = function(property) {
  this.property = property;
};

var storage = {};
Stack.prototype.push = function(value) {
  if (storage.length === 0) {
    storage[0] = value;
  } else {
    storage[1] = storage[0];
    storage[0] = value;
  }
},


Stack.prototype.pop = function() {
  var deleteKey = Object.keys(storage)[0];
  var deleted = storage[deleteKey];
  delete storage[deleteKey];
  return deleted;
},

Stack.prototype.size = function() {
  var length = Object.keys(storage).length;
  return length;
};
