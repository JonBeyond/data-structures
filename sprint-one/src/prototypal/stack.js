var Stack = function() {
	var anInstance = Object.create(stackMethods);
	anInstance.storage = {};
	anInstance.currentSize = 0;
	return anInstance;
};

var stackMethods = {

};

stackMethods.pop = function() {
	if (this.currentSize > 0){
		this.currentSize--;
		let element = this.storage[this.currentSize];
		delete this.storage[this.currentSize];
		return element;
	}
};

stackMethods.push = function(val) {
	this.storage[this.currentSize] = val;
	this.currentSize++;
};

stackMethods.size = function() {
	return this.currentSize;
};