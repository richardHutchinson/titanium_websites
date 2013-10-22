Ti.include("db/database.js");

var db = Ti.App.listDb;
db.lists.createTable();

var getData = function() {
	var data = db.lists.getAll();
	
	for(var i = 0; i < data.length; i++) {
		var dataResults = data[i];
		
		dataResults.hasChild = true;
		dataResults.toUrl = "windows/window2.js";
		dataResults.title = dataResults.content;
		delete dataResults.content;
	}
	
	return data;
};

var data = getData();

// create table view - a.k.a. view object
var tableview = Titanium.UI.createTableView({
	data: data,
	editable: true
});

//create a window object
var win1 = Titanium.UI.createWindow({
	backgroundColor : "#000"
});
//add table view to that object
win1.add(tableview);

//button
/*var addBtn = Ti.UI.createButton({
	title: "Button", //note: think this should be Add Button
	top: 10,
	width: "auto",
	height: "auto"
});*/

// create tab group
var tabGroup = Titanium.UI.createTabGroup({
	window: win1 //note: this may break
});

tableview.addEventListener("click", function(e) {
	if(e.rowData.toUrl) {
		var win2 = Titanium.UI.createWindow({
			url: e.rowData.toUrl,
			targetId: e.rowData.id
		});
		
		tabGroup.open(win2);
	}
});

var main = Ti.UI.createWindow();

main.add(tabGroup);
main.open();

var count = data.length;

/*addbtn.addEventListener("click", function(e) {
	var content = "List Content Appended" + count;
	var row = Ti.UI.createTableViewRow({
		title: content,
		hasChild: true,
		toUrl: "windows/window2.js",
		id: count
	});
	
	db.lists.insert(content,count);
	count = db.lists.count();
	tableview.appendRow(row);
});

tableview.addEventListener("delete", function(e) {
	db.lists.remove(e.row.id);
	count = db.lists.count();
});

Ti.App.addEventListener("listRefresh", function(e) {
	tableview.setData(getData());
});*/