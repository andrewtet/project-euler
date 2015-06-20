/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/


function App(sum){
	var self = this;
	self.sum = sum; // Sum we're looking for;
	self.product = 0;
	self.a = 0;
	self.b = 0;
	self.c = 0;

	self.init = function(){
		self.instructions();
		self.getABC();
		self.getProduct();
		self.printProduct();
	};

	self.instructions = function(){
		console.log('A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,');
		console.log('a2 + b2 = c2');
		console.log('For example, 32 + 42 = 9 + 16 = 25 = 52.');
		console.log('There exists exactly one Pythagorean triplet for which a + b + c = 1000.');
		console.log('Find the product abc.');
	};

	self.getABC = function(){

		// Compacting these down fo readability
		for(var a = 1; a <= self.sum; a++){
		for(var b = 1; b <= self.sum; b++){
		for(var c = 1; c <= self.sum; c++){

			if( a < b && b < c){
				if(a + b + c === self.sum){
					var aSq = Math.pow(a,2);
					var bSq = Math.pow(b,2);
					var cSq = Math.pow(c,2);
					if(aSq + bSq === cSq ){

						self.a = a;
						self.b = b;
						self.c = c;

					}
				}
			}

		}}}
	};

	self.getProduct = function(){
		self.product = self.a * self.b * self.c;
	};

	self.printProduct = function(){
		console.log(self.product);
	};
};

//Test
//var t = new App(12);
//t.init();

var a = new App(1000);
a.init();
