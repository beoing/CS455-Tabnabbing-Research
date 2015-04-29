chrome.contentSettings.javascript.set({
    primaryPattern: '<all_urls>',
	setting: 'block'
});


/*
chrome.tabs.onCreated.addListener(function callback(tab){

        var url = 'http://candybox2.net/*';
        var json = { };
	json['primaryPattern'] = url;
	json['setting'] = 'allow';

        console.log(json['primaryPattern']);
	chrome.contentSettings.javascript.set(json);

});*/

var lasttab;

chrome.tabs.onHighlightChanged.addListener(function callback(tab){


	if (lasttab != null)
	{
		var url = lasttab;
		//var url = lasttab;
        	var json = { };
		json['primaryPattern'] = url;
		json['setting'] = 'block';
        	console.log(json['primaryPattern']);
		chrome.contentSettings.javascript.set(json);
	}

/*
	var newurl;
	var newjson = { };
	var activeurl;
*/
	chrome.tabs.onActivated.addListener(function callback(activeInfo){

		var newurl;
		var newjson = { };
		var activeurl;

		chrome.tabs.getSelected(null, function(tab) {//problem
        	newurl = tab.url;
      		activeurl = newurl.concat('*');
                console.log(activeurl);
		newjson['primaryPattern'] = activeurl;
		newjson['setting'] = 'allow';
		console.log(newjson['primaryPattern']);
		
		chrome.contentSettings.javascript.set(newjson);
		lasttab = newurl;
		});

    	});

/*
	var url = 'http://candybox2.net/*';
        var json = { };
	json['primaryPattern'] = url;
	json['setting'] = 'allow';
        console.log(json['primaryPattern']);
	chrome.contentSettings.javascript.set(json);
	lasttab = url;
*/
});








/*
chrome.tabs.onActivated.addListener(function callback(activeInfo){
	console.log("Active!");

	var url;
	chrome.tabs.getSelected(null, function(tab) {
        url = tab.url;
	console.log(url);

        var activeurl = url.concat('*');
                console.log(activeurl);
	chrome.contentSettings.javascript.set({
                primaryPattern: 'http://candybox2.net/*',
	        setting: 'allow'
        });

    });*/


	console.log("White Listing!");
/*        var star = '*';
        var activeurl = url.concat(star);
        console.log(url);

        var str1 = String(url);
        var str2 = "world!";
        var res = str1.concat(str2);
        console.log(res);*/
/*
	chrome.contentSettings.javascript.set({
        primaryPattern: url + '*',
	setting: 'allow'
    });*/
