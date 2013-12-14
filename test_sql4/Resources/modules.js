var win = Ti.UI.currentWindow;

//rich note: may move
//Open SQLite DB, if does not exist, create one.
var db = Ti.Database.open('users');
db.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, user TEXT)');

var data = getRowData();

var tableView = Ti.UI.createTableView({
	data : data,
	editable : false,
	top : 50,
});

// The Edit Window
var editWindow = Ti.UI.createWindow({
	title : 'This is a test',
	backgroundColor : '#fff',
	layout : 'vertical'
});

//Create Input Fields for form
var fnameField = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : 10,
	left : 10,
	width : 450,
	height : 60,
	hintText : "First Name",
});

var lnameField = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : 70,
	left : 10,
	width : 450,
	height : 60,
	hintText : "Last Name",
});

//Create submit button for form
var submitBtn = Ti.UI.createButton({
	top : 140,
	left : 10,
	width : 450,
	height : 50,
	title : "Submit"
});

//Click event for submit button.
submitBtn.addEventListener('click', function(e) {

	//Make sure required fields are entered, else error.
	//This should totally be a function.
	if (lnameField.value == '' && fnameField.value == '') {
		alert('First Name is a required field.');
	} else if (lnameField.value == '') {
		alert('Last Name is a required field.');
	} else if (fnameField.value == '') {
		alert('First Name and Last Name are required fields.');
	} else {
		var userInput = {};
		userInput.first_name = fnameField.value;
		userInput.last_name = lnameField.value;

		var saveData = escape(JSON.stringify(userInput));

		//Set that data, and saniize with parameterization!!
		db.execute('INSERT INTO users (user) VALUES(?)', saveData);

		//Clear input fields upon success
		fnameField.value = '';
		lnameField.value = '';

		//Drop keyboard
		fnameField.blur();
		lnameField.blur();

		data = getRowData();
		tableView.setData(data);

		//Let the user know it has been saved
		alert(saveData + ' has been saved!');
	}
});

var editfname = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	width : 350,
	height : 60,
	top : 10,
	hintText : "First Name",
});

var editlname = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	width : 350,
	height : 60,
	hintText : "Last Name",
});

var saveButton = Ti.UI.createButton({
	title : 'Save',
	height : 50,
	width : 350
});

var cancelButton = Ti.UI.createButton({
	title : 'Cancel',
	height : 50,
	width : 350
});

editWindow.add(editfname);
editWindow.add(editlname);
editWindow.add(saveButton);
editWindow.add(cancelButton);

win1.add(fnameField);
win1.add(lnameField);
win1.add(submitBtn);

//rich note: this moves too
function getRowData() {
	var newdata = [];
	//Loop through data for window #2
	var rows = db.execute('SELECT * FROM users');
	while (rows.isValidRow()) {
		var parsedData = unescape(rows.fieldByName('user'));
		var displayData = JSON.parse(parsedData);

		//Add table row
		//Store the fields directly to the rowData
		newdata.push({
			title : displayData.first_name + " " + displayData.last_name,
			first_name : displayData.first_name,
			last_name : displayData.last_name,
			id : rows.fieldByName('id')
		});
		rows.next();
	}

	return newdata;
}

//Create options dialog box
var opts = {
	cancel : 2,
	options : ['Edit', 'Delete', 'Cancel'],
	selectedIndex : 2,
	destructive : 1,
	title : 'Delete File?'
};

//Click event for options dialog
tableView.addEventListener('click', function(e) {
	//Grab rowData stored in the row
	var id = e.rowData.id;
	var fname = e.rowData.first_name;
	var lname = e.rowData.last_name;

	//Add dialogue options
	var dialog = Ti.UI.createOptionDialog(opts);

	//Listen for each option in the options dialog
	dialog.addEventListener('click', function(e) {
		if (e.index === 0) {
			//edit

			// populate that into the fields
			editfname.value = fname;
			editlname.value = lname;

			editWindow.open();

			var saveMagic = function() {
				//This REALLY should be a function.
				if (editfname.value == '' && editlname.value == '') {
					alert('First Name is a required field.');
				} else if (editlname.value == '') {
					alert('Last Name is a required field.');
				} else if (editfname.value == '') {
					alert('First Name and Last Name are required fields.');
				} else {
					var userInput = {};
					userInput.first_name = editfname.value;
					userInput.last_name = editlname.value;

					var saveData = escape(JSON.stringify(userInput));

					//Set that data, and saniize with parameterization!!

					db.execute("UPDATE users SET user=? WHERE id=?", saveData, id);

					//Clear input fields upon success
					editfname.value = '';
					editlname.value = '';

					//Drop keyboard
					editfname.blur();
					editlname.blur();

					// update into db

					data = getRowData();
					tableView.setData(data);

					//Remove Event Listener
					saveButton.removeEventListener('click', saveMagic);
					editWindow.close();
					alert('Row updated!');
				}
			};
			saveButton.addEventListener('click', saveMagic);

			var cancelMagic = function() {
				//Remove Event Listener
				cancelButton.removeEventListener('click', cancelMagic);
				editWindow.close();
			};
			cancelButton.addEventListener('click', cancelMagic);

			editWindow.open();
		} else if (e.index === 1) {
			//delete
			db.execute('DELETE FROM users WHERE id=?', id);

			data = getRowData();
			tableView.setData(data);

			alert('Row deleted!');
		}
	});
	dialog.show();
});

win2.add(tableView);
