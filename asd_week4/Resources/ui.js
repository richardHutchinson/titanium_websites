// Generated by CoffeeScript 1.6.3
(function() {
	var form, imageDirectoryName, makeRow, reddit_posts, tab1, tab2, tabGroup, win1;

	Ti.UI.setBackgroundColor('#000');

	form = require('form');

	imageDirectoryName = 'reddit_thumbnails';

	tabGroup = Ti.UI.createTabGroup();

	win1 = Ti.UI.createWindow({
		title : 'Tab 1',
		backgroundColor : '#fff'
	});

	tab1 = Ti.UI.createTab({
		icon : 'KS_nav_views.png',
		title : 'Tab 1',
		window : win1
	});

	reddit_posts = Ti.UI.createTableView();

	win1.add(reddit_posts);

	makeRow = function(p) {
		var current_length, file, filename, g, row, xhr;
		row = Ti.UI.createTableViewRow({
			className : 'redditPost',
			leftImage : '/images/reddit_default.png',
			title : p.title
		});
		if (p.over_18) {
			row.leftImage = '/images/reddit_nsfw.png';
			return reddit_posts.appendRow(row);
		} else if (p.thumbnail === 'default') {
			return reddit_posts.appendRow(row);
		} else {
			filename = p.thumbnail.split('/');
			filename = filename[filename.length - 1];
			file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, imageDirectoryName, filename);
			if (file.exists()) {
				row.leftImage = file.nativePath;
				return reddit_posts.appendRow(row);
			} else {
				reddit_posts.appendRow(row);
				current_length = reddit_posts.data[0].rows.length;
				g = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, imageDirectoryName);
				if (!g.exists()) {
					g.createDirectory();
				}
				xhr = Ti.Network.createHTTPClient({
					onload : function() {
						if (xhr.status === 200) {
							file.write(xhr.responseData);
							return reddit_posts.data[0].rows[current_length - 1].setLeftImage(file.nativePath);
						}
					},
					onerror : function(e) {
						Ti.API.debug("STATUS: " + this.status);
						Ti.API.debug("TEXT:   " + this.responseText);
						Ti.API.debug("ERROR:  " + e.error);
						Ti.API.debug("LOCATION: " + this.location);
						return alert('There was an error retrieving the remote data. Try again.');
					}
				});
				xhr.open('GET', p.thumbnail);
				return xhr.send();
			}
		}
	};

	exports.resetPostRows = function(posts) {
		var p, _i, _len, _results;
		reddit_posts.setData([]);
		_results = [];
		for ( _i = 0, _len = posts.length; _i < _len; _i++) {
			p = posts[_i];
			_results.push(makeRow(p));
		}
		return _results;
	};

	tab2 = Ti.UI.createTab({
		icon : 'KS_nav_ui.png',
		title : 'Tab 2',
		window : form.win
	});

	tabGroup.addTab(tab1);

	tabGroup.addTab(tab2);

	tabGroup.open();

}).call(this); 