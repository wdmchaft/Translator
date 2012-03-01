// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    title:'Home',
    url:'views/index.js',
    backgroundColor:'#fff'
});
var tab = Titanium.UI.createTab({  
    window:win
});

// win.hideTabBar();
//
//  add tabs
//
tabGroup.addTab(tab);   

// open tab group
tabGroup.open();
