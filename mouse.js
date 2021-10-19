function Mouse (name) {
	// body...
    this.name = name;
}


Mouse.prototype.run = function(){
	console.log('running');
};

Mouse.prototype.jump = function(){
	console.log('zzzzzz);
};

module.exports = Mouse;