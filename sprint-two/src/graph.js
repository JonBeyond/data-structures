

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage.hasOwnProperty(node)) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let key in this.storage) {
    this.removeEdge(node, key);
  }
  delete this.storage[node];
};

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
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var removeFromNode = this.storage[fromNode].indexOf(toNode);
  var removeToNode = this.storage[toNode].indexOf(fromNode);
  if (removeFromNode !== -1 &&  removeToNode !== -1) {
    this.storage[fromNode].splice(removeFromNode, 1);
    this.storage[toNode].splice(removeToNode, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


