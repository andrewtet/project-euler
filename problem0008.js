/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function App(largest, smallest){
	var self = this;
	self.smallestMultiple = 0;
	self.factors = {};
	self.maxFactors = {};
	self.largestNumber = largest;
	self.smallestNumber = smallest;

	self.init = function(){
		self.instructions();
		self.getFactors();
		self.getMaxFactors();
		self.getMultiple();
		self.printMultiple();
	};

	self.instructions = function(){
		console.log('2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.');
		console.log('What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?');
	};

	self.getFactors = function(){
		for(var i = self.smallestNumber; i <= self.largestNumber; i++){
			var arr = self.factorNumber(i);
			self.factors[i] = self.getFactorCount(arr);
		}
	}

	self.getMaxFactors = function(){
		for(f in self.factors){
			var thisFactor = self.factors[f];
			for(n in thisFactor){
				if(!self.maxFactors[n] ||
					self.maxFactors[n] < thisFactor[n]){
					self.maxFactors[n] = thisFactor[n];
				}
			}
		}
	}

	self.factorNumber = function(num){
		
		if(num === 1 || num === 2){
			return [num];
		}

		var workingNumber = num;
		var factors = [];

		while(workingNumber > 1){
			for(var i = 2; i <= workingNumber; i++){
				if(workingNumber % i === 0){
					workingNumber = workingNumber / i;
					factors.push(i);
					break;
				}
			}
		}

		return factors;
	};

	self.getFactorCount = function(arr){
		var counts = {};

		for(var i = 0; i < arr.length; i++){
			var num = arr[i];
			counts[num] = counts[num] ? counts[num]+1 : 1;
		}

		return counts;
	}

	self.getMultiple = function(){
		var multiple = 1;

		for(n in self.maxFactors){
			console.log(self.maxFactors[n]);
			multiple *= Math.pow(n, self.maxFactors[n]);
		}

		self.smallestMultiple = multiple;
	}

	self.printMultiple = function(){
		console.log(self.smallestMultiple);
	}
};

//Test
//var t = new App(10,1);
//t.init();

var a = new App(20,1);
a.init();
