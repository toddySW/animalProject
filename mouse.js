function Mouse (name) {
	// body...
    this.name = name;
}

Mouse.prototype.sleep = function(){
	console.log('zzzzzz);
}

module.exports = Mouse;