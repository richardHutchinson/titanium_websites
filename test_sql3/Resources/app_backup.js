var win = Ti.UI.createWindow({
	title: "List of Items",
	backgroundColor: "#589"
});

var dataArray = [];

var db = Ti.Database.install('/sql/test','test');
var rows = db.execute('SELECT * FROM products');

if(Ti.UI.iOS) {
	var listView = Ti.UI.createListView({
		backgroundColor: "#035",
		top: 20
	});
}else {
	var listView = Ti.UI.createListView({
		backgroundColor: "#035"
	});
}

var dataSection = Ti.UI.createListSection();
//console.log(rows.fieldByName("category"));

while(rows.isValidRow()) {
	
	//console.log(rows.fieldByName("category"));
	
	dataArray.push({
		properties: {
			title: "" + rows.fieldByName("category") + ""
		}
	});

	/*var dataSet = [
		{
			properties: {
				title: "" + rows.fieldByName("category") + "",
				color: "#000",
				font: {
					fontSize: 20,
					fontWeight: "bold"
				},
				backgroundColor: "#248"
			}
		}
	];*/
	
	console.log(dataArray);
	
	//console.log(dataSet);
	rows.next(); //note: used for while loop
}

console.log(dataArray);

dataSection.setItems(dataArray);
dataArray.push(dataSection);

listView.sections = dataArray;
win.add(listView);
win.open();

rows.close();
db.close();