Titanium.UI.setBackgroundColor("#000");

// create tab group
var myData = require("data");

var tabGroup = Titanium.UI.createTabGroup();

// create base UI tab and root window
var win1 = Titanium.UI.createWindow({
	title: "Tab 1",
	backgroundColor: "#fff"
});
var tab1 = Titanium.UI.createTab({
	icon: "KS_nav_views.png",
	title: "Tab 1",
	window: win1
});

var tableData = [];

var table = Ti.UI.createTableView({
	data: tableData
});

function createObjectRows() {
	for (i = 0; i < myData.data.length; i++) {
		
		var row = Ti.UI.createTableViewRow({
			height: "60dp"
		});

		var nameLabel = Ti.UI.createLabel({
			text: myData.data[i].name,
			font: {
				fontSize: "24dp",
				fontWeight: "bold"
			},
			height: "auto",
			left: "10dp",
			top: "5dp",
			color: "#000",
			touchEnabled: false
		});
		
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
				top: 50
			});
			
			tab1.open(otherWindow, {
				animated: true
			});
			
			otherWindow.add(areaLabel);
			otherWindow.add(announceLabel);
			
		});

		row.add(nameLabel);
		tableData.push(row);
		
	};
};

createObjectRows();

table.setData(tableData);

win1.add(table);

//  add tabs
tabGroup.addTab(tab1);

// open tab group
tabGroup.open();