var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  //create interface
  var storage = {};

  // Implement the methods below
  // adds an element to the rear of queue
  someInstance.enqueue = function(value) {
    // var added = '';
    //add edge case if the length is 1 or 0
    if (Object.keys(storage).length === 1) {
      var firstElement = Object.keys(storage)[0];
      storage[firstElement + 1] = value;
    } else {
      var lastElement = Object.keys(storage).length - 1;
      storage[lastElement + 1] = value;
    }
    // added = value;
    // return added;

  };
  // removes element from front of the queue
  someInstance.dequeue = function() {
    // delete storage[0];
    // return storage[0];
    // var deleted = '';
    // for (var key in storage) {
    //   deleted = storage[key];
    //   delete storage[key];
    //   break;
    // }
    var deleted = Object.values(storage)[0];
    delete storage[0];
    return deleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;

};

