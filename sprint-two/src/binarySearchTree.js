let someTree = new BinarySearchTree(5);
someTree.insert(4);
debugger;

var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreeMethods)
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;
  return binaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var newNode = Node(value);

  var deeper = function(newNode, current){
    if (newNode.value > current.value) {
        if (current.right === null) {
          current.right = newNode;
        } else {
          deeper(newNode, current.right);
        }
    } else if (newNode.value < current.value) {
        if (current.left === null) {
          current.left = newNode;
      } else {
        deeper(newNode, current.left);
      }
    }
  }
  deeper(newNode, this.binaryTree);
}
    /*var deeper = function(newNode, current) {
      if (newNode.value > current.value) {  //go to the right
        if (newNode.value < current.right.value) {
          let former = current.right;  //save current.right
          current.right = newNode;  // insert newNode.value at current.right
          newNode.right = former;  //add former to the right of newNode.value
        } else {
          deeper(newNode, current.right);
        }
      } else { //go to the left
        if (newNode.value > current.left.value) {
          let former = current.left;  //same process as earlier
          current.left = newNode;
          newNode.left = former;
        } else {
          deeper(newNode, current.left);
        }
    }
    deeper(newNode, this.binaryTree);
  }
}*/

binaryTreeMethods.contains = function(value) {
  }
  
binaryTreeMethods.depthFirstLog = function(cb) {

}

  //constructor function for a node

  var Node = function(value) {
    var node = {};
    node.left = null;
    node.right = null;
    node.value = value;

    return node;
  }

/*
 * Complexity: What is the time complexity of the above functions?
 */


