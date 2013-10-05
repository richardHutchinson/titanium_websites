function ApplicationWindow(title) {
	
	//application background
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		//height:44,
		width:"100%",
		title:L('openWindow'),
		top:0
	});
	self.add(button);
	
	//new page background
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
	return self;
};

module.exports = ApplicationWindow;
