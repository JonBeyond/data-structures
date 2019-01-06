var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null){
      list.head = Node(value);
      list.tail = list.head;
    } else {
      let formerTail = list.tail;
      list.tail = Node(value);
      formerTail.next = list.tail;
    }
  };

  list.removeHead = function() {
    if (list.head === list.tail) {
      let element = list.head.value;
      list.head = null;
      list.tail = null;
      return element;
    } else {
      let element = list.head.value;
      list.head = list.head.next;
      return element;
    }
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    } else if (list.head === list.tail) {
      return false;
    } else {
      //store the current head
      //we would increment the head (somehow TBD)
      //we would call contains with the new head
      //  if (contains (newhead))
      //     -> set head equal to the original head
      //     -> return true;
      //  else 
      //      set the head equal the origin
      //        return false
      
    }
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
