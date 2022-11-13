var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  // var storage = {};
  extend(someInstance, queueMethods);

  console.log('creating new queue w/ storage');
  console.log(storage);
  return someInstance;

};


// var queue = Queue();

var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var storage = {};
var queueMethods = {

  enqueue: function(value) {
    // if (Object.keys(storage).length !== 0) {
    //   var lastElement = Object.keys(storage).length - 1;
    //   return storage[lastElement + 1] = value;
    // } else {
    //   return storage[0] = value;
    // }
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

  dequeue: function() {

    if (Object.keys(storage).length !== 0) {
      var deleted = Object.values(storage)[0];
      var deletedKey = Object.keys(storage)[0];
      delete storage[deletedKey];
      return deleted;
    }
    return '';


  },

  size: function() {

    return Object.keys(storage).length;
  }

};





// console.log(queue);
// debugger;
// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// console.log(queue.size());

//(1);

// console.log(storage)