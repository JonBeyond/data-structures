var Stack = function() {
	var anInstance = {};
	anInstance.currentSize = 0;
	anInstance.storage = {};
	Object.assign(anInstance, stackMethods);
	return anInstance;
};

var stackMethods = {
	pop: function (){
		if (this.currentSize > 0){
			this.currentSize--;
			let element = this.storage[this.currentSize];
			delete this.storage[this.currentSize];
			return element;
		}
	},
	push: function (val){
		//add to the end
		this.storage[this.currentSize] = val;
		this.currentSize++;
	},
	size: function(){
		return this.currentSize; //adjust size
	}

};
