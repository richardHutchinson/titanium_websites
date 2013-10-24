var win = Ti.UI.createWindow({
	backgroundColor: "#222"
});

var listView = Ti.UI.createListView();
var dataArray = [];

var db = Ti.Database.install('/sql/test','test');
//var prodCat = Ti.UI.currentWindow.prodCat;
var rows = db.execute('SELECT * FROM products');
db.close();

var dataSection = Ti.UI.createListSection({
	headerTitle: 'Title'
});

var dataSet = [
	{
		properties: {
			title: "" + rows.fieldByName("productName") + ""
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