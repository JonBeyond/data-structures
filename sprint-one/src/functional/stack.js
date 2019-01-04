var Stack = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {//dont want to try to remove if we cannot!
      size--; //size will always be 1 greater than the index
      let element = storage[size];
      delete storage[size];
     return element;
    }
  };

  someInstance.size = function() {
    if (size < 0) size = 0;
    return size;
  };

  return someInstance;
};
