var main = Titanium.UI.createWindow({
    backgroundColor:'#336699',
    title:'Main Window'
});
var b3 = Titanium.UI.createButton({
    title:'Open New Win',
    width:200,
    height:40,
    top:110
});
main.add(b3);
 
b3.addEventListener('click', function()
{
    var w = Titanium.UI.createWindow({
        backgroundColor:'#336699',
        title:'New Window',
        barColor:'black',
        url:'newWin.js'
    });
    var b = Titanium.UI.createButton({
        title:'Close',
        style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
    });
    w.add(b);
    b.addEventListener('click',function()
    {
        w.close();
    });
    w.open();
});
 
main.open();