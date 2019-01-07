var Tree = function(value) {
  
  var newTree = Object.create(treeMethods);
  //var newTree = {};
  newTree.value = value;

  newTree.children = [];
  
  //Object.assign(newTree, treeMethods);
  
  return newTree;
/*
newTree.addChild = function(value) {
  let childTree = Tree(value); //why does let not work?
  this.children.push(childTree);
};
*/


};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value); //why does let not work?
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
