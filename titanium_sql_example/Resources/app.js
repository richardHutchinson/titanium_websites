// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Ti.UI.createTabGroup();

// Persistence via properties API
var win1 = Ti.UI.createWindow({
	url : 'properties.js',
	title : 'Properties',
	backgroundColor : '#fff'
});

var tab1 = Ti.UI.createTab({
	title : 'Properties',
	window : win1
});

// File system persistence
var win2 = Ti.UI.createWindow({
	url : 'filesystem.js',
	layout : 'vertical',
	title : 'Filesystem',
	backgroundColor : '#fff'
});

var tab2 = Ti.UI.createTab({
	title : 'Filesystem',
	window : win2
});

// SQL database persistence
var win3 = Ti.UI.createWindow({
	url : 'database.js',
	title : 'Database',
	backgroundColor : '#fff'
});

var tab3 = Ti.UI.createTab({
	title : 'Database',
	window : win3
});

//  add tabs
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

// open tab group
tabGroup.open(); 