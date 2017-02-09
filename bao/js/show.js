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
			// tex: true, // 开启科学公式TeX语言支持，默认关闭
			flowChart: true, // 开启流程图支持，默认关闭
			sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,

			tocContainer: "#custom-toc-container", // 自定义 ToC 容器层
		});
	}, 0);
});