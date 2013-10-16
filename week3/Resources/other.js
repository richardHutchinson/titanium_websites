var otherWindow = Ti.UI.createWindow({
	title: "About",
	modal: true,
	backgroundColor: "#999",
	//backgroundImage: "appbg.png",
	width: Ti.Platform.displayCaps.platformWidth,
	type: "window"
});

var content = Ti.UI.createLabel({
	text: "This is some random text.",
	top: 10,
	left: 10,
	color: "#999",
	font: {
		fontSize: 16,
		fontFamily: "Arial"
	}
});

var closeOtherButton = Ti.UI.createView({
	backgroundColor: "#999",
	height: 50,
	bottom: 0,
	width: otherWindow.width
});

var closeOtherText = Ti.UI.createLabel({
	text: "Close Window",
	font: {
		fontSize: 14,
		fontFamily: "Arial"
	},
	align: "center",
	color: "#000"
});

closeOtherButton.add(closeOtherText);

otherWindow.add(closeOtherButton);
otherWindow.add(content);

var closeOtherWindow = function() {
	otherWindow.close();
};

closeOtherButton.addEventListener("click",closeOtherWindow);

var openOther = function() {
	otherWindow.open();
};

page2Button.addEventListener("click",openOther);