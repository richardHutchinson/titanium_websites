// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;

// set the data from the database to the array  
function setDataTest1() {
	var db = Ti.Database.install('../sql/test','test');  
	var rows = db.execute('SELECT * FROM testCategory');
	var dataArray = [];
	
	while (rows.isValidRow()) {
	    dataArray.push({title:'' + rows.fieldByName('category') + '', hasChild:true, path:'../products/products.js'});
	    
	    rows.next();
	};
	
	tableview.setData(dataArray);
};

// create table view
var tableview = Ti.UI.createTableView({
});

tableview.addEventListener('click', function(e) {
	if(e.rowData.path) {
		var win = Ti.UI.createWindow({
		    url:e.rowData.path,
		    title:e.rowData.title
		});
		
		var prodCat = e.rowData.title;
		win.prodCat = prodCat;
		Ti.UI.currentTab.open(win);
    }
});

// add the tableView to the current window
currentWin.add(tableview);

// call the setDataTest1 function to attach the database results to the array
setDataTest1();