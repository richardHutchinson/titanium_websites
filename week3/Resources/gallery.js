var galleryWindow = Ti.UI.createWindow({
	title: "Iamge Gallery",
	modal: true,
	backgroundColor: "#999",
	//backgroundImage: "appbg.png",
	width: Ti.Platform.displayCaps.platformWidth,
	type: "window",
	name: "root window"
});

var closeGallery = Ti.UI.createView({
	backgroundColor: "#999",
	height: 50,
	bottom: 0,
	width: galleryWindow.width,
	name: "close it"
});

var closeTextGallery = Ti.UI.createLabel({
	text: "Close Window",
	font: {
		fontSize: 14,
		fontFamily: "Arial"
	},
	align: "center",
	color: "#000"
});

closeGallery.add(closeTextGallery);
galleryWindow.add(closeGallery);