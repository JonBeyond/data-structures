var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size] = value;
    someInstance.size();
  };

  someInstance.pop = function() {
    let element = storage[someInstance.size]
    someInstance.size();
    return element;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
