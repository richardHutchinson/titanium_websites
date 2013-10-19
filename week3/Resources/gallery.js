var galleryWindow = Ti.UI.createWindow({
	title: "Iamge Gallery",
	modal: true,
	backgroundColor: "#999",
	//backgroundImage: "appbg.png",
	width: Ti.Platform.displayCaps.platformWidth,
	type: "window",
	name: "root window",
	top: 20
});

var closeGallery = Ti.UI.createButton({ //rich note: needed to be create button
	backgroundColor: "#040",
	height: 50,
	bottom: 0,
	width: galleryWindow.width,
	name: "close it"
});

var closeTextGallery = Ti.UI.createLabel({ //gallery window
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

var closeGalleryWin = function() {
	galleryWindow.close();
	//console.log("gallery window close");
};

var galleryView = Ti.UI.createScrollView({
	layout: "horizontal",
	name: "gallery",
	scrollType: "vertical",
	width: galleryWindow.width,
	contentWidth: galleryWindow.width,
	height: (Ti.Platform.displayCaps.platformHeight-closeGallery.height)-65,
	bottom: closeGallery.height
});

galleryWindow.add(galleryView);

var drawImages = function() {
	var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"images");
	var galleryList = gallery.getDirectoryListing();
	
	var columns = 4;
	var marginSize = 4;
	var marginCount = 5;
	
	//console.log(galleryList);
	
	var colWidth = (galleryWindow.width-(marginSize*marginCount))/columns;
	
	for(var i = 0, j = galleryList.length; i < j; i++) {
		var thumbView = Ti.UI.createView({
			width: colWidth,
			height: colWidth,
			left: 4,
			top: 4,
			content: "images/" + galleryList[i],
			backgroundColor: "#030",
			borderRadius: 10
		});
		
		var thumb = Ti.UI.createImageView({
			image: "images/" + galleryList[i],
			borderRadius: 10,
			type: "media",
			parent: thumbView,
			height: colWidth,
			name: galleryList[i]
		});
		
		thumbView.add(thumb);
		galleryView.add(thumbView);
	};
};

//start pop-up window
var closeButton = Ti.UI.createView({
	backgroundColor: "#040",
	height: 50,
	bottom: 0,
	width: galleryWindow.width
});

var closeText = Ti.UI.createLabel({ //pop-up
	text: "Close Window",
	font: {
		fontSize: 14,
		fontFamily: "Arial"
	},
	align: "center",
	color: "#000"
});

closeButton.add(closeText);

var showImage = function(imageSource) {
	var detailWindow = Ti.UI.createWindow({
		title: imageSource.name,
		modal: true,
		backgroundColor: "#999",
		//backgroundImage: "appbg.png",
		name: "pop up window"
	});
	
	var mediaLarge = Ti.UI.createImageView({
		image: imageSource.image,
		top: 20
	});
	
	detailWindow.add(closeButton);
	detailWindow.add(mediaLarge);
	detailWindow.open();
	
	var closeWindow = function() {
		detailWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
};
//end pop-up window

drawImages();

galleryWindow.addEventListener("click", function(evt) {
	Ti.API.info(evt.source.name);
	
	if(evt.source.type === "media") {
		showImage(evt.source);
		//console.log("working");
	}/*else {
		console.log(evt);
		console.log(evt.source.type);
	}*/
	
	if(evt.source.name === "close it") {
		//console.log("close button");
		closeGalleryWin();
		//console.log("working");
	}else {
		//console.log(evt.source.name);
	}
});

var openGallery = function() {
	galleryWindow.open();
};

page1Button.addEventListener("click",openGallery);