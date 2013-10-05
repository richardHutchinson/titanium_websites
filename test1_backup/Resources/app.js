/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {
	
	/*
	//rich note: start sql
	var db = Ti.Database.install('mydb1', 'mydb1Installed');
	//var db = Ti.Database.open('mydb1Installed');
	db.execute('CREATE TABLE IF NOT EXISTS people (name TEXT, phone_number TEXT, city TEXT)');
	
	var personArray = ['Paul','020 7000 0000', 'London'];
	db.execute('INSERT INTO people (name, phone_number, city) VALUES (?, ?, ?)', personArray);
	
	var rows = db.execute('SELECT rowid,name,phone_number,city FROM people');
	
	Ti.API.info('Row count: ' + rows.rowCount);
	var fieldCount;
	// fieldCount is a property on Android.
	if (Ti.Platform.name === 'android') {
	    fieldCount = rows.fieldCount;
	} else {
	    fieldCount = rows.fieldCount();
	}
	Ti.API.info('Field count: ' + fieldCount);
	
	while (rows.isValidRow()){
		Ti.API.info('Person ---> ROWID: ' + rows.fieldByName('rowid') + ', name:' + rows.field(1) + ', phone_number: ' + rows.fieldByName('phone_number') + ', city: ' + rows.field(3));
		alert(rows.fieldByName("phone_number"));
		rows.next();
	}
	
	rows.close();
	db.close();
	//rich note: end sql
	*/
	
	//rich note: start sql testing 2
	
	//rich note: end sql testing 2
	
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		Window = require('ui/handheld/ApplicationWindow');
	}

	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	new ApplicationTabGroup(Window).open();
})();
