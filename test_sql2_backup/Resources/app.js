//Check if the file is there (see the database path above)
/*var checkFileExistence = Ti.Filesystem.getFile(Ti.Filesystem.applicationSupportDirectory+'/database', '/sql/test');

//If it's there, delete it and reinstall the DB
if(checkFileExistence.exists() == true){
     checkFileExistence.deleteFile();
     var db = Ti.Database.install('sql/test', 'products');
     alert(1);
}else{
     //Otherwise, install it for the first time
     var db = Ti.Database.install('sql/test', 'products');
     alert(2);
}*/

//Install Database
var db = Ti.Database.install('sql/test', 'products');
//Open DB
//var openDb = Ti.Database.open('products');
//Query
var rows = db.execute('SELECT productId, category FROM products');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// create a data array
//var data = [{title: "test"}];
var data = [];

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//Walk through the results
while(rows.isValidRow()){
     data.push({
     	title: rows.fieldByName("category"),
     	id: rows.fieldByName("productId")
     });
     
     //Ti.API.info(rows.fieldByName('productName'));
     rows.next();
}

// create table view - a.k.a. view object
var tableview = Titanium.UI.createTableView({
    data:data
});

//create a window object
var win1 = Titanium.UI.createWindow({
     backgroundColor: "#000"
});
//add table view to that object
win1.add(tableview);

//Close result set
rows.close();
//Close database
rows.close();
win1.open();