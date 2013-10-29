var db = Ti.Database.install('/sql/test', 'test');
var rows = db.execute('SELECT * FROM products');

var items = [];

while (rows.isValidRow()) {

	//console.log(rows.fieldByName("category"));

	/*items.push({
	 properties: {
	 title: "" + rows.fieldByName("category") + ""
	 }
	 });*/

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
	title : "List of Items",
	backgroundColor : "#589"
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
//note: connects the array into the object
section.items = items;
sections.push(section);

console.log(items);

listView.sections = sections;
win.add(listView);
win.open();

rows.close();
db.close();