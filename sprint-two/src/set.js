var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //check if array contains item we're trying to find
  if (this._storage.indexOf(item) === -1) {
    // if not we add it
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  //console.log(this._storage);
  if (this._storage.indexOf(item) !== -1) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  //find item index with indexOf
  var index = this._storage.indexOf(item);
  if (index !== -1) {
    //if found, this._storage.splice(index, 1)
    this._storage.splice(index, 1);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */