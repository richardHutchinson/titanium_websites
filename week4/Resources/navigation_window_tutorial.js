var win2 = Titanium.UI.createWindow({
    backgroundColor: '#500',
    title: 'Red Window'
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: win2
});

var win3 = Titanium.UI.createWindow({
    backgroundColor: '#005',
    title: 'Blue Window'
});

var button = Titanium.UI.createButton({
    title: 'Open Blue Window'
});
button.addEventListener('click', function(){
    win1.openWindow(win3, {animated:true});
});

win2.add(button);
var button2 = Titanium.UI.createButton({
    title: 'Close Blue Window'
});
button2.addEventListener('click', function(){
    win1.closeWindow(win3, {animation:false}); //win3.close() will also work!!
});

win3.add(button2);
win1.open();

//----

var win = Ti.UI.createWindow({
  backgroundColor: 'white',
  exitOnClose: true,
  fullscreen: false,
  layout: 'vertical',
  title: 'Label Demo'
});

var label1 = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:10 },
  shadowColor: '#aaa',
  //shadowOffset: {x:5, y:5},
  text: 'A simple label',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  //align: "center",
  top: 30,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});

var label2 = Ti.UI.createLabel({
  color:'blue',
  text: 'A long label with\na few line breaks\nand unicode (UTF8)\nsymbols such as\na white chess piece \u2655\nand the euro symbol \u20ac\nlooks like this!\n',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 30,
  width: 300, height: 200
});

win.add(label1);
win.add(label2);
win.open();

//----

