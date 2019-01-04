var Stack = function() {
	var anInstance = {};
	anInstance.size = 0;
	anInstance.storage = {}; // store the storage as a property for access
	anInstance = Object.assign(anInstance, stackMethods); //this will add a reference to stackMethods
	return anInstance;
};

var stackMethods = {
	pop: function (){
		if (this.size > 0){
			let element = this.storage[this.size];
			delete this.storage[this.size];
			return element;
		}
	},
	push: function (val){
		//add to the end
		this.storage[this.size] = val;
		this.size++;
	},
	size: function(){
		return this.size; //adjust size
	}

};
