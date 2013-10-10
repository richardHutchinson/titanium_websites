var games = {
	"RTS": {
		"headerTitle": "Real Time Strategy",
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
		"headerTitle": "Role Playing Game",
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
	//color: "#fff",
	backgroundColor: "#511"
});

var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: win1
});

var getData = function() {
	var tableWindow = Ti.UI.createWindow({
		title: this.title,
		modal: true,
		backgroundColor: "#511"
		//backgroundImage: "appbg.png"
	});
	
	var label = Ti.UI.createLabel({
		text: this.desc,
		font: {
			fontSize: 12,
			fontFamily: "Arial"
		},
		color: "#955",
		top: 10,
		left: 10,
		right: 10
	});
	
	tableWindow.add(label);
	navGroup.openWindow(tableWindow, {animation: true}); //note: this will animate the first button slide from the main window
	//alert("Second window opened.");
};

var makeTable = function() {
	var tSections = [];
	
	for(n in games) {
		var tableSection = Ti.UI.createTableViewSection({
			headerTitle: games[n].headerTitle,
			footerTitle: games[n].footerTitle,
			color: "#944"
		});
		
		for(q in games[n]["gameList"]) {
			var theRow = Ti.UI.createTableViewRow({
				title: games[n].gameList[q].name,
				desc: games[n].gameList[q].description,
				hasChild: true,
				color: "#944",
				backgroundColor: "#521"
			});
			
			//console.log(theRow.title); //row title data
			tableSection.add(theRow);
			theRow.addEventListener("click", getData);
		}
		
		tSections.push(tableSection);
		
	}
	
	tableView.setData(tSections);
	
};

makeTable();

win1.add(tableView);
navGroup.open();