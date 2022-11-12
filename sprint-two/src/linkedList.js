var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    // check if the list is empty
    //create node set to the value
    var newNode = Node(value);
    //if empty, the first node is the head and tail
    if (list.tail === null) {
      list.head = list.tail = newNode;
    } else {
      var currTail = list.tail;
      currTail.next = list.tail = newNode;
    }
    //old tail = the new node we just added
  };

  list.removeHead = function() {
    //should return value of former head
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target) {
    //traverse the list to look for target value using recursion
    var traverse = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next !== null) {
        return traverse(node.next);
      } else {
        return false;
      }
    };
    return traverse(list.head);
    //create inner function that takes in a node
    // in inner function, check if node.value === target
    //if = target, true
    // else if, make recursive call
    //return false
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */