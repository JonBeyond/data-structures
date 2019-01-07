var Set = function() {
  // var set = {}; 
  // Object.assign(set, setPrototype)
  // the below line of code is the same as the above two lines
  var set = Object.create(setPrototype);

  set.storage = {}; // was set._storage
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

let aSet = Set();
aSet.add('hello');
console.log(JSON.stringify(aSet));