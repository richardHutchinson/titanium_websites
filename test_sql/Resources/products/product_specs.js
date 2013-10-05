// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;
var db = Ti.Database.install('../sql/test','test');
var prodName = Ti.UI.currentWindow.prodName;
var rows = db.execute('SELECT * FROM products WHERE productName="' + prodName + '"');
var data = [
	{title:'' + rows.fieldByName('productName') + '', header:'Product Name'},
	{title:'' + rows.fieldByName('quantity') + '', header:'Quantity'}
];

var tableview = Ti.UI.createTableView({
    data:data
});
currentWin.add(tableview);