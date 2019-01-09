var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [];
  }
  for (let item of this._storage[index]) {
    if (item[0] === k) {
        item[1] = v;
        return;
    }
  }
  this._storage[index].push([k, v]);
  //create a tuple and add it to an index in the 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let element of this._storage[index]) {
    if (element[0] === k) {
      return element[1]
  }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};

HashTable.prototype.rebalance = function() {
/*
1) we want to check total number of items in the hash table
2) we need to know the limit (number of buckets)
3) we need to check the .length of every item in _storage

tuple count to _storage.length (aka the limit)
*/
  var tupleCount = 0;
  for (let i = 0; i < this._limit) {
    tupleCount += this._storage[index][i].length;
  }
  let ratio = tupleCount / this._limit;
  if (ratio >= 0.75) {
    rebuildHashTable.call(this, this._limit*2);
    
  } else if (ratio <= 0.25) {
    rebuildHashTable.call(this, this._limit/2)
  }

  var rebuildHashTable = function(limit) {
    var previousHash = this;
    var newHashTable = new HashTable(limit);
    
//previousHash._storage[index] => a bucket
//previousHash._storage => array of buckets
    for (let i = 0; i < previousHash._storage.length; i++) {
      for (let j = 0; j < previousHash._storage[i].length; j++) {
      //j is indeed a tuple
        newHashTable.insert(previousHash._storage[i][j]);
      }
    }
      this._limit = limit;
      this._storage = newHashTable._storage;

    }

/*


To prevent excessive collisions, make your hashTable double in size as
   soon as 75 percent of the spaces have been filled
--> rebuild hash table

To save space, make sure the hashTable halves in size when space usage
   falls below 25 percent
--> rebuild hash table
*/
}


/*
 * Complexity: What is the time complexity of the above functions?
 */


