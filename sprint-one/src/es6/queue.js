class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.currentSize = 0;
  }
  dequeue(){
  	if (this.currentSize > 0){
		this.currentSize--;
		let element = this.storage[this.currentSize];
		delete this.storage[this.currentSize];
		return element;
	}
  }
  enqueue(val){
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
  size(){
  	return this.currentSize;
  }
}