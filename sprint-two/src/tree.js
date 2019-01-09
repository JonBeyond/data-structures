var Tree = function(value) {
  //var treeRoot = Object.create(treeMethods);
  var treeRoot = {};
  treeRoot.value = value;
  treeRoot.children = [];
  treeRoot.parent = null;
  Object.assign(treeRoot, treeMethods);
  return treeRoot;
/*
treeRoot.addChild = function(value) {
  let childTree = Tree(value); //why does let not work?
  this.children.push(childTree);
};
*/


};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let childTree = Tree(value); //why does let not work?
  childTree.parent = this;
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
