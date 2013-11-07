//note: model start
var db = Ti.Database.install('/sql/test', 'test');
db.execute('CREATE TABLE IF NOT EXISTS products (quantity NUMERIC, productName TEXT, productId INTEGER PRIMARY KEY, category TEXT)');
var rows = db.execute('SELECT * FROM products');

var items = [];

while (rows.isValidRow()) {
	
	//console.log(rows.fieldByName("category"));
	
	var item = {
		properties : {
			title : "" + rows.fieldByName("category") + "",
			color : "#000",
			font : {
				fontSize : 20,
				fontWeight : "bold"
			},
			backgroundColor : "#248"
		}
	};

	items.push(item);

	//console.log(item);
	rows.next();
}
//note: model end

Ti.UI.setBackgroundColor("#689");

var win = Ti.UI.createWindow({
	backgroundColor: "#579"
});

//note: start form
var formView = Ti.UI.createView({
	height: 300,
	width: "100%",
	top: 0,
	backgroundColor: "#046"
});

var textField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: 10,
	left: 10,
	width: 250,
	height: 60
});
//note: end form

//note: start select data

var selectView = Ti.UI.createView({
	height: "100%", //note: 300 for testing
	width: "100%",
	top: 300,
	backgroundColor: "#555"
});

if(Ti.UI.iOS) {
	var listView = Ti.UI.createListView({
		height: "100%",
		backgroundColor: "#035"
	});
}else {
	var listView = Ti.UI.createListView({
		heght: "100%",
		backgroundColor: "#035"
	});
}

var sections = [];
//note: returns an object
var section = Ti.UI.createListSection();
//note: connects the array to the object
section.items = items;
//note: pushes the array object into the array - ex: [{[]}]
sections.push(section);

//console.log(sections);

//note: connects the array to the object
listView.sections = sections;
//note: adds the array object to the win object - ex: [{[{[]}]}]
//note: end select data

formView.add(textField);
selectView.add(listView);

win.add(formView);
win.add(selectView);
win.open();

rows.close();
db.close();