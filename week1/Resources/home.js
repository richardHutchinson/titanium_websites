var quotes = [
	"a",
	"b",
	"c"
];

var counter = 0;

var getPrev = function() {
	//counting backwards
	if(counter === 0) {
		counter = (quotes.length - 1);
		//can console the loop around of the previous value from the quotes array[] - ex: 2,1,0 then previous would go back to 2,1,0 if at 0.
		text.text = counter + 1 + '. "' + quotes[counter] + '"';
	}else {
		counter--;
		//can console the previouse value here - console.log(quotes[counter]);
		text.text = counter + 1 + '. "' + quotes[counter] + '"'; //note: not sure what this is doing
	}
};

var getNext = function() {
	if(counter === (quotes.length - 1)) {
		counter = 0;
		//alert(text.text); //note: first text is the label and the second text is the key
		text.text = counter + 1 + '. "' + quotes[counter] + '"';
	}else {
		counter++;
		text.text = counter + 1 + '. "' + quotes[counter] + '"';
	}
};

var view = Ti.UI.createView({
	top: 30,
	bottom: 100,
	left: 20,
	right: 20,
	backgroundColor: "#999"
});

var text = Ti.UI.createLabel({
	color: "#000",
	text: counter + 1 + '. "' + quotes[counter] + '"',
	font: {
		fontSize: 20,
		fontFamily: "Arial"
	},
	textAlign: "left",
	width: "auto",
	left: 20,
	right: 20
});

var previous = Ti.UI.createView({
	bottom: 20,
	left: 20,
	width: 100,
	height: 50,
	backgroundColor: "#483"
});

var previousText = Ti.UI.createLabel({
	color: "#000",
	text: "Previous",
	font: {
		fontSize: 14,
		fontFamily: "Arial"
	}
});

var next = Ti.UI.createView({
	bottom: 20,
	right: 20,
	width: 100,
	height: 50,
	backgroundColor: "#483"
});

var nextText = Ti.UI.createLabel({
	color: "#000",
	text: "Next",
	font: {
		fontSize: 14,
		fontFamily: "Arial"
	}
});

win1.add(view);
view.add(text);

win1.add(previous);
previous.add(previousText);

win1.add(next);
next.add(nextText);

previous.addEventListener("click", getPrev);
next.addEventListener("click", getNext);
