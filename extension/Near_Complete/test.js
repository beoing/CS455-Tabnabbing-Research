var lasttab;
var lasttabid;
chrome.tabs.onHighlightChanged.addListener(function callback(tab){

	//Block the tab you just came from
	if (lasttab != null)
	{
		var url = lasttab;
        var json = { };
		
		json['primaryPattern'] = url;
		json['setting'] = 'block';
        
		console.log(json['primaryPattern']);
		chrome.contentSettings.javascript.set(json);
		chrome.tabs.reload(lasttabid);
	}

		var newurl;
		var newjson = { };
		var activeurl;

		//Unblocks the active tab
		chrome.tabs.getSelected(null, function(tab) {

        	newurl = tab.url;
      		activeurl = newurl.concat('*');
            console.log(activeurl);
			newjson['primaryPattern'] = activeurl;
			newjson['setting'] = 'allow';
			console.log(newjson['primaryPattern']);
		
			chrome.contentSettings.javascript.set(newjson);
			lasttab = activeurl;
			lasttabid = tab.id;
			chrome.tabs.reload(tab.id);

    	});

});

