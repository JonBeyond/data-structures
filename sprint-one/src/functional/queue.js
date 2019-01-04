var Queue = function() {
  //this is similar to stack but instead of last in last out,
  //    it is first in first out.
  // in other words: items are added into the beginning, and
  //   removed from the end
  // we should add items at the end, and remove them from the beginning

  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0){ //only if we have an item in the queue
      size --;
      let element = storage[0];
      delete storage[0];
      return element;
    }
  };

  someInstance.size = function() {
    if (size < 0 ) size = 0;
    return size;
  };

  return someInstance;
};
