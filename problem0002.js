/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function App(){
	var self = this;
	self.sum = 0;

	self.init = function(){
		self.instructions();
		self.getSum();
		self.printSum();
	};

	self.instructions = function(){
		console.log('Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:');
		console.log('1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...');
		console.log('By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.');
	};

	self.getSum = function(){
		var lastTwo = [1,1]; // seed with one and one

		while(lastTwo[1] < 4000000){
			var nextNum = lastTwo[0] + lastTwo[1];

			if(nextNum % 2 === 0){
				self.sum += nextNum;
			}

			lastTwo.splice(0,1);
			lastTwo.push(nextNum);
		}
	}

	self.printSum = function(){
		console.log(self.sum);
	}
};

var a = new App();
a.init();