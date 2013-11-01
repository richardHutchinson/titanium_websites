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

// -- model complete

var win = Ti.UI.createWindow({
	modal: true
});

if (Ti.UI.iOS) {
	var listView = Ti.UI.createListView({
		backgroundColor : "#035",
		top : 20
	});
} else {
	var listView = Ti.UI.createListView({
		backgroundColor : "#035"
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
win.add(listView);
win.open();

rows.close();
db.close();