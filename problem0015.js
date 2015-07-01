/*

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

*/

function App(gridHeight){
	var self = this;
	self.gh = gridHeight;
	self.gw = gridHeight;
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
		self.getNumberFromMatrix();
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
		var matrix = matrix;
		var passes = matrix.length - 1;

		for(var i = 0; i < passes; i++){
			var m = self.addMatrixSinglePass(matrix);
			matrix = m;
		}

		self.matrix = matrix;
	}

	self.addMatrixSinglePass = function(matrix){
		var matrixTwo = [];

		for(var i = 0; i < matrix.length; i++){
			var row = [];
			//j = width
			//i = height
			for(var j = 0; j < matrix[i].length; j++){


				var aboveVal = (matrix[i - 1])? matrix[i - 1][j] : 0;
				var leftVal = row[row.length - 1] || 0;

				row.push(Math.max(leftVal + aboveVal, 1));
			}
			matrixTwo.push(row);
		}
		return matrixTwo;
	}

	self.getNumberFromMatrix = function(){
		var x = self.matrix.length - 1;
		self.paths = self.matrix[x][x];
	}

	self.printPaths = function(){
		console.log(self.paths);

		self.endTime = new Date().getTime();

		console.log('Run Time: ' + (self.endTime - self.startTime) + ' ms');
	};
};

// var t = new App(2);
// t.init(); // 6
// var t = new App(3);
// t.init(); // 20
// var t = new App(4);
// t.init(); // 70

var a = new App(20);
a.init();
