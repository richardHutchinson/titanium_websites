//note: model start
var db = Ti.Database.install('/sql/test', 'test');
db.execute('CREATE TABLE IF NOT EXISTS products (quantity NUMERIC, productName TEXT, productId INTEGER PRIMARY KEY, category TEXT)');
var rows = db.execute('SELECT * FROM products');
//insert
//update
//delete

var items = [];

while (rows.isValidRow()) {
	
	//console.log(rows.fieldByName("category"));
	
	var item = {
		properties : {
			title : "" + rows.fieldByName("category") + "",
			height: 70,
			color : "#000",
			font : {
				fontSize : 20, //note: may want to use dpi(dp in titanium)
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
	title: "Test SQLite 3 Title",
	fullscreen: false,
	backgroundColor: "#579"
});

var scrollView = Ti.UI.createScrollView({
	layout: "vertical",
	showHorizontalScrollIndicator: true,
	showVerticalScrollIndicator: true,
});

//note: start form
if(Ti.UI.iOS) {
	var formView = Ti.UI.createView({
		height: 300,
		width: "100%",
		top: 20,
		backgroundColor: "#046"
	});
}else {
	var formView = Ti.UI.createView({
		height: 300,
		width: "100%",
		top: 0,
		backgroundColor: "#046"
	});
}

//note(future addition): add textFieldDropdownCategory here

if(Ti.UI.iOS) {
	var labelQuantity = Ti.UI.createLabel({
		text: "Quantity:",
		color: "#000",
		font: {
			fontFamily: "Arial",
			fontSize: 20,
			fontWeight: "bold"
		},
		top: 10,
		left: 10
	});
	
	var textFieldQuantity = Ti.UI.createTextField({
		width: 300,
		height: 40,
		color: '#336699',
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 50,
		left: 10
	});
	
	var labelProductName = Ti.UI.createLabel({
		text: "Product Name:",
		color: "#000",
		font: {
			fontFamily: "Arial",
			fontSize: 20,
			fontWeight: "bold"
		},
		top: 110,
		left: 10
	});
	
	var textFieldProductName = Ti.UI.createTextField({
		width: 300,
		height: 40,
		color: '#336699',
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 150, //note: was 50, added 10 for spacing
		left: 10
	});
}else {
	var labelQuantity = Ti.UI.createLabel({
		text: "Quantity:",
		color: "#000",
		font: {
			fontFamily: "Arial",
			fontSize: 20,
			fontWeight: "bold"
		},
		top: 10,
		left: 10
	});
	
	var textFieldQuantity = Ti.UI.createTextField({
		width: 300,
		height: 60,
		color: '#336699',
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 50, //note: compensated for labelQuantity fontSize and top
		left: 10
	});
	
	var labelProductName = Ti.UI.createLabel({
		text: "Product Name:",
		color: "#000",
		font: {
			fontFamily: "Arial",
			fontSize: 20,
			fontWeight: "bold"
		},
		top: 110,
		left: 10
	});
	
	var textFieldProductName = Ti.UI.createTextField({
		width: 300,
		height: 60,
		color: '#336699',
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 150,
		left: 10
	});
	
	//http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Picker
}

//note: end form

//note: start select data

var selectView = Ti.UI.createView({
	height: 200,
	width: "100%",
	//backgroundColor: "#555"
});

if(Ti.UI.iOS) {
	var listView = Ti.UI.createListView({
		height: "100%"
		//backgroundColor: "#035"
	});
}else {
	var listView = Ti.UI.createListView({
		heght: "100%"
		//backgroundColor: "#035"
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

formView.add(labelQuantity);
formView.add(textFieldQuantity);
formView.add(labelProductName);
formView.add(textFieldProductName);
selectView.add(listView);

scrollView.add(formView);
scrollView.add(selectView);

/*win.add(formView);
win.add(selectView);*/
win.add(scrollView);
win.open();

rows.close();
db.close();