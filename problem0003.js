/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function App(){
	var self = this;
	self.largestFactor = 0;
	self.number = 600851475143;

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

		var workingNumber = self.number;
		var divBy = [];

		while(workingNumber > 1){
			for(var i = 2; i <= workingNumber; i++){
				if(workingNumber % i === 0){
					divBy.push(i);
					workingNumber = workingNumber / i;
					break;
				}
			}
		}

		self.largestFactor = Math.max.apply(null, divBy);

	}

	self.printFactor = function(){
		console.log(self.largestFactor);
	}
};

var a = new App();
a.init();