// create table view data object
var data = [
	{title:'Apple', hasChild:true, test:'items/apple.js'},
	{title:'Bag', hasChild:true, test:'items/bag.js'},
	{title:'Beer', hasChild:true, test:'items/beer.js'},
	{title:'Bike', hasChild:true, test:'items/bike.js'},
	{title:'Boat', hasChild:true, test:'items/boat.js'},
	{title:'Bread', hasChild:true, test:'items/bread.js'},
	{title:'Bus', hasChild:true, test:'items/bus.js'},
	{title:'Cake', hasChild:true, test:'items/cake.js'},
	{title:'Camera', hasChild:true, test:'items/camera.js'},
	{title:'Cash', hasChild:true, test:'items/cash.js'},
	{title:'Cheese', hasChild:true, test:'items/cheese.js'},
	{title:'Cherry', hasChild:true, test:'items/cherry.js'},
	{title:'Clock', hasChild:true, test:'items/clock.js'},
	{title:'Coffee', hasChild:true, test:'items/coffee.js'},
	{title:'Cupcake', hasChild:true, test:'items/cupcake.js'},
	{title:'Dinner', hasChild:true, test:'items/dinner.js'},
	{title:'Dollars', hasChild:true, test:'items/dollars.js'},
	{title:'Egg', hasChild:true, test:'items/dollars.js'},
	{title:'Euros', hasChild:true, test:'items/euros.js'},
	{title:'Fire', hasChild:true, test:'items/fire.js'},
	{title:'Fish', hasChild:true, test:'items/fish.js'},
	{title:'Garbage', hasChild:true, test:'items/garbage.js'},
	{title:'Fuel', hasChild:true, test:'items/fuel.js'},
	{title:'Hamburger', hasChild:true, test:'items/hamburger.js'},
	{title:'Hot Dog', hasChild:true, test:'items/hotdog.js'},
	{title:'Key', hasChild:true, test:'items/key.js'},
	{title:'Mail', hasChild:true, test:'items/mail.js'},
	{title:'Martini', hasChild:true, test:'items/martini.js'},
	{title:'Moped', hasChild:true, test:'items/moped.js'},
	{title:'Museum', hasChild:true, test:'items/museum.js'},
	{title:'Music', hasChild:true, test:'items/music.js'},
	{title:'Non-Smoking', hasChild:true, test:'items/nonsmoking.js'},
	{title:'Pear', hasChild:true, test:'items/pear.js'},
	{title:'Pencil', hasChild:true, test:'items/pencil.js'},
	{title:'Phone', hasChild:true, test:'items/phone.js'},
	{title:'Pizza', hasChild:true, test:'items/pizza.js'},
	{title:'Plane', hasChild:true, test:'items/plane.js'},
    {title:'Printer', hasChild:true, test:'items/printer.js'},
	{title:'Shower', hasChild:true, test:'items/shower.js'},
	{title:'Smoking', hasChild:true, test:'items/smoking.js'},
	{title:'Spoon', hasChild:true, test:'items/spoon.js'},
	{title:'Steak', hasChild:true, test:'items/steak.js'},
	{title:'Taxi', hasChild:true, test:'items/taxi.js'},
	{title:'Train', hasChild:true, test:'items/train.js'},
	{title:'Umbrella', hasChild:true, test:'items/umbrella.js'},
	{title:'Subway', hasChild:true, test:'items/subway.js'},
	{title:'Water', hasChild:true, test:'items/water.js'},
	{title:'Watermelon', hasChild:true, test:'items/watermelon.js'},
	{title:'Wifi', hasChild:true, test:'items/wifi.js'},
	{title:'Wine', hasChild:true, test:'items/wine.js'}
];

// create table view


var win = Titanium.UI.createWindow({
	height:30,
	width:250,
	bottom:110,
	borderRadius:10
});


var view = Titanium.UI.createView({
	backgroundColor:'#000',
	opacity:0.7,
	height:30,
	width:250,
	borderRadius:10
});

win.add(view);
		

// Info Button
var infoBtn = Titanium.UI.createButton({
   title:'info',
   top: 5,
   left: 5,
   height: 30,
   width: 30
});

infoBtn.addEventListener('click', function(e){
	Ti.API.info("The button was clicked");
	
	win = Titanium.UI.createWindow({
		url: 'info.js',
		title: 'Info'
	});
	Titanium.UI.currentTab.open(win,{animated:true});
});

Ti.UI.currentWindow.setLeftNavButton(infoBtn);

//add search bar to tableview

var search = Titanium.UI.createSearchBar({
	barColor:'#000',
	showCancel:true,
	height:43,
	top:0
});

search.addEventListener('change', function(e)
{
   e.value // search string as user types
});
search.addEventListener('return', function(e)
{
   search.blur();
});
search.addEventListener('cancel', function(e)
{
   search.blur();
});
 

win.add(search);

var tableview = Titanium.UI.createTableView({
	data:data,
	search:search,
	filterAttribute:'title'
});

Titanium.UI.currentWindow.add(tableview);


// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = null;
		if (Ti.Platform.name == "android") {
			win = Titanium.UI.createWindow({
				url:e.rowData.test,
				title:e.rowData.title
			});
		} else {
			win = Titanium.UI.createWindow({
				url:e.rowData.test,
				title:e.rowData.title,
				backgroundColor:'#fff',
				barColor:'#111'
			});
		}


		if (e.index == 3)
		{
			if (Ti.Platform.name == "iPhone OS") {
				win.hideTabBar();
			}
		}
		if (Ti.Platform.name==='android' && e.rowData.test.indexOf('window_properties.js') >= 0) {
			// As explained in apidoc for Window, if opacity is ever to be changed for an Android
			// activity during its lifetime, it needs to use a translucent background.  We trigger
			// using a translucent theme by the presence of the opacity property, so we need to
			// set it here.  Setting it to 1 means it's totally opaque, but gives us the property to
			// make it more transparent later with the "toggle opacity" test.
			win.backgroundColor = "#191919"
			win.opacity = 1;
		}
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});




