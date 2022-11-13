// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var res = false;
  this.nodes.forEach(function(value) {
    if ( value === node ) {
      res = true;
    }
  });
  return res;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes.forEach(function(value, i, collection) {
    if ( value === node ) {
      collection.splice(i, 1);
    }
  });
  this.edges.forEach(function(value, i, collection) {
    console.log('value', value);
    console.log('collection', collection);
    console.log('node', node);
    if ( i === node) {
      collection.splice(i, 1);
    }
    if (value.includes(node)) {
      collection.splice(i, 1);
    }
  });

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edges[fromNode].includes(toNode) && this.edges[toNode].includes(fromNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.edges[fromNode].indexOf(toNode);
  var index2 = this.edges[toNode].indexOf(fromNode);
  this.edges[fromNode].splice(index, 1);
  this.edges[toNode].splice(index2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  this.nodes.forEach(function(node) {
    cb.apply(null, arguments);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
