var test1 = new Object();

test1.name = 'Object 1';
/*test1.length = 5;
test1.width = 6;*/

test1.area = function() {
	return test1.length * test1.width;
};
test1.announce = function() {
	return 'I am ' + test1.name + '.\nI have a length of ' + test1.length + '.\nI have a width of ' + test1.width + '.\nThis means my area is ' + test1.area() + '.';
};

/*var test2 = new Object();
test2.name = 'Object 2';
test2.length = 1;
test2.width = 3;
test2.area = function() {
	return test2.length * test2.width;
};
test2.announce = function() {
	return 'I am ' + test2.name + '.\nI have a length of ' + test2.length + '.\nI have a width of ' + test2.width + '.\nThis means my area is ' + test2.area() + '.';
};*/

var test3 = {
	name : "Object 3",
	length : 10,
	width : 6,
	area : function() {
		return this.length * this.width;
	},
	announce : function() {
		return 'I am ' + this.name + '.\nI have a length of ' + this.length + '.\nI have a width of ' + this.width + '.\nThis means my area is ' + this.area() + '.';
	}
};

/*var test4 = {
	name : "Object 4",
	length : 9,
	width : 9,
	area : function() {
		return this.length * this.width;
	},
	announce : function() {
		return 'I am ' + this.name + '.\nI have a length of ' + this.length + '.\nI have a width of ' + this.width + '.\nThis means my area is ' + this.area() + '.';
	}
};*/

var testArray = [test1, /*test2, */test3/*, test4*/];

exports.data = testArray;