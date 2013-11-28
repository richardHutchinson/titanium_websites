// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var myData = require('data');
var tabGroup = Titanium.UI.createTabGroup();
var table = Ti.UI.createTableView();
var tableData = [];

//console.log(myData);

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
		
		//rich note: would one need to add the eventListener here and then put that variable into the row.add(); call below?
		row.addEventListener("click",function() {
			//console.log(e);
			//console.log(myData.data[0].name);
			
			var otherWindow = Ti.UI.createWindow({
				backgroundColor: "#555"
			});
			
			var areaLabel = Ti.UI.createLabel({
				text: myData.data[0].area(),
				color: "#000",
				height: "auto",
				backgroundColor: "#494",
				top: 0
			});
			
			var announceLabel = Ti.UI.createLabel({
				text: myData.data[0].announce(),
				color: "#000",
				height: "auto",
				top: 100
			});
			
			otherWindow.add(areaLabel);
			otherWindow.add(announceLabel);
			
			otherWindow.open();
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