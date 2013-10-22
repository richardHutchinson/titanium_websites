Ti.include("db/database.js");

var db = Ti.App.listDb;
db.createTable();
var data = db.lists.getAll();

for(var i =0; i<data.length; i++){
  datum = data[i];
  datum.hasChild=true;
  datum.toUrl="windows/window2.js";
  datum.title = datum.content;
  delete datum.content;
}

