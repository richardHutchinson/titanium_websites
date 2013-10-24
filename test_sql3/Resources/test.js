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

var win = Ti.UI.createWindow({backgroundColor: "#222"});

var listView = Ti.UI.createListView();
var sections = [];

//my code - start

/*var db = Ti.Database.install('/sql/test','test');
//var prodCat = Ti.UI.currentWindow.prodCat;
var rows = db.execute('SELECT * FROM products WHERE productId = 1');
db.close();*/

var dataArray = [];

/*while(rows.isValidRow()) {
    //dataArray.push({title:'' + rows.fieldByName('productName') + '', hasChild:true, path:'../products/products_specs.js'});
    */
    var dataSection = Ti.UI.createListSection({
    	headerTitle: "test"
    });
    
    var dataSet = [
    	{
    		properties: {
    			title: "testTitle"
    		}
    	}
    ];
    
    //rows.next();
/*};*/

dataSection.setItems(dataSet); //fix
dataArray.push(dataSection);

//my code - end

/*var fruitSection = Ti.UI.createListSection({
	headerTitle: 'Fruits'
});

var fruitDataSet = [
    {
    	properties: {
    		title: 'Apple'
    	}
    },
    {
    	properties: {
    		title: 'Banana'
    	}
    },
];

fruitSection.setItems(fruitDataSet);
sections.push(fruitSection);*/

listView.dataArray = dataArray;
win.add(listView);
win.open();