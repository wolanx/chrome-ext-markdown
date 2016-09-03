//chrome-extension://amncdlgpdfhcbmhfkhpomghjojpgnnpk/bao/js/sea.js?_=1472905978225

var PATH = document.body.getAttribute('path');

seajs.config({
	base: PATH,
	alias: {
		jquery: "js/jquery.min",
		editormd: "editormd"
	}
});

var deps = [
	"jquery",
	"editormd",
	PATH + "lib/marked.min",
	PATH + "lib/prettify.min",
    PATH + "lib/underscore.min",
    PATH + "lib/flowchart.min",
    PATH + "lib/jquery.flowchart.min",
];

seajs.use(deps, function($, editormd) {
	editormd.markdownToHTML('test-editormd-view', {
		htmlDecode: "style,script,iframe", // you can filter tags decode
		taskList: true,
        path: PATH + 'lib/',
		tocm: true, // Using [TOCM]
		tocContainer: "#custom-toc-container", // 自定义 ToC 容器层
	});
});