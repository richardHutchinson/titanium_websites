var navWindow = Ti.UI.createWindow({
	title: "VFW Final Project",
	backgroundColor: "#333",
	width: Ti.Platform.displayCaps.platformWidth,
	layout: 'vertical'	
});

var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: navWindow
});

var navGallery = Ti.UI.createView({
	backgroundColor: "#bc2359",
	height: 100,
	id: "gallery",
	group: "navButton"
});
var navGalleryText = Ti.UI.createLabel({
	text: "GALLERY",
	font: {fontSize:35,fontFamily:'AvenirNextCondensed-Medium'},
	color:"#fff",
	left: 20,
	group: "navText",
	//textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	//align: "center"
	parent: navGallery
});
navGallery.add(navGalleryText);

var navCrew = Ti.UI.createView({
	backgroundColor: "#df5b54",
	height: 100,
	id: "crew",
	group: "navButton"
});
var navCrewText = Ti.UI.createLabel({
	text: "CREW",
	font: {fontSize:35,fontFamily:'AvenirNextCondensed-Medium'},
	color:"#fff",
	left: 20,
	group: "navText",
	parent: navCrew
});
navCrew.add(navCrewText);

var navCustom = Ti.UI.createView({
	backgroundColor: "#4b808e",
	height: 100,
	id: "custom",
	group: "navButton"
});
var navCustomText = Ti.UI.createLabel({
	text: "CUSTOM PAGE",
	font: {fontSize:35,fontFamily:'AvenirNextCondensed-Medium'},
	color:"#fff",
	left: 20,
	group: "navText",
	parent: navCustom
});
navCustom.add(navCustomText);

var footer = Ti.UI.createLabel({
	text: "VFW Term 1308 // Chad Gibson",
	font: {fontSize: 11, fontFamily: 'AvenirNextCondensed-Medium'},
	color: "#fff",
	top: 50
});

//navGroup window is not opening on top. changed to navGroup.add sort of works but buttons are not stacked despite the layout setting being applied.
navWindow.add(navGallery, navCrew, navCustom, footer);

//Event Listeners
var newWindow;
navWindow.addEventListener("click", function(event){
	
	console.log(event.source + " the event");
	
	var button = event.source;
	if(button.group === "navButton" || button.group === "navText"){
		if(button.group === "navButton"){
			var srcFile = button.id;
			var windowTitle = button.getChildren()[0].text;
			var windowColor = button.backgroundColor;
		}else{
			var srcFile = button.parent.id;
			var windowTitle = button.text;
			var windowColor = button.parent.backgroundColor;
		}
		newWindow = Ti.UI.createWindow({
			modal: 'true',
			title: windowTitle,
			backgroundColor: windowColor,
			loadView: button.id,
			url: srcFile+".js",
			nav: navGroup
		});
		navGroup.openWindow(newWindow, {animation: true}); //rich note: updated this code to the new version - openWindow and animation
	}
});

//may need to add back - start
//var mainWindow = Ti.UI.createWindow();
//mainWindow.add(navGroup);
//may need to add back - stop

navGroup.open();