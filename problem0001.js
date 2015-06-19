/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
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
		console.log('If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.');
		console.log('Find the sum of all the multiples of 3 or 5 below 1000.');
	};

	self.getSum = function(){
		for(var i = 0; i < 1000; i++){
			if(i % 3 === 0 || i % 5 === 0){
				self.sum += i;
			}
		}
	}

	self.printSum = function(){
		console.log(self.sum);
	}
};

var a = new App();
a.init();