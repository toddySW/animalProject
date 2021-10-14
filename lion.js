function Lion(name) {
	// body...
	this.name = name;
}

Lion.prototype.sleep = function() {
	// body...
	console.log('zzzz');
};

module.exports = Lion;