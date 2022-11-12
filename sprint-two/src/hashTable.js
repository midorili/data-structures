var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    var array = [];
    var tuple = [k, v];
    array.push(tuple);
    this._storage.set(index, array);
  } else {
    var keyFound = false;
    for (var i = 0; i < this._storage.get(index).length; i ++) {
      if ((this._storage.get(index))[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        keyFound = true;
        break;
      }
    }
    if (!keyFound) {
      this._storage.get(index).push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i ++) {
    if ((this._storage.get(index))[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, i, storage) {
    if (i === index) {
      for (var j = 0; j < storage[i].length; j ++) {
        // console.log(storage[i][j]);
        if (storage[i][j][0] === k) {
          storage[i].splice(j, 1);
        }
      }
    }
  }
  );
};
/*
 * Complexity: What is the time complexity of the above functions?
 */