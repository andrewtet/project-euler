/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function App(){
	var self = this;
	self.largestPalindrome = 0;
	self.largestNumber = 999;
	self.smallestNumber = 100;

	self.init = function(){
		self.instructions();
		self.getPalindrome();
		self.printPalindrome();
	};

	self.instructions = function(){
		console.log('A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.');
		console.log('Find the largest palindrome made from the product of two 3-digit numbers.');
	};

	self.getPalindrome = function(){

		for(var i = self.largestNumber; i > self.smallestNumber; i--){
			
			for(var j = self.largestNumber; j > self.smallestNumber; j--){
				var prod = (i * j).toString();
				var prodRev = prod.split('').reverse().join('');

				if( Number(prod) > self.largestPalindrome &&
					prod === prodRev){
					self.largestPalindrome = Number(prod);
				}
			}
		}
	}

	self.printPalindrome = function(){
		console.log(self.largestPalindrome);
	}
};

var a = new App();
a.init();