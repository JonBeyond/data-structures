

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};
//constant

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage.hasOwnProperty(node)) {
    return true;
  }
  return false;
};
//constant

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let key in this.storage) {
    this.removeEdge(node, key);
  }
  delete this.storage[node];
};
//linear

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode]) {
    var fromNodeHas = this.storage[fromNode].includes(toNode);
  }
  if (this.storage[toNode]) {
    var toNodeHas = this.storage[toNode].includes(fromNode);
  }
  if (fromNodeHas && toNodeHas) {
    return true;
  }
  return false;
  //linear or constant? relative to size of the storage container, 
//constant


};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(Number(toNode));
  this.storage[toNode].push(Number(fromNode));
  //constant
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var removeFromNode = this.storage[fromNode].indexOf(toNode);
  var removeToNode = this.storage[toNode].indexOf(fromNode);
  if (removeFromNode !== -1 &&  removeToNode !== -1) {
    this.storage[fromNode].splice(removeFromNode, 1);
    this.storage[toNode].splice(removeToNode, 1);
  }
  //constant
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //debugger;
  for (let node in this.storage) {
    
    cb.call(this, node);
    //let boundfunc = cb.bind(this);
    //boundfunc(key);
    //the above also works
  }

};
//linear

/*
 * Complexity: What is the time complexity of the above functions?
//answered within each method;
 */

// var graph = new Graph();

// var connectToFive = function(item) {
//   graph.addEdge(item, 5);
// };
// graph.addNode(5);
// graph.addNode(2);
// graph.addNode(1);
// graph.addNode(3);
// graph.forEachNode(connectToFive);
// console.log(JSON.stringify(graph));
// console.log(graph.hasEdge(2, 5) === true);

["1", "2"]
