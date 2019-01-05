class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.currentSize = 0;
  }
  pop(){
	if (this.currentSize > 0){
		this.currentSize--;
		let element = this.storage[this.currentSize];
		return element;
	}
  }
  push(val){
  	this.storage[this.currentSize] = val;
	this.currentSize++;
  }
  size(){
  	return this.currentSize;
  }


}