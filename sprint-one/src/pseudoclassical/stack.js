var Stack = function() {
	this.storage = {};
	this.currentSize = 0;
};

Stack.prototype.pop = function(){
	if (this.currentSize > 0){
		this.currentSize--;
		let element = this.storage[this.currentSize];
		return element;
	}
};
Stack.prototype.push = function(val){
	this.storage[this.currentSize] = val;
	this.currentSize++;
};
Stack.prototype.size = function(){
	return this.currentSize;
}

var hello = new Stack();
