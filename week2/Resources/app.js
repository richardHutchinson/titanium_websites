Ti.UI.setBackgroundColor("#000");

var win1 = Ti.UI.createWindow({
	extendEdges: [Ti.UI.EXTEND_EDGE_BOTTOM] //note: used for spacing
});

var label1 = Ti.UI.createLabel({
	color: "#385",
	font: {
		fontSize: 20,
		fontFamily: "Arial"
	},
	textAlign: "center",
	width: "auto"
});

win1.add(label1);

var home = require("home");

win1.open();