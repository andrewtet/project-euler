/*

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

*/

function App(gridHeight, gridWidth){
	var self = this;
	self.gh = gridHeight;
	self.gw = gridWidth;
	self.matrix = [];
	self.paths = 0;

	self.startTime = null;
	self.endTime = null;

	self.init = function(){

		self.startTime = new Date().getTime();

		self.instructions();
		self.getPaths();
		self.printPaths();

	};

	self.instructions = function(){
		console.log('Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.');
		console.log('How many such routes are there through a 20×20 grid?');
	};

	self.getPaths = function(){
		var m = self.createMatrix(self.gh + 1, self.gw + 1);
		var x = self.populateMatrix(m);
	};

	self.createMatrix = function(gh, gw){
		var matrix = [];

		for(var i = 0; i < gh; i++){
			var row = [];

			for(var j = 0; j < gw; j++){
				row.push(1);
			}
			matrix.push(row);
		}

		return matrix;
	}

	self.populateMatrix = function(matrix){
		console.log(matrix);
		var popMatrix = matrix.slice(); // copy array by value

		for(var i = 0; i < matrix.length; i++){
			//j = width
			//i = height
			for(var j = 0; j < matrix[i].length; j++){

				try{
					var aboveVal = matrix[i - 1][j];
					if(!aboveVal){aboveVal = 0;} // check for undefined
				} catch(err){
					var aboveVal = 0;
				}
				try{
					var leftVal = matrix[i][j - 1];
					if(!leftVal){leftVal = 0;} // check for undefined
				} catch(err){
					var leftVal = 0;
				}

				console.log(leftVal, aboveVal);

				//popMatrix[i][j] = leftVal + aboveVal;
			}
		}

		console.log(popMatrix);
	}

	self.printPaths = function(){
		//console.log(self.paths);

		self.endTime = new Date().getTime();

		console.log('Run Time: ' + (self.endTime - self.startTime) + ' ms');
	};
};

var t = new App(2, 2);
t.init(); // 6
// var t = new App(3, 3);
// t.init(); // 20
// var t = new App(4, 4);
// t.init(); // 70

// var a = new App(1000000);
// a.init();
