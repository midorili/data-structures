var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  extend(someInstance, queueMethods);

  return someInstance;

};

var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var storage = {};

var queueMethods = {

  enqueue: function(value) {
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

  dequeue: function() {
    var deleted = Object.values(storage)[0];
    delete storage[0];
    return deleted;
  },

  size: function() {
    return Object.keys(storage).length;
  }

};


