var win = Ti.UI.createWindow({backgroundColor: "#222"});
var listView = Ti.UI.createListView();
var sections = [];

var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits'});
var fruitDataSet = [
    {properties: { title: 'Apple'}},
    {properties: { title: 'Banana'}},
];
fruitSection.setItems(fruitDataSet);
sections.push(fruitSection);

var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables'});
var vegDataSet = [
    {properties: { title: 'Carrots'}},
    {properties: { title: 'Potatoes'}},
];
vegSection.setItems(vegDataSet);
sections.push(vegSection);

listView.sections = sections;
win.add(listView);
win.open();

var fishSection = Ti.UI.createListSection({ headerTitle: 'Fish'});
var fishDataSet = [
    {properties: { title: 'Cod'}},
    {properties: { title: 'Haddock'}},
];
fishSection.setItems(fishDataSet);
listView.appendSection(fishSection);

//----

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
	
	console.log(dataArray + "------------");
	
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