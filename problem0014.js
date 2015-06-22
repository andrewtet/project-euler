/*

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

*/

function App(largestNumber){
	var self = this;
	self.number = 0;
	self.largestNumber = largestNumber;

	self.startTime = null;
	self.endTime = null;

	self.init = function(){

		self.startTime = new Date().getTime();

		self.instructions();
		self.getNumber();
		self.printNumber();

	};

	self.instructions = function(){
		console.log('The following iterative sequence is defined for the set of positive integers:');
		console.log('n → n/2 (n is even)');
		console.log('n → 3n + 1 (n is odd)');
		console.log('Using the rule above and starting with 13, we generate the following sequence:');
		console.log('13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1');
		console.log('It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.');
		console.log('Which starting number, under one million, produces the longest chain?');
	};

	self.getNumber = function(){
		var mostCycles = {num: 1, cycles: 1};

		for(var i = self.largestNumber; i > 1; i--){
			var cycles = self.runCollatz(i);

			if(cycles > mostCycles.cycles){
				mostCycles = {num: i, cycles: cycles};
			}
		}
		self.number = mostCycles.num;

	};

	self.runCollatz = function(num){
		var workingNumber = num;
		var i = 0;
		var arr = [];

		while(workingNumber > 1){
			workingNumber = self.runSingleCollatz(workingNumber);
			arr.push(workingNumber);
			i++;
		}

		return i;

	};

	self.runSingleCollatz = function(num){
		var rtn;

		if(num % 2 === 0){
			rtn = num / 2;
		} else {
			rtn = num * 3 + 1;
		}

		return rtn;

	};

	self.printNumber = function(){
		console.log(self.number);

		self.endTime = new Date().getTime();

		console.log('Run Time: ' + (self.endTime - self.startTime) + ' ms');
	};
};

// var t = new App(10);
// t.init();

var a = new App(1000000);
a.init();
