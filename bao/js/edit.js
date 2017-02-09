//chrome-extension://amncdlgpdfhcbmhfkhpomghjojpgnnpk/bao/js/sea.js?_=1472905978225

var PATH = document.body.getAttribute('path');


$(function() {
    setTimeout(function() {
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
    }, 0);
});