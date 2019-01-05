var Queue = function() {
	var anInstance = Object.create(queueMethods);
	anInstance.storage = {};
	anInstance.currentSize = 0;
	return anInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val){
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
queueMethods.dequeue = function(){
	if (this.currentSize > 0){
		this.currentSize--;
		let element = this.storage[this.currentSize];
		delete this.storage[this.currentSize];
		return element;
	}
}
queueMethods.size = function(){
	return this.currentSize;
}
