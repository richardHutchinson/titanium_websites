Ti.UI.setBackgroundColor("#000");

var homeWindow = Ti.UI.createWindow({
	title: "Project 3",
	modal: true,
	backgroundColor: "#999"
	//backgroundImage: "appbg.png"
});

var page1Button = Ti.UI.createView({
	backgroundColor: "#999",
	height: 75,
	top: 30,
	right: 20,
	left: 20,
	fileName: "gallery"
});

var page1ButtonLabel = Ti.UI.createLabel({
	text: "View Gallery",
	align: "center",
	font: {
		fontSize: 20,
		fontFamily: "Arial"
	}
});

var page2Button = Ti.UI.createView({
	backgroundColor: "#999",
	height: 75,
	top: page1Button.top + page1Button.height + 30,
	right: 20,
	left: 20,
	fileName: "other"
});

var page2Label = Ti.UI.createLabel({
	text: "About",
	alight: "center",
	font: {
		fontSize: 20,
		fontFamily: "Arial"
	}
});

page1Button.add(page1ButtonLabel);

homeWindow.add(page1Button);
homeWindow.open();

var galleryPage = require("gallery");
//var otherPage = require("other");