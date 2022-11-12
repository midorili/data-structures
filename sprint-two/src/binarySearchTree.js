var BinarySearchTree = function(value) {
  var tree = {};
  tree.left = null;
  tree.right = null;
  tree.value = value;
  // .left property, a binary search tree (BST) where all values are lower than the current value.
  // .right property, a BST where all values are higher than the current value.
  // .insert() method, which accepts a value and places it in the tree in the correct position.
  tree.insert = function(value) {

    var innerFunction = function(tree) {
      if (value < tree.value) {
        if (tree.left === null) {
          tree.left = BinarySearchTree(value);
        } else {
          innerFunction(tree.left);
        }
      } else {
        if ( tree.right === null) {
          tree.right = BinarySearchTree(value);
        } else {
          innerFunction(tree.right);
        }
      }
    };
    innerFunction(tree);
  };
  // .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  tree.contains = function(target) {
    var traverse = function(tree) {
      // console.log(tree);
      if (tree.value === target) {
        return true;
      } else if (tree.left !== null && tree.left.value >= target) {
        return traverse(tree.left);
      } else if (tree.right !== null && tree.right.value <= target) {
        return traverse(tree.right);
      } else {
        return false;
      }
    };
    return traverse(tree);
  };
  // .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  tree.depthFirstLog = function(cb) {
    //create inner function and check if values != null
    var traverse = function(tree) {
      if (tree.value) {
        cb.call(null, tree.value);
      }
      if (tree.left !== null) {
        traverse(tree.left);
      }
      if (tree.right !== null) {
        traverse(tree.right);
      }
    };
    traverse(tree);
  };
  return tree;

};

//Complexity: What is the time complexity of the above functions?
//hi//