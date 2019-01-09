var BinarySearchTree = function(value) {
  var treeRoot = Object.create(binaryTreeMethods)
  treeRoot.left = null;
  treeRoot.right = null;
  treeRoot.value = value;
  return treeRoot;
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
  deeper(newNode, this);
}


binaryTreeMethods.contains = function(target) {
  var checkDeeper = function (currentNode) {
    if (target > currentNode.value){
      //go right
      if (currentNode.right === null){
        return false;
      } else if (currentNode.right.value === target){
        return true;
      } else {
        return checkDeeper(currentNode.right);
      }
    } else {
      //go left
      if (currentNode.left === null) {
        return false;
      } else if (currentNode.left.value === target) {
          return true;
      } else {
          return checkDeeper(currentNode.left);
      }
    }
    
  }
  // debugger;
  return checkDeeper(this); 
  
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

var someTree = BinarySearchTree(5);
someTree.insert(2);
someTree.insert(3);
someTree.insert(7);
someTree.insert(6);
console.log(someTree);


//debugger;



    /* the below implementation of "insert" creates an incorrect binary tree


      var deeper = function(newNode, current) {
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
