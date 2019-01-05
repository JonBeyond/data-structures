var Queue = function() {
	this.storage = {};
	this.currentSize = 0;
};

Queue.prototype.enqueue = function(val){
	let tempStorage = this.storage;
	this.storage = {};
	for (let i = 0; i < Object.keys(tempStorage).length + 1; i++){
		if (i === 0){
			this.storage[i] = val;
		} else {
			this.storage[i] = tempStorage[i-1];
		}
	}
	this.currentSize++;
}
Queue.prototype.dequeue = function(){
	if (this.currentSize > 0){
		this.currentSize--;
		let element = this.storage[this.currentSize];
		delete this.storage[this.currentSize];
		return element;
	}
}
Queue.prototype.size = function(){
	return this.currentSize;
}
