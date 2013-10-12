Ti.UI.setBackgroundColor('#999');

var win1 = Ti.UI.createWindow({
	//title: "Games",
	barColor: "#888",
	titleControl: Ti.UI.createLabel({
		text: "Games",
		color: "#811",
		font: {
			fontSize: 15,
			fontWeight: "bold"
		},
		width: "auto"
		//backgroundColor: "#fff"
	})
});

var home = require("home");

win1.open();