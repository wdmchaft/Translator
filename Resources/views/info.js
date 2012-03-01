var win = Ti.UI.currentWindow;

var view = Ti.UI.createView({
	height:400,
	width:320,
	backgroundColor:'#fff'
});
win.add(view);

var label = Ti.UI.createLabel({
	text:'Attributions',
	top: 30,
	align:'center',
	width:'auto',
	height:30
});

view.add(label);
