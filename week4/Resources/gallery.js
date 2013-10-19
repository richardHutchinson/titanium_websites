var galleryWindow = Ti.UI.currentWindow;
var previous;

var gallerySrc = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "gallery");
var galleryList = gallerySrc.getDirectoryListing();

//rich note: changed from createLabel to createButton
var randomizeButton = Ti.UI.createButton({
	color: "#fff",
	backgroundColor: "#333",
	height: 50,
	width: "100%",
	bottom: 0
});

var randomizeText = Ti.UI.createLabel({
	text: "New Image",
	font: {fontSize:25,fontFamily:'AvenirNextCondensed-Medium'},
	color:"#fff",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	//align: "center",
	//left: 20
});

var media = Ti.UI.createImageView({
	top:100,
	image: "gallery/"+ galleryList[Math.floor(Math.random()* galleryList.length)]
});

var fetchImage = function(){
	var randomNum = Math.floor(Math.random()* galleryList.length);
	//If randomNum is the same as last time, get a new randomNum until unique.
	while(previous === randomNum){
		var randomNum = Math.floor(Math.random()* galleryList.length);
	}
	media.image = "gallery/"+galleryList[randomNum];
	previous = randomNum;
};

randomizeButton.add(randomizeText);
galleryWindow.add(media);
galleryWindow.add(randomizeButton);


randomizeButton.addEventListener("click", fetchImage);