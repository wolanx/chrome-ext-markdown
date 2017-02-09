//chrome-extension://amncdlgpdfhcbmhfkhpomghjojpgnnpk/bao/js/sea.js?_=1472905978225

console.log('show.js');

var PATH = document.body.getAttribute('path');

setTimeout(function() {
	if (location.hash) {
		location.href = location.hash
	}
}, 100);

$(function() {
	setTimeout(function() {
		editormd.markdownToHTML('test-editormd-view', {
			htmlDecode: "style,script,iframe", // you can filter tags decode
			taskList: true,
			path: PATH + 'lib/',
			tocm: true, // Using [TOCM]
			tocContainer: "#custom-toc-container", // 自定义 ToC 容器层
		});
	}, 1000);
});