function horse() {
	
}

horse.prototype.jump = function (){
	console.log('jumping...')
};

horse.prototype.run = function (){
	console.log('running');
};

module.exports = horse;