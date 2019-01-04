var Queue = function() {
  //this is similar to stack but instead of last in last out,
  //    it is first in first out.
  // in other words: items are added into the beginning, and
  //   removed from the end

  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
