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
	backgroundColor: "#400"
});

var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: win1,
	tintColor: "#555"
});

var getData = function() {
	var tableWindow = Ti.UI.createWindow({
		title: this.title,
		modal: true,
		barColor: "#888",
		backgroundColor: "#400"
		//backgroundImage: "appbg.png"
	});
	
	var label = Ti.UI.createLabel({
		text: this.desc,
		color: "#888",
		font: {
			fontSize: 12,
			fontFamily: "Arial"
		},
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
	
	var subHeaderViews = Ti.UI.createView({
		backgroundColor: "#005",
		height: "auto"
	});
	
	for(n in games) {
		
		var headerLabel = Ti.UI.createLabel({
			//text or headerTitle
			color: "#050",
			text: games[n].headerTitle,
			//text: games[n].footerTitle,
			//text: "Test",
			font: {
				fontSize: 20,
				fontWeight: "bold"
			},
			top: 5,
			left: 5,
			right: 5
		});
		
		subHeaderViews.add(headerLabel);
		
		var tableSection = Ti.UI.createTableViewSection({
			//headerTitle: games[n].headerTitle,
			//footerTitle: games[n].footerTitle
			headerView: subHeaderViews
		});
		
		for(q in games[n]["gameList"]) {
			var theRow = Ti.UI.createTableViewRow({
				title: games[n].gameList[q].name,
				desc: games[n].gameList[q].description,
				hasChild: true,
				color: "#888",
				backgroundColor: "#511",
				font: {
					fontWeight: "bold",
					fontFamily: "Arial"
				}
			});
			
			//console.log(theRow.title); //row title data
			tableSection.add(theRow);
			theRow.addEventListener("click", getData);
		}
		
		tSections.push();
		tSections.push(tableSection);
		
	}
	
	tableView.setData(tSections);
	
};

makeTable();

win1.add(tableView);
navGroup.open();