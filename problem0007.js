/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function App(largest, smallest){
	var self = this;
	self.difference = 0;
	self.sumOfSquares = 0;
	self.squareOfSums = 0;
	self.largestNumber = largest;
	self.smallestNumber = smallest;

	self.init = function(){
		self.instructions();
		self.getSquareOfSums();
		self.getSumOfSquares();
		self.getDifference();
		self.printDifference();
	};

	self.instructions = function(){
		console.log('The sum of the squares of the first ten natural numbers is,');
		console.log('12 + 22 + ... + 102 = 385');
		console.log('The square of the sum of the first ten natural numbers is,');
		console.log('(1 + 2 + ... + 10)2 = 552 = 3025');
		console.log('Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.');
		console.log('Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.');
	};

	self.getSquareOfSums = function(){
		var sum = 0;

		for(var i = self.smallestNumber; i <= self.largestNumber; i++){
			sum += Number(i);
		}

		self.squareOfSums = Math.pow(sum,2);
	};

	self.getSumOfSquares = function(){
		var sum = 0;

		for(var i = self.smallestNumber; i <= self.largestNumber; i++){
			sum += Math.pow(i,2);
		}

		self.sumOfSquares = sum;
	};

	self.getDifference = function(){
		self.difference = self.squareOfSums - self.sumOfSquares;
	};

	self.printDifference = function(){
		console.log(self.difference);
	};
};

//Test
//var t = new App(10,1);
//t.init(); // Should answer 2640

var a = new App(100,1);
a.init();
