/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function App(){
	var self = this;
	self.largestFactor = 0;
	self.number = 20;

	self.init = function(){
		self.instructions();
		self.getFactor();
		self.printFactor();
	};

	self.instructions = function(){
		console.log('The prime factors of 13195 are 5, 7, 13 and 29.');
		console.log('What is the largest prime factor of the number 600851475143');
	};

	self.getFactor = function(){
		console.log(self.number);

		var divBy = [];

		for(var i = 0; i < self.number/2; i++){
			if(self.number % i === 0){
				divBy.push(i);
			}
		}

		divBy.reverse();

		var numToCheck = divBy.splice.splice(0, 1)

	}

	self.printFactor = function(){
		//console.log(self.sum);
	}
};

var a = new App();
a.init();