chrome.runtime.onConnect.addListener(function(port) {
	port.onMessage.addListener(function(msg) {
		msg.value.forEach(function(val, i) {
			console.log(val);
			chrome.tabs.executeScript(null, {
				file: val
			});
		});
	});
});