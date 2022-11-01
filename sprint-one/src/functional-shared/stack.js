var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  extend(someInstance, stackMethods);
  // var storage = {};

  return someInstance;

};

var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};
var storage = {};


var stackMethods = {

  push: function(value) {
    if (storage.length === 0) {
      storage[0] = value;
    } else {
      storage[1] = storage[0];
      storage[0] = value;
    }
  },

  //removes from top
  pop: function() {
    var deleteKey = Object.keys(storage)[0];
    var deleted = storage[deleteKey];
    delete storage[deleteKey];
    return deleted;
  },

  size: function() {
    var length = Object.keys(storage).length;
    return length;
  }
};


