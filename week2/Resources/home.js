var games = {
	"RTS": {
		"title": "Real Time Strategy",
		"footerTitle": "Real Time Strategy(R.T.S.)",
		"gameList": [
			{
				"name": "StarCraft",
				"description": "StarCraft is a RTS developed by Blizzard Entertainment."
			},
			{
				"name": "Total War",
				"description": "Total War is a RTS developed by SEGA."
			}
		]
	},
	"RPG": {
		"title": "Role Playing Game",
		"footerTitle": "Role Playing Game(R.P.G.)",
		"gameList": [
			{
				"name": "Elder Scrolls: Skyrim",
				"description": "Elder Scrolls: Skyrim was developed by Bethesda."
			},
			{
				"name": "Darksiders",
				"description": "Darksiders was developed by THQ."
			}
		]
	}
};

var tableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: true,
	extendEdges: [Ti.UI.EXTEND_EDGE_BOTTOM]
});

var win2 = Ti.UI.createWindow({
	title: "My Games",
	modal: true,
	backgroundColor: "#444"
	//backgroundImage: "appbg.png"
});

var navGroup = Ti.UI.iOS.createNavigationWindow({ //note: this line may be depricated
	window: win2
});

var getData = function() {
	var tableWindow = Ti.UI.createWindow({
		title: this.title,
		modal: true,
		backgroundColor: "#999"
		//backgroundImage: "appbg.png"
	});
	
	var label = Ti.UI.createLabel({
		text: this.text,
		font: {
			fontSize: 18,
			fontFamily: "Arial"
		},
		color: "#538",
		top: 10,
		left: 10,
		right: 10
	});
	
	tableWindow.add(label);
	navGroup.openWindow(tableWindow, {animation: true}); //note: this will animate the first buttons slide from the main window
	alert("test");
};

var makeTable = function() {
	var tSections = [];
	
	for(n in games) {
		var tableSection = Ti.UI.createTableViewSection({
			headerTitle: games[n].title,
			footerTitle: games[n].footerTitle
		});
		
		for(q in games[n]["gameList"]) {
			var theRow = Ti.UI.createTableViewRow({
				title: games[n].gameList[q].name,
				text: games[n].gameList[q].description,
				hasChild: true
			});
			
			//console.log(theRow.title);
			theRow.addEventListener("click", getData);
			tableSection.add(theRow);
		}
		tSections.push(tableSection);
	}
	
	tableView.setData(tSections);
};

makeTable();
win2.add(tableView);
navGroup.open();