var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  jQuery.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  var res = false;
  var traverse = function(tree) {
    tree.children.forEach(function(child) {
      if (child.value === target) {
        res = true;
      }
      if (child.children.length > 0) {
        traverse(child);
      }
    });
  };
  traverse(this);
  return res;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */