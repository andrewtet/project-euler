/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function App(primeToFind){
	var self = this;
	self.prime = 0;
	self.primeToFind = primeToFind;
	self.primesFound = 0;

	self.init = function(){
		self.instructions();
		self.getPrime();
		self.printPrime();
	};

	self.instructions = function(){
		console.log('By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.');
		console.log('What is the 10 001st prime number?');
	};

	self.getPrime = function(){
		self.primesFound = 2; // Accounting for known primes 1 and 2 allowing us to only iterate over idd numbers

		var count = 3; // number to check if it is prime

		while(self.primesFound < self.primeToFind){
			count += 2; // Even numbers cant be prime so they arent checked

			if(self.isPrime(count)){
				self.primesFound++;
			}

		}

		self.prime = count;
	};

	self.isPrime = function(num){
		var isPrime = true;
		var halfNum = Math.ceil(num / 2); // No number is divisable by over half

		for(var i = 2; i <= halfNum; i++){
			if(num % i == 0){
				isPrime = false;
				break;
			}
		}

		return isPrime;
	}

	self.printPrime = function(){
		console.log(self.prime);
	};
};

//Test
var t = new App(6);
t.init(); // Should answer 13

var a = new App(10001);
a.init();
