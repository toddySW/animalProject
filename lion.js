function Lion(name) {
	// body...
	this.name = name;
	this.stomach = [];
}

Lion.prototype.sleep = function() {
	// body...
	console.log('zzzz');
};


Lion.prototype.eat = function(zebra) {
	this.stomach.push(zebra);
};

module.exports = Lion;