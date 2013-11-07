var win = Ti.UI.createWindow({
	modal: true,
	backgroundColor: "#555"
});
//var st_title = Ti.UI.currentWindow.st_title;

var formView = Ti.UI.createView({
	backgroundColor: "#046"
});

var textField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: 10,
	left: 10,
	width: 250,
	height: 60
});

formView.add(textField);

win.add(formView);
win.open();