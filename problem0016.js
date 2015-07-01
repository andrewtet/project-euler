/*

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/

function App(num, pow){
	var self = this;
	self.num = num;
	self.pow = pow;
	self.numToPow = 0;
	self.answer = 0;

	self.init = function(){

		self.startTime = new Date().getTime();

		self.instructions();
		self.getNumToPow();
		self.sumN2P();;
		self.printSum();

	};

	self.instructions = function(){
		console.log('2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.');
		console.log('What is the sum of the digits of the number 2^1000?');
	};

	self.getNumToPow = function(){

		var num = self.num;

		for(var i = 0; i < self.pow - 1; i++){
			num = self.strintTimesTwo(num);
		}

		self.numToPow = num;
	};

	/*
	Function to multiply a string by two since JS cant print full numbers bigger than INT
	*/
	self.strintTimesTwo = function(strint){
		var sArr = strint.toString().split('').reverse();
		var string = '';
		var toAdd = 0;

		sArr.forEach(function(el){
			var numTimesTwo = (Number(el) * 2) + toAdd;
			var stringTimesTwo = numTimesTwo.toString();
			var digit = '';

			if(numTimesTwo > 9){
				var numSplit = stringTimesTwo.split('');
				digit = numSplit[numSplit.length - 1];
				toAdd = 1;
			} else {
				digit = stringTimesTwo;
				toAdd = 0;
			}

			string += digit;
		});

		if(toAdd == 1){
			string += '1';
		}

		return string.split('').reverse().join('');
	}

	self.sumN2P = function(){
		var sum = 0;
		self.numToPow.toString().split('').forEach(function(el){
			sum += Number(el);
		});

		self.answer = sum;
	};

	self.printSum = function(){
		console.log(self.answer);

		self.endTime = new Date().getTime();

		console.log('Run Time: ' + (self.endTime - self.startTime) + ' ms');
	};
};

// var t = new App(2, 15);
//  t.init(); // 26

var a = new App(2,1000);
a.init();

