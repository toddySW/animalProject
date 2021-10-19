function Mouse (name) {
	// body...
    this.name = name;
}

Mouse.prototype.run = function(){
	console.log('running');
}

module.exports = Mouse;