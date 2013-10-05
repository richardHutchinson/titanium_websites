// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;

// create table view
var tableview = Ti.UI.createTableView({
});

// set the data from the database to the array  
function setDataTest2() {
	var db = Ti.Database.install('../sql/test','test');
	var prodCat = Ti.UI.currentWindow.prodCat;
	var rows = db.execute('SELECT * FROM products WHERE categoryId="' + prodCat + '"');
	db.close();
	var dataArray = [];
	
	while (rows.isValidRow()) {
	    dataArray.push({title:'' + rows.fieldByName('productName') + '', hasChild:true, path:'../products/products_specs.js'});
	    
	    rows.next();
	};
	
	tableview.setData(dataArray);
};

/*tableview.addEventListener('click', function(e) {
	if(e.rowData.path) {
		var win = Ti.UI.createWindow({
		    url:e.rowData.path,
		    title:e.rowData.title
		});
		
		var prodName = e.rowData.title;
		win.prodName = prodName;
		//alert(win.prodName+" test11");
		Ti.UI.currentTab.open(win);
    }
});*/

tableview.addEventListener('click', function(e){
	if(e.rowData.path){
		var win = Ti.UI.createWindow({
			url:e.rowData.path,
			title:e.rowData.title
		});
		var tab1 = Titanium.UI.createTab({
			//icon:'images/tabs/KS_nav_ui.png',
			title:'Products',
			window:win
		});
		var prodName = e.rowData.title;
		win.prodName = prodName;
		tab1.open(win,{animated:true});
	}
});

// add the tableView to the current window
currentWin.add(tableview);

// call the setDataTest2 function to attach the database results to the array
setDataTest2();