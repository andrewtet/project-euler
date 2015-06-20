/*
The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450

Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
*/

// Normally I would enter this into the class, but for readability I'm putting it in a variable up here
var numString = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';


function App(numDigits, string){
	var self = this;
	self.searchString = string;
	self.numDigits = numDigits;
	self.product = 0;

	self.init = function(){
		self.instructions();
		self.getProduct();
		self.printProduct();
	};

	self.instructions = function(){
		console.log('The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.');
		console.log(self.searchString);
		console.log('Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?');
	};

	self.getProduct = function(){
		for(var i = 0; i <= self.searchString.length - self.numDigits; i++){
			
			var split = self.searchString.substr(i, self.numDigits);

			if(split.indexOf('0') > -1){
				// if string contains 0, product will be 0
				// no need to calculate it
				continue;
			}

			var prod = 1;
			var splitArr = split.split('');
			for(var j = 0; j < splitArr.length; j++){
				prod *= Number(splitArr[j]);
			}

			if(prod > self.product){
				self.product = prod;
			}
		}
	}

	self.printProduct = function(){
		console.log(self.product);
	}
};

//Test
//var t = new App(4, numString);
//t.init();

var a = new App(13, numString);
a.init();
