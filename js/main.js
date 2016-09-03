"use strict";

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

        var _md_model = items.md_model ? items.md_model : 'show';

        if (_md_model != 'edit') {

            document.body.setAttribute('path', _path);
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
</div>`
            var js = $('<script/>').attr('type', 'text/javascript').attr('src', _path + 'js/sea.js');
            $(document.head).append(js);
            var js = $('<script/>').attr('type', 'text/javascript').attr('src', _path + 'js/show.js');
            $(document.head).append(js);
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
</div>`
            var js = $('<script/>').attr('type', 'text/javascript').attr('src', _path + 'js/sea.js');
            $(document.head).append(js);
            var js = $('<script/>').attr('type', 'text/javascript').attr('src', _path + 'js/edit.js');
            $(document.head).append(js);
        }
    });
}