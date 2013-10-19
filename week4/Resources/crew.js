var currentWindow = Ti.UI.currentWindow;

var crewList = {
	"manifest": [
		{
			"name": "Jebediah Kerman",
			"courage": 80,
			"stupidity": 100,
			"image": "assets/jeb.png",
			"description": "Jebediah Kerman, one of the first Kerbals to join KSP, has made it his "+
							"personal goal to be the first at everything. As such he often causes grief "+
							"with his fellow Kerbonauts by rushing through and doing shotty jobs. If something "+
							"is broken or a mission goes wrong, just blame Jeb." 
		},
		{
			"name": "Bob Kerman",
			"courage": 10,
			"stupidity": 30,
			"image": "assets/bob.png",
			"description": "Bob Kerman is a rare Kerbal. He lacks both high marks in courage and stupidity. "+
						   "Bob likes to take things slow, and the results often pay off in a successful mission." 
		},
		{
			"name": "Jimbo Kerman",
			"courage": 90,
			"stupidity": 50,
			"image": "assets/jeb.png",
			"description": "It's not known where Jimbo Kerman is from, but he sure does inspire his fellow comrades."
		}
	]
};

var tableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: true
});

var tableSection = Ti.UI.createTableViewSection({
	headerTitle: "The mighty crew",
	footerTitle: "Listed crew is on active duty."
});

for(n in crewList.manifest){
	
	console.log(crewList.manifest[n].name);
	
	var newRow = Ti.UI.createTableViewRow({
		title: crewList.manifest[n].name,
		data: crewList.manifest[n],
		hasChild: true
	});
	tableSection.add(newRow);
}

tableView.setData([tableSection]);
currentWindow.add(tableView);

tableView.addEventListener("click", function(event){
	var kerbalData = event.source.data;
	var kerbalWindow = Ti.UI.createWindow({
		title: kerbalData.name,
		backgroundColor: currentWindow.backgroundColor
	});
	
	var kerbalImage = Ti.UI.createImageView({
		image: kerbalData.image,
		top: 10,
		left: 10,
		width: 155
	});
	
	var kerbalDescription = Ti.UI.createLabel({
		text: kerbalData.description,
		font: {fontSize:12,fontFamily:'Arial'},
		color: "#333",
		top: 260,
		left: 10,
		right: 10
	});
	
	var statsLabelStupid = Ti.UI.createLabel({
		text: "Stupidity: "+ kerbalData.stupidity,
		font: {fontSize:10,fontFamily:'Arial'},
		top: 85,
		left: 180
	});
	var statsContainerStupid = Ti.UI.createView({
		top: 100,
		right: 10,
		width: 130,
		height: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
	}); 
	var statsBarStupidity = Ti.UI.createView({
		width: statsContainerStupid.width*(kerbalData.stupidity/100),
		left:0,
		backgroundColor: "#333"
	});
	
	var statsLabelCourage = Ti.UI.createLabel({
		text: "Courage: "+ kerbalData.courage,
		font: {fontSize:10,fontFamily:'Arial'},
		top: 125,
		left: 180
	});
	var statsContainerCourage = Ti.UI.createView({
		top: 140,
		right: 10,
		width: 130,
		height: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
	}); 
	var statsBarCourage = Ti.UI.createView({
		width: statsContainerStupid.width*(kerbalData.courage/100),
		left:0,
		backgroundColor: "#333"
	});
	
	//console.log(statsBar.width);
	statsContainerStupid.add(statsBarStupidity);
	statsContainerCourage.add(statsBarCourage);
	
	kerbalWindow.add(
		kerbalImage,
		kerbalDescription,
		statsContainerStupid,
		statsLabelStupid,
		statsLabelCourage,
		statsContainerCourage
	);
	currentWindow.nav.openWindow(kerbalWindow);
});