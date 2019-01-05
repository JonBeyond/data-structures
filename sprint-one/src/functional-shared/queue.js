var Queue = function() {
	//we need a few variables:
	// an object
	// a property of currentSize,
	// a property of storage
	var newQueue = {};
	newQueue.currentSize = 0;
	newQueue.storage = {};
	Object.assign(newQueue, queueMethods);
	return newQueue;
};

var queueMethods = {
	dequeue: function(){
		if (this.currentSize > 0) {
			this.currentSize--;
			let element = this.storage[this.currentSize];
			delete this.storage[this.currentSize];
			return element;
		}
	},
	enqueue: function(val){
		console.log("adding: "+val);
		let tempStorage = this.storage;
		this.storage = {};
		for (let i = 0; i < Object.keys(tempStorage).length+1; i++){
			if (i === 0) {
				this.storage[i] = val;
			} else {
				this.storage[i] = tempStorage[i-1]
			}
		}
		this.currentSize++;
		console.log("storage: "+this.storage[0]);

	},
	size: function(){
		return this.currentSize;
	}
};
