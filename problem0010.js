/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/


function App(largest, smallest){
	var self = this;
	self.sum = 0;
	self.largestNumber = largest;
	self.smallestNumber = smallest;

	self.init = function(){
		self.instructions();
		self.getSum();
		self.printSum();
	};

	self.instructions = function(){
		console.log('The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.');
		console.log('Find the sum of all the primes below two million.');
	};

	self.getSum = function(){

		self.sum = 2; // Priming with 2 allows us to start at 3 and skip all even numbers 
		for(var i = 3; i <= self.largestNumber; i+= 2){
			if(self.isPrime(i)){
				self.sum += i;
			}
		}
	};


	self.isPrime = function(num){
		// One and two are prime and mess up the check so they get a special case
		if( num === 1){
			return false;
		}
		if( num === 2){
			return true;
		}

		var isPrime = true;

		for(var i = 2; i <= Math.sqrt(num); i++){
			if(num % i == 0){
				isPrime = false;
				break;
			}
		}

		return isPrime;
	};

	self.printSum = function(){
		console.log(self.sum);
	};
};

//Test
// var t = new App(10,1);
// t.init();

var a = new App(2000000, 1);
a.init();
