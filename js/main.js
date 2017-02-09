"use strict";

var port = chrome.runtime.connect();

var _storage = chrome.storage.local;

var _url = document.location.pathname;
var _title = decodeURI(_url.substring(_url.lastIndexOf('/') + 1));
var _content = document.body.innerText;
var _path = chrome.extension.getURL('bao/');

if (_title == 'pwd.jpg') {
    $.get(document.location.href, function(res) {
        _content = res;
        load();
    });
} else {
    load();
}

function load() {
    _storage.get(['disable_markdown', 'md_model'], function(items) {
        if (items.disable_markdown) {
            return;
        }

        var js = $('<link>').attr('rel', 'icon').attr('href', _path + 'favicon.ico');
        // $(document.head).append(js);

        var _md_model = items.md_model ? items.md_model : 'show';

        if (_md_model != 'edit') {

            // document.body.setAttribute('path', _path);
            document.body.innerHTML = `
<title>${_title} - ZhaoYuJie</title>
<link rel="stylesheet" href="${_path}css/style.css">
<link rel="stylesheet" href="${_path}css/editormd.preview.css">
<link rel="stylesheet" href="${_path}css/show.css">
<div id="layout">
    <h1>${_title}</h1>
    <div id="sidebar">
        <h1>Table of Contents</h1>
        <div class="markdown-body editormd-preview-container" id="custom-toc-container">#custom-toc-container</div>
    </div>
    <div id="test-editormd-view">
       <textarea style="display:none;" name="test-editormd-markdown-doc">${_content}</textarea>               
    </div>
</div>`;

            port.postMessage({
                action: 'load',
                value: [
                    "bao/editormd.js",
                    "bao/lib/marked.min.js",

                    "bao/lib/prettify.min.js",
                    '/bao/js/show.js',
                ]
            });
        } else {
            document.body.setAttribute('path', _path);
            document.body.innerHTML = `
<title>${_title} - ZhaoYuJie</title>
<link rel="stylesheet" href="${_path}css/style.css">
<link rel="stylesheet" href="${_path}css/editormd.min.css">
<link rel="stylesheet" href="${_path}css/edit.css">
<div id="layout">
    <div id="test-editormd">
        <textarea style="display:none;">${_content}</textarea>
    </div>
</div>`;

            port.postMessage({
                action: 'load',
                value: [
                    "bao/editormd.js",
                    "bao/lib/marked.min.js",

                    "bao/lib/codemirror/codemirror.min.js",
                    "bao/plugins/link-dialog/link-dialog.js",
                    "bao/plugins/reference-link-dialog/reference-link-dialog.js",
                    "bao/plugins/image-dialog/image-dialog.js",
                    "bao/plugins/code-block-dialog/code-block-dialog.js",
                    "bao/plugins/table-dialog/table-dialog.js",
                    "bao/plugins/emoji-dialog/emoji-dialog.js",
                    "bao/plugins/goto-line-dialog/goto-line-dialog.js",
                    "bao/plugins/help-dialog/help-dialog.js",
                    "bao/plugins/html-entities-dialog/html-entities-dialog.js",
                    "bao/plugins/preformatted-text-dialog/preformatted-text-dialog.js",

                    '/bao/js/edit.js',
                ]
            });
        }
    });
}