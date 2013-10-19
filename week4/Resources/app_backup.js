var navWindow = Ti.UI.createWindow({
	title: "VFW Final Project",
	backgroundColor: "#999",
	width: Ti.Platform.displayCaps.platformWidth,
	layout: "vertical"
});

var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: navWindow
});

//nav buttons
var navGallery = Ti.UI.createView({
	backgroundColor: "#050",
	height: 100,
	id: "gallery",
	group: "navButton"
});

var navGalleryText = Ti.UI.createLabel({
	text: "Gallery",
	font: {
		fontSize: 35,
		fontFamily: "Arial"
	},
	color: "#000",
	left: 20,
	group: "navText",
	parent: navGallery
});

navGallery.add(navGalleryText);

var navCrew = Ti.UI.createView({
	backgroundColor: "#500",
	height: 100,
	id: "crew",
	group: "navButton"
});

var navCrewText = Ti.UI.createLabel({
	text: "Crew",
	font: {
		fontSize: 35,
		fontFamily: "Arial"
	},
	color: "#005",
	left: 20,
	group: "navText",
	parent: navCrew
});

navCrew.add(navCrewText);

var navCustom = Ti.UI.createView({
	backgroundColor: "#999",
	height: 100,
	id: "custom",
	group: "navButton"
});

var navCustomText = Ti.UI.createLabel({
	text: "Custom Page",
	font: {
		fontSize: 35,
		fontFamily: "Arial"
	},
	color: "#550",
	left: 20,
	group: "navText",
	parent: navCustom
});

navCustom.add(navCustomText);

var footer = Ti.UI.createLabel({
	text: "VFW Term",
	font: {
		fontSize: 11,
		fontFamily: "Arial"
	},
	color: "#055",
	top: 50
});

navWindow.add(navGallery,navCrew,navCustom,footer);

var newWindow;

navWindow.addEventListener("click", function(event) {
	var button = event.source;
	if(button.group === "navButton" || button.group === "navText") {
		if(button.group === "navButton") {
			var srcFile = button.id;
			var windowTitle = button.getChildren()[0].text;
			var windowColor = button.backgroundColor;
		}else {
			var srcFile = button.parent.id;
			var windowTitle = button.text;
			var windowColor = button.parent.backgroundColor;
		}
		
		newWindow = Ti.UI.createWindow({
			modal: "true",
			title: windowTitle,
			backgroundColor: windowColor,
			loadView: button.id,
			url: srcFile+".js",
			nav: navGroup
		});
		
		navGroup.open(newWindow, {animated: true}); //note: may need to fix this
	}
});

var mainWindow = Ti.UI.createWindow();
mainWindow.add(navGroup);
mainWindow.open();