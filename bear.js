function Bear(name) {
	// body...
    this.name = name;
    this.stomach = [];
}

Bear.prototype.eat = function(honey) {
	this.stomach.push(honey);
};

module.exports = Bear;