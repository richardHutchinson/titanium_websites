var win = Ti.UI.createWindow({
	backgroundColor: "#589"
});

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

var dataArray = [];

var db = Ti.Database.install('/sql/test','test');
//var prodCat = Ti.UI.currentWindow.prodCat;
var rows = db.execute('SELECT * FROM products');

var dataSection = Ti.UI.createListSection({
	headerTitle: "" + rows.fieldByName("category") + ""
});

var dataSet = [
	{
		properties: {
			title: "" + rows.fieldByName("productName") + "",
			color: "#000",
			font: {
				fontSize: 12,
				fontWeight: "bold"
			},
			backgroundColor: "#058"
		}
	}
];

/*var dataSet = [
    {
    	properties: {
			title: 'test1'
		}
    },
    {
    	properties: {
			title: 'test2'
		}
    }
];*/

dataSection.setItems(dataSet);
dataArray.push(dataSection);

/*var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables'});
var vegDataSet = [
    {properties: { title: 'Carrots'}},
    {properties: { title: 'Potatoes'}},
];
vegSection.setItems(vegDataSet);
dataArray.push(vegSection);*/

listView.sections = dataArray;
win.add(listView);
win.open();

/*var fishSection = Ti.UI.createListSection({ headerTitle: 'Fish'});
var fishDataSet = [
    {properties: { title: 'Cod'}},
    {properties: { title: 'Haddock'}},
];
fishSection.setItems(fishDataSet);
listView.appendSection(fishSection);*/
db.close();