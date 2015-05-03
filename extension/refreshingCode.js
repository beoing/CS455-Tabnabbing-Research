chrome.contentSettings.javascript.set({
    primaryPattern: 'http://candybox2.net/*',
	setting: 'allow'
});

chrome.contentSettings.javascript.set({
    primaryPattern: '<all_urls>',
	setting: 'block'
});

/*chrome.tabs.onCreated.addListener(function callback(tab){
	console.log("Tab created!");

	/*var site = 'http://candybox2.net/*'
	var json = { };
	json['primaryPattern'] = site;
	json['setting'] = 'block';
	chrome.contentSettings.javascript.set(json);*/

	/*chrome.contentSettings.javascript.set({
   		primaryPattern: '<all_urls>',
		setting: 'block'
	});

});*/

chrome.tabs.onActivated.addListener(function callback(activeInfo){

	/*chrome.contentSettings.javascript.set({
   		primaryPattern: '<all_urls>',
		setting: 'block'
	});*/

	chrome.tabs.getAllInWindow(null, function(tabs){
    	for (var i = 0; i < tabs.length; i++) {
	    	var url = tabs[i].url + '*';
			var json = { };
			json['primaryPattern'] = url;
			json['setting'] = 'block';
			chrome.contentSettings.javascript.set(json);
			console.log(tabs[i].id);
			chrome.tabs.reload(tabs[i].id);
	    }
	});
	console.log("Tab focus changed!");

	chrome.tabs.getSelected(null, function(tab) {
        var url = tab.url + '*';
		var json = { };
		json['primaryPattern'] = url;
		json['setting'] = 'allow';
		chrome.contentSettings.javascript.set(json);
		setTimeout(function(){
	    	console.log("Waiting?");
		}, 500);
		chrome.tabs.reload();
    });

	

});


