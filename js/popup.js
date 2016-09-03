"use strict";

var storage = chrome.storage.local;

storage.get('md_model', function(items) {
	var val = items.md_model ? items.md_model : 'show';
	$(`[name="md_model"][value=${val}]`).attr('checked', true);
});
$('[name="md_model"]').change(function() {
	var _val = $(this).val();
	storage.set({
		'md_model': _val
	});
});

$('#btn-export').click(function() {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.pageCapture.saveAsMHTML({
			tabId: tab.id
		}, function(mhtml) {
			var url = URL.createObjectURL(mhtml);
			chrome.downloads.download({
				url: url,
				filename: 'export.mhtml'
			});
		});
	});
});

storage.get('disable_markdown', function(items) {
	if (items.disable_markdown) {
		$('#disable-markdown').attr('checked', 'checked');
	} else {
		$('#disable-markdown').removeAttr('checked');
	}
});

$('#disable-markdown').change(function() {
	if ($(this).prop('checked')) {
		storage.set({
			'disable_markdown': 1
		});
	} else {
		storage.remove('disable_markdown');
	}
});