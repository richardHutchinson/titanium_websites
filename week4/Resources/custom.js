var currentWindow = Ti.UI.currentWindow;

var scrollView = Ti.UI.createScrollView({
	layout: "vertical"
});

var instructions = Ti.UI.createLabel({
	text: "Instructions: Fill out the form below and be rewarded with a hillarious story.",
	color: "#fff",
	font: {fontFamily: "Arial", fontSize: 12},
	top: 20,
	left:10
});

var question1 = Ti.UI.createLabel({
	text: "1. What's the name of your Kerbal?",
	color: "#fff",
	font: {fontFamily: "Arial", fontSize: 16},
	top: 30,
	left: 10
});

var q1TextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top:10,
	left: 10,
	height: 40,
	right: 10,
	font: {fontFamily: "Arial", fontSize: 16},
	color: "#333"
});

var question2 = Ti.UI.createLabel({
	text: "2. Enter a verb:",
	color: "#fff",
	font: {fontFamily: "Arial", fontSize: 16},
	top: 30,
	left: 10
});

var q2TextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top:10,
	left: 10,
	height: 40,
	right: 10,
	font: {fontFamily: "Arial", fontSize: 16},
	color: "#333"
});

var question3 = Ti.UI.createLabel({
	text: "3. Enter an adjective:",
	color: "#fff",
	font: {fontFamily: "Arial", fontSize: 16},
	top: 30,
	left: 10
});

var q3TextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top:10,
	left: 10,
	height: 40,
	right: 10,
	font: {fontFamily: "Arial", fontSize: 16},
	color: "#333"
});

var question4 = Ti.UI.createLabel({
	text: "4. Select A Destination:",
	color: "#fff",
	font: {fontFamily: "Arial", fontSize: 16},
	top: 30,
	left: 10
});

var picker = Ti.UI.createPicker({
	top: 10,
	visibleItems: 2,
	selected: 0
});

var data = [];
data[0] = Ti.UI.createPickerRow({title: "Kerbin"});
data[1] = Ti.UI.createPickerRow({title: "Mun"});
data[2] = Ti.UI.createPickerRow({title: "Duna"});
data[3] = Ti.UI.createPickerRow({title: "Ike"});
data[4] = Ti.UI.createPickerRow({title: "Eve"});
data[5] = Ti.UI.createPickerRow({title: "Gilly"});
data[6] = Ti.UI.createPickerRow({title: "Jool"});

picker.add(data);
picker.selectionIndicator = true;

var submitButton = Ti.UI.createView({
	color: "#fff",
	backgroundColor: "#333",
	height: 50,
	top: 30
});

var submitButtonText = Ti.UI.createLabel({
	text: "Create Story",
	font: {fontSize:25,fontFamily:'AvenirNextCondensed-Medium'},
	color:"#fff",
	left: 20
});

submitButton.add(submitButtonText);

scrollView.add(
	instructions, 
	question1, 
	q1TextField,
	question2,
	q2TextField,
	question3,
	q3TextField,
	question4,
	picker,
	submitButton
);

currentWindow.add(scrollView);

var getPickerValue = function(evt){
	picker.selected = evt.selectedValue[0];
	//console.log(picker.selected);
};

var createStory = function(){
	if(q1TextField.value === "" || q2TextField.value==="" || q3TextField.value===""){
		alert("You did not complete all the fields. Please fill out all the fields and try again.");
	}else{
		var theStory = "One day "+q1TextField.value+ " was thinking he would like to travel to "+ picker.selected+". "+ "'I know', the kerbal thought. 'I'll just "+ q2TextField.value+ " up a "+ q3TextField.value + " rocket and I'll be there in no time!' El fin.";
		var storyWindow = Ti.UI.createWindow({
			title: "Your Story",
			backgroundColor: currentWindow.backgroundColor
		});
		var story = Ti.UI.createLabel({
			font: {fontSize: 18, fontFamily: "Arial"},
			text: theStory,
			top:10,
			left:10,
			color: "#fff"
		});
		storyWindow.add(story);
		currentWindow.nav.openWindow(storyWindow); //rich note: changed this from open to openWindow
		
		console.log(q3TextField);
	}
};

picker.addEventListener("change", getPickerValue);
submitButton.addEventListener("click", createStory);