// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var myData = require('data');
var tabGroup = Titanium.UI.createTabGroup();
var table = Ti.UI.createTableView();
var tableData = [];

function createObjectRows() {
	for ( i = 0; i < myData.data.length; i++) {
		
		var row = Ti.UI.createTableViewRow({
			height : '60dp'
		});

		var nameLabel = Ti.UI.createLabel({
			text : myData.data[i].name,
			font : {
				fontSize : '24dp',
				fontWeight : 'bold'
			},
			height : 'auto',
			left : '10dp',
			top : '5dp',
			color : '#000',
			touchEnabled : false
		});

		row.add(nameLabel);
		tableData.push(row);
		
		//console.log(myData.data[i]); //rich note: this will return the test1.name = "Object 1"; in the data.js file
	};
};

createObjectRows();

// create base UI tab and root window
var win1 = Titanium.UI.createWindow({
	title : 'Tab 1',
	backgroundColor : '#fff'
});
var tab1 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Tab 1',
	window : win1
});

table.setData(tableData);

win1.add(table);

//  add tabs
tabGroup.addTab(tab1);

// open tab group
tabGroup.open();