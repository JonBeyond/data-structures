var Queue = function() {

  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
      let tempStorage = storage;
      storage = {}; //reinitialize and repopulate with one less index as the key
      for (let i = 0; i < Object.keys(tempStorage).length+1; i++){
        if (i === 0) {
          storage[i] = value;
          size++;
        } else {
          storage[i] = tempStorage[i-1];
        }
      }    
  };

  someInstance.dequeue = function() {
    if (size > 0){
      size --;
      let element = storage[size];
      delete storage[size];
      return element;
    }
  };

  someInstance.size = function() {
    if (size < 0 ) size = 0;
    return size;
  };

  return someInstance;
};
