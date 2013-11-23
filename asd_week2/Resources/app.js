// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//var myData = require('data');

var myData2 = require('display');
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var tab2 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : "Data",
	window : myData2.display
});

tabGroup.addTab(tab2);

// open tab group
tabGroup.open(); 