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

treeMethods.traverse = function(cb){
  //iterates through every element, performing cb(value)
  var traverser = function(node) {
    if(node.value !== undefined){
      cb(node.value);
    }

    for (let child of node.children) {
      traverser(child);
    }
  }
  traverser(this);
}

treeMethods.removeFromParent = function(target) {
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      //remove parent
      //this.children[i].parent = null;
      this.children.splice(i,1);
      return;
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
