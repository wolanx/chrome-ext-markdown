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
    PATH + "languages/en",
    PATH + "plugins/link-dialog/link-dialog",
    PATH + "plugins/reference-link-dialog/reference-link-dialog",
    PATH + "plugins/image-dialog/image-dialog",
    PATH + "plugins/code-block-dialog/code-block-dialog",
    PATH + "plugins/table-dialog/table-dialog",
    PATH + "plugins/emoji-dialog/emoji-dialog",
    PATH + "plugins/goto-line-dialog/goto-line-dialog",
    PATH + "plugins/help-dialog/help-dialog",
    PATH + "plugins/html-entities-dialog/html-entities-dialog",
    PATH + "plugins/preformatted-text-dialog/preformatted-text-dialog"
];

seajs.use(deps, function($, editormd) {
    var testEditor = editormd("test-editormd", {
        width: "90%",
        height: 640,
        path: PATH + 'lib/',
        // markdown: md,
        // toolbar: false, // 关闭工具栏
        onload: function() {
            this.fullscreen();
        }
    });
});