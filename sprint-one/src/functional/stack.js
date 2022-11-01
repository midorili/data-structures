var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  //adds to top
  someInstance.push = function(value) {
    if (storage.length === 0) {
      storage[0] = value;
    } else {
      storage[1] = storage[0];
      storage[0] = value;
      // var firstValue = Object.keys(storage)[0];
      // storage[firstValue + 1] = value;
    }

    //check to see key is not 0, if 0, assign another value
    //JSON stringify
    // storage[0] = value;
    // return value;

  };

  //removes from top
  someInstance.pop = function() {
    var deleteKey = Object.keys(storage)[0];
    var deleted = storage[deleteKey];
    delete storage[deleteKey];
    return deleted;
  };

  someInstance.size = function() {
    var length = Object.keys(storage).length;
    return length;
  };

  return someInstance;
};
